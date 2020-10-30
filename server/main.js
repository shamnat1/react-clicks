import { Meteor } from 'meteor/meteor';
import { UsersCollection } from '/imports/db/UsersCollection';
import '/imports/api/userMethods';

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (UsersCollection.find().count() === 0) {

  }
});
