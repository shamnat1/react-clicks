import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import {UsersCollection} from "../api/UsersCollection";
import {User} from "./User";

export const Click = () => {
    const [counter, setCounter] = useState(0);
    const users = useTracker(() => UsersCollection.find({}).fetch());
    let userInfo = useTracker(() =>  UsersCollection.findOne({"_id":Session.get("userId")}));
  const increment = () => {
      if(userInfo) {
          console.log("user55 ",userInfo._id,userInfo.clickCount)
              Meteor.call('users.updateClicks', userInfo._id,userInfo.clickCount?userInfo.clickCount+1:1,function(error, response){
              console.log("yy ",error,response)
          });
          console.log("yy ",userInfo)
      }
    setCounter(counter + 1);

  };

  return (
    <div>
        <div className="click">
            <button onClick={increment}>Click Me</button>
        </div>

       <h2>Current Clicks</h2>
      <p>You've pressed the button {counter} times.</p>
        <h2>Total Clicks</h2>
        <p>You've pressed the button {userInfo.clickCount} times.</p>
        { users.map(user => <User key={ user._id } user={ user }/>) }
    </div>
  );
};
