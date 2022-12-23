import React from 'react';
import cls from './ProfileInfo.module.scss'
import {Card, CardContent, CardHeader, Divider} from "@mui/material";
import cl from "../feed/Feed.module.scss";
import UserInfo from "./UserInfo";
import UserFriends from "./UserFriends";
import {Users} from "../../usersData";

const ProfileInfo = () => {

    return (
        <Card className={cl.feed__users}>
            <CardHeader
                subheader="User information"
            />
            <Divider/>
            <CardContent>
                <UserInfo/>
                <Divider/>
                <CardHeader
                    subheader="User friends"
                />
                <div className={cls.infoUser__wrapper}>
                    {Users.map(user =>
                        <UserFriends user={user} key={user.id}/>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

export default ProfileInfo;