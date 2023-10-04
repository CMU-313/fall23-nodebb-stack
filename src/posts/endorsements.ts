'use strict';

import * as db from '../database';
import { PostObject } from '../types';


interface myPostObject extends PostObject{
    edited?: number;
    editedISO?: string;
}

export = function (Posts : myPostObject) {
    async function toggleVote(type, pid, uid) {
        const voteStatus = await Posts.endorsements;
        await unendorse(pid, uid, type, voteStatus);
        return await endorse(type, false, pid, uid, voteStatus);
    }

    async function unendorse(pid, uid, type, voteStatus) {
        const owner = await Posts.pid;
        return await endorse(voteStatus.upvoted ? 'downvote' : 'upvote', true, pid, uid, voteStatus);
    }

};
