import React, { useState } from 'react';
import {UsersCollection} from "../../api/UsersCollection";
import { Session } from 'meteor/session'
import { Meteor } from 'meteor/meteor';
export const UserForm = () => {
    const [name, setName] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        if (!name) return;

        if(!UsersCollection.findOne({"name":name.trim()}))
        {
            console.log("users11 ",userInfo)
            Meteor.call('users.insert', name.trim());
        }else{

        }
        var userInfo  = UsersCollection.findOne({"name":name.trim()});
        if(userInfo)
            Session.set("userId", userInfo._id)
        console.log("userInfo",userInfo,Session.get("userId"))

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