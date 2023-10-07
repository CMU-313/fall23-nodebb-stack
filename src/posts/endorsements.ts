'use strict';

import * as db from '../database';
import { PostObject } from '../types';
const topics = require('../topics');


interface myPostObject extends PostObject{
    edited?: number;
    editedISO?: string;
}

export = function (Posts : myPostObject) {
    async function toggleEndorsement(type, pid, uid) {
        const voteStatus = await Posts.endorsements;
        await unendorse(pid, uid, type, voteStatus);
        return await endorse(type, false, pid, uid, voteStatus);
    }

    async function unendorse(pid, uid, type, voteStatus) {
        const owner = await Posts.pid;
        return await endorse(voteStatus.upvoted ? 'downvote' : 'upvote', true, pid, uid, voteStatus);
    }

    async function endorse(type, unvote, pid, uid, voteStatus) {
        uid = parseInt(uid, 10);
        if (uid <= 0) {
            throw new Error('[[error:not-logged-in]]');
        }
        const now = Date.now();

        if (type === 'upvote' || unvote) {
            await db.sortedSetRemove(`uid:${uid}:endorsements`, pid);
        } else {
            await db.sortedSetAdd(`uid:${uid}:endorsements`, now, pid);
        }
    }

    async function updateEndorsementVoteCount(postData) {
        const topicData = await topics.getTopicFields(postData.tid, ['mainPid', 'cid', 'pinned']);

        if (postData.uid) {
            if (postData.votes !== 0) {
                await db.sortedSetAdd(`cid:${topicData.cid}:uid:${postData.uid}:pids:votes`, postData.votes, postData.pid);
            } else {
                await db.sortedSetRemove(`cid:${topicData.cid}:uid:${postData.uid}:pids:votes`, postData.pid);
            }
        }

        if (parseInt(topicData.mainPid, 10) !== parseInt(postData.pid, 10)) {
            return await db.sortedSetAdd(`tid:${postData.tid}:posts:votes`, postData.votes, postData.pid);
        }
        const promises = [
            topics.setTopicFields(postData.tid, {
                upvotes: postData.upvotes,
                downvotes: postData.downvotes,
            }),
            db.sortedSetAdd('topics:endorsements', postData.votes, postData.tid),
        ];
        if (!topicData.pinned) {
            promises.push(db.sortedSetAdd(`cid:${topicData.cid}:tids:endorsements`, postData.votes, postData.tid));
        }
        await Promise.all(promises);
    }
};
