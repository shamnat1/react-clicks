import React,{  Fragment } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { UsersCollection } from '/imports/db/UsersCollection';
import { User } from './User';
import { Click } from './Click.jsx';
import { UserForm } from './forms/UserForm';
import { Session } from 'meteor/session'

export const App = () => {
  const userInfo = useTracker(() =>  UsersCollection.findOne({"_id":Session.get("userId")}));
  return(
    <div className="app">
      <header>
        <div className="app-bar">
          <div className="app-header">
            <h1> Welcome to Meteor! {userInfo?userInfo.name:""}</h1>
          </div>
        </div>
      </header>

        <div className="main">
            {
            userInfo? (
                <Fragment>
                  <div className="users">
                    <Click/>
                  </div>
                </Fragment>
            ):(<UserForm/>)
            }
        </div>
    </div>
  )
};
