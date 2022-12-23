import React from 'react';
import {List} from "@mui/material";
import {Users} from "../../usersData"
import RightbarUserItem from "./RightbarUserItem";

const RightbarUsersList = () => {
    return (
        <List>
            {Users.map(user =>
                <RightbarUserItem user={user} key={user.id}/>
            )}
        </List>
    );
};

export default RightbarUsersList;