"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
// obtained from https://github.com/CMU-313/NodeBB/pull/260/files#diff-e3d91fad02a5b87423119c5d1933c8e483eb6c18d1a1fa2a67a85770faec3753
// joycehua implementation
const database_1 = __importDefault(require("../database"));
const user_1 = __importDefault(require("../user"));
module.exports = function (Groups) {
    Groups.getUsersFromSet = async function (set, fields) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        const uids = await database_1.default.getSetMembers(set);
        if (fields) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            return await user_1.default.getUsersFields(uids, fields);
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        return await user_1.default.getUsersData(uids);
    };
    Groups.getUserGroups = async function (uids) {
        return await Groups.getUserGroupsFromSet('groups:visible:createtime', uids);
    };
    Groups.getUserGroupsFromSet = async function (set, uids) {
        const memberOf = await Groups.getUserGroupMembership(set, uids);
        return await Promise.all(memberOf.map(memberOf => Groups.getGroupsData(memberOf)));
    };
    async function findUserGroups(uid, groupNames) {
        const isMembers = await Groups.isMemberOfGroups(uid, groupNames);
        return groupNames.filter((name, i) => isMembers[i]);
    }
    Groups.getUserGroupMembership = async function (set, uids) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        const groupNames = await database_1.default.getSortedSetRevRange(set, 0, -1);
        return await Promise.all(uids.map(uid => findUserGroups(uid, groupNames)));
    };
    Groups.getUserInviteGroups = async function (uid) {
        let allGroups = await Groups.getNonPrivilegeGroups('groups:createtime', 0, -1);
        allGroups = allGroups.filter(group => !Groups.ephemeralGroups.includes(group.name));
        const publicGroups = allGroups.filter(group => group.hidden === 0 && group.system === 0 && group.private === 0);
        const adminModGroups = [
            { name: 'administrators', displayName: 'administrators' },
            { name: 'Global Moderators', displayName: 'Global Moderators' },
        ];
        // Private (but not hidden)
        const privateGroups = allGroups.filter(group => group.hidden === 0 &&
            group.system === 0 && group.private === 1);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        const [ownership, isAdmin, isGlobalMod] = await Promise.all([
            Promise.all(privateGroups.map(group => Groups.ownership.isOwner(uid, group.name))),
            user_1.default.isAdministrator(uid),
            user_1.default.isGlobalModerator(uid),
        ]);
        const ownGroups = privateGroups.filter((group, index) => ownership[index]);
        let inviteGroups = [];
        if (isAdmin) {
            inviteGroups = inviteGroups.concat(adminModGroups).concat(privateGroups);
        }
        else if (isGlobalMod) {
            inviteGroups = inviteGroups.concat(privateGroups);
        }
        else {
            inviteGroups = inviteGroups.concat(ownGroups);
        }
        return inviteGroups
            .concat(publicGroups);
    };
};
