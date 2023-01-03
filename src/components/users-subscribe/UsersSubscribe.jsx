import React, {useContext, useEffect, useState} from 'react';
import {List} from "@mui/material";
import cl from './UsersSubscribe.module.scss';
import UserSubscribeItem from "./UserSubscribeItem";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";

const UsersSubscribe = () => {
    const { user: currentUser } = useContext(AuthContext);
    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        const getFollowers = async () => {
            try {
                const followersList = await axios.get("/users/followers/" + currentUser._id);
                setFollowers(followersList.data);
            } catch (e) {
                console.log(e)
            }
        }
        getFollowers();
    }, [currentUser._id]);


    return (
        <List className={cl.users}>
            {followers.map(follower =>
                <UserSubscribeItem follower={follower} key={follower._id} />
            )}
        </List>
    );
};

export default UsersSubscribe;