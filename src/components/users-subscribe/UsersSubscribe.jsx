import React from 'react';
import {List} from "@mui/material";
import cl from './UsersSubscribe.module.scss';
import UserSubscribeItem from "./UserSubscribeItem";
import {Users} from "../../usersData";

const UsersSubscribe = () => {

    return (
        <List className={cl.users}>
            {Users.map(user =>
                <UserSubscribeItem user={user} key={user.id} />
            )}
        </List>
    );
};

export default UsersSubscribe;