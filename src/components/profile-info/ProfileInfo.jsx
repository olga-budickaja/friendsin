import React, {useContext, useEffect, useState} from 'react';
import cls from './ProfileInfo.module.scss'
import {Button, Card, CardContent, CardHeader, Divider, styled} from "@mui/material";
import UserInfo from "./UserInfo";
import axios from "axios";
import UserFriends from "./UserFriends";
import {AuthContext} from "../../context/AuthContext";
import {Add, Remove} from "@mui/icons-material";

const ProfileInfo = (props) => {
    const [friends, setFriends] = useState([]);
    const { user: currentUser, dispatch } = useContext(AuthContext);
    const [followed, setFollowed] = useState(currentUser.followings.includes(props.user?.id));

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
    }, [props.user]);


    const handleClick = async () => {
        try {
            if (followed) {
                await axios.put("/users/" + props.user._id + "/unfollow", {
                    userId: currentUser._id
                });
                dispatch({ type: "UNFOLLOW", payload: props.user._id })
            } else {
                await axios.put("/users/" + props.user._id + "/follow", {
                    userId: currentUser._id
                });
                dispatch({ type: "FOLLOW", payload: props.user._id })
            }
        } catch (e) {
            console.log(e)
        }
        setFollowed(!followed)
    }

    const BlueButton = styled(Button)(({ theme }) => ({
        color: '#ffffff',
        backgroundColor: '#188FD9',
        '&:hover': {
            backgroundColor: '#025373',
        },
        textTransform: 'none',
        fontSize: 14,
        padding: '2px 8px',
        margin: '20px 0 0 20px',
    }));

    return (
        <>
            <Card>
                {props.user.username !== currentUser.username && (
                    <BlueButton
                        onClick={handleClick}
                        variant="contained"
                    >
                        {followed ? "Unfollow" : "Follow"}
                        {!followed
                            ? <Add sx={{ width: '18px', height: '18px', marginLeft: '5px' }} />
                            : <Remove sx={{ width: '18px', height: '18px', marginLeft: '5px' }} />
                        }

                    </BlueButton>
                )}
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
        </>

    );
};

export default ProfileInfo;