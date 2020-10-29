import React from 'react';

export const User = ({ user }) => {
    console.log("rr ",user,Session.get("userId"));
    let name = (Session.get("userId")==user._id)?"You've":user.name;
    return (Session.get("userId")!=user._id)?<p>{user.name}  pressed the button {user.clickCount?user.clickCount:0} times.</p>:<p></p> ;
};