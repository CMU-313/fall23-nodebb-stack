'use strict';

const _ = require('lodash');

const meta = require('../meta');
const db = require('../database');
const plugins = require('../plugins');
const user = require('../user');
const topics = require('../topics');
const categories = require('../categories');
const groups = require('../groups');
const utils = require('../utils');
const Iroh = require('iroh');

module.exports = function (Posts) {


    Posts.create = async function (data) {

        let code = `let foo = 42`;
        var stage = new Iroh.Stage(code);
        // create a listener
        let listener = stage.addListener(Iroh.VAR);
        // jump in *after* the variable got created
        listener.on("after", (e) => {
        // this logs the variable's 'name' and 'value'
        console.log(e.name, "=>", e.value); // prints "foo => 42"
        });

        eval(stage.script);

        let code2 = `if (true) {
            for (let ii = 0; ii < 3; ++ii) {
              let a = ii * 2;
            };
          }`
          
        stage = new Iroh.Stage(code2);
        stage.addListener(Iroh.LOOP)
        .on("enter", function(e) {
            // we enter the loop
            console.log(" ".repeat(e.indent) + "loop enter");
        })
        .on("leave", function(e) {
            // we leave the loop
            console.log(" ".repeat(e.indent) + "loop leave");
        });
          
        // if, else if
        stage.addListener(Iroh.IF)
        .on("enter", function(e) {
        // we enter the if
        console.log(" ".repeat(e.indent) + "if enter");
        })
        .on("leave", function(e) {
        // we leave the if
        console.log(" ".repeat(e.indent) + "if leave");
        });

        eval(stage.script);

        // This is an internal method, consider using Topics.reply instead
        const { uid } = data;
        const { tid } = data;
        const content = data.content.toString();
        const timestamp = data.timestamp || Date.now();
        const isMain = data.isMain || false;

        if (!uid && parseInt(uid, 10) !== 0) {
            throw new Error('[[error:invalid-uid]]');
        }

        if (data.toPid && !utils.isNumber(data.toPid)) {
            throw new Error('[[error:invalid-pid]]');
        }

        const pid = await db.incrObjectField('global', 'nextPid');
        let postData = {
            pid: pid,
            uid: uid,
            tid: tid,
            content: content,
            timestamp: timestamp,
        };

        if (data.toPid) {
            postData.toPid = data.toPid;
        }
        if (data.ip && meta.config.trackIpPerPost) {
            postData.ip = data.ip;
        }
        if (data.handle && !parseInt(uid, 10)) {
            postData.handle = data.handle;
        }

        let result = await plugins.hooks.fire('filter:post.create', { post: postData, data: data });
        postData = result.post;
        await db.setObject(`post:${postData.pid}`, postData);

        const topicData = await topics.getTopicFields(tid, ['cid', 'pinned']);
        postData.cid = topicData.cid;

        await Promise.all([
            db.sortedSetAdd('posts:pid', timestamp, postData.pid),
            db.incrObjectField('global', 'postCount'),
            user.onNewPostMade(postData),
            topics.onNewPostMade(postData),
            categories.onNewPostMade(topicData.cid, topicData.pinned, postData),
            groups.onNewPostMade(postData),
            addReplyTo(postData, timestamp),
            Posts.uploads.sync(postData.pid),
        ]);

        result = await plugins.hooks.fire('filter:post.get', { post: postData, uid: data.uid });
        result.post.isMain = isMain;
        plugins.hooks.fire('action:post.save', { post: _.clone(result.post) });
        return result.post;
    };

    async function addReplyTo(postData, timestamp) {
        if (!postData.toPid) {
            return;
        }
        await Promise.all([
            db.sortedSetAdd(`pid:${postData.toPid}:replies`, timestamp, postData.pid),
            db.incrObjectField(`post:${postData.toPid}`, 'replies'),
        ]);
    }
};
