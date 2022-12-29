import React, {useEffect, useState} from 'react';
import cls from './ProfileInfo.module.scss'
import {Card, CardContent, CardHeader, Divider} from "@mui/material";
import UserInfo from "./UserInfo";
import axios from "axios";
import UserFriends from "./UserFriends";

const ProfileInfo = (props) => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const getFriends = async () => {
            try {
                const friendList = await axios.get("/users/friends/" + props.user._id);
                setFriends(friendList.data);
            } catch (e) {
                console.log(e)
            }
        }
        getFriends();
    }, [props.user._id]);

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
                    {friends.map(friend =>
                        <UserFriends friend={friend} key={friend._id}/>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

export default ProfileInfo;