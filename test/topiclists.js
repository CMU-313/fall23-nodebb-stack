'use strict';

global.define = () => null;
const async = require('async');
const path = require('path');
const assert = require('assert');
const validator = require('validator');
const mockdate = require('mockdate');
const nconf = require('nconf');
const request = require('request');
const util = require('util');

const sleep = util.promisify(setTimeout);

const db = require('./mocks/databasemock');
const file = require('../src/file');
const topics = require('../src/topics');
const posts = require('../src/posts');
const categories = require('../src/categories');
const privileges = require('../src/privileges');
const meta = require('../src/meta');
const User = require('../src/user');
const groups = require('../src/groups');
const helpers = require('./helpers');
const socketPosts = require('../src/socket.io/posts');
const socketTopics = require('../src/socket.io/topics');
const apiTopics = require('../src/api/topics');
const topicList = require('../src/topicList');

describe('TopicList\'s', () => {
    let topic;
    let categoryObj;
    let adminUid;
    let adminJar;
    let csrf_token;
    let fooUid;

    before(async () => {
        adminUid = await User.create({ username: 'admin', password: '123456' });
        fooUid = await User.create({ username: 'foo' });
        await groups.join('administrators', adminUid);
        const adminLogin = await helpers.loginUser('admin', '123456');
        adminJar = adminLogin.jar;
        csrf_token = adminLogin.csrf_token;

        categoryObj = await categories.create({
            name: 'Test Category',
            description: 'Test category created by testing script',
        });
        topic = {
            userId: adminUid,
            categoryId: categoryObj.cid,
            title: 'Test Topic Title',
            content: 'The content of test topic',
        };
    });

    describe('handleSearch', () => {
        let topic1;
        let topic2;
        before((done) => {
            async.series([
                function (next) {
                    topics.post({ uid: adminUid, title: 'topic 1', content: 'content 1', cid: categoryObj.cid }, next);
                },
                function (next) {
                    topics.post({ uid: adminUid, title: 'topic 2', content: 'content 2', cid: categoryObj.cid }, next);
                },
            ], (err, results) => {
                assert.ifError(err);
                topic1 = results[0];
                topic2 = results[1];
                done();
            });
        });

        after((done) => {
            meta.config.teaserPost = '';
            done();
        });

        it('should return empty array if query doesnt match any topic titles',
            (done) => {
                topicList.handleSearch('topic 3', (err, topics) => {
                    assert.ifError(err);
                    assert.equal(0, topics.length);
                    done();
                });
            });
    });
});
