import React, { useState } from 'react';
import {UsersCollection} from "../../api/UsersCollection";
import { Session } from 'meteor/session'
import { Meteor } from 'meteor/meteor';
export const UserForm = () => {
    const [name, setName] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        if (!name) return;

        let userInfo  = UsersCollection.findOne({"name":name.trim()});
        let userId = userInfo?userInfo._id:"";
        if(userId)
            Session.set("userId", userId)
        if(!UsersCollection.findOne({"name":name.trim()}))
        {
            userId = Meteor.call('users.insert', name.trim(),function(error, result){
                 userId = result;
                    // console.log("userId ",userId)
                if(userId)
                    Session.set("userId", userId)
            });

        }



        setName("");
    };

    return (
        <form className="user-form" onSubmit={handleSubmit}>
            <input
                type="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <button type="submit">Submit</button>
        </form>
    );
};