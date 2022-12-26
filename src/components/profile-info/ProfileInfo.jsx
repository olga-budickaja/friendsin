import React from 'react';
import cls from './ProfileInfo.module.scss'
import {Card, CardContent, CardHeader, Divider} from "@mui/material";
import UserInfo from "./UserInfo";

const ProfileInfo = (props) => {
    return (
        <Card>
            <CardHeader
                subheader="User information"
            />
            <Divider/>
            <CardContent>
                <UserInfo props={props.user}/>
                <Divider/>
                <CardHeader
                    subheader="User friends"
                />
                <div className={cls.infoUser__wrapper}>
                    {/*{props.user?.followings.map((following, index) =>*/}
                    {/*    <UserFriends following={following} key={index}/>*/}
                    {/*)}*/}
                </div>
            </CardContent>
        </Card>
    );
};

export default ProfileInfo;