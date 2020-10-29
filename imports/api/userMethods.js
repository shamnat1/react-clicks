import { check } from 'meteor/check';
import {UsersCollection} from "./UsersCollection";

Meteor.methods({
    'users.search'(name) {
        check(name, String);
        /*
                if (!this.userId) {
                    throw new Meteor.Error('Not authorized.');
                }*/

        UsersCollection.findOne({"name":name})
    },
    'users.insert'(name) {
        check(name, String);
/*
        if (!this.userId) {
            throw new Meteor.Error('Not authorized.');
        }*/

        UsersCollection.insert({
            name,
            createdAt: new Date,
            entry_count: 1,
        })
    },

    'users.remove'(userId) {
        check(userId, String);

        if (!this.userId) {
            throw new Meteor.Error('Not authorized.');
        }

        UsersCollection.remove(userId);
    },

    'users.updateClicks'(userId, clickCount) {
        check(userId, String);
        // check(isChecked, Boolean);
        console.log("clickCount",userId,clickCount)


        UsersCollection.update(userId, {
            $set: {
                clickCount
            }
        });
    },
    'users.setIsChecked'(userId, clickCount) {
        check(userId, String);
        // check(isChecked, Boolean);


        UsersCollection.update(userId, {
            $set: {
                clickCount
            }
        });
    }
});