import React from 'react';
import {List} from "@mui/material";
import cl from './UsersSubscribe.module.scss';
import UserSubscribeItem from "./UserSubscribeItem";

const UsersSubscribe = () => {

    return (
        <List className={cl.users}>
            <UserSubscribeItem/>
            <UserSubscribeItem/>
            <UserSubscribeItem/>
            <UserSubscribeItem/>
            <UserSubscribeItem/>
            <UserSubscribeItem/>
        </List>
    );
};

export default UsersSubscribe;