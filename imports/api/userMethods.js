import { check } from 'meteor/check';
import {UsersCollection} from "../db/UsersCollection";

Meteor.methods({
    'users.search'(name) {
        check(name, String);

        UsersCollection.findOne({"name":name})
    },
    'users.insert'(name) {
        check(name, String);
        return UsersCollection.insert({
            name,
            createdAt: new Date,
            clickCount: 0,
        })
    },

    'users.remove'(userId) {
        check(userId, String);



        UsersCollection.remove(userId);
    },

    'users.updateClicks'(userId, clickCount) {
        check(userId, String);
        // check(isChecked, Boolean);
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