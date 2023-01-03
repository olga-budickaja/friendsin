import React, {useContext, useState} from 'react';
import {Avatar, Button, ListItemButton, styled, Typography} from "@mui/material";
import cl from "../feed/Feed.module.scss";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import {Add, Remove} from "@mui/icons-material";
import {Link} from "react-router-dom";

const UserSubscribeItem = ({follower}) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user: currentUser, dispatch } = useContext(AuthContext);
    const [followed, setFollowed] = useState(currentUser.followings.includes(currentUser?._id));
    console.log(followed)

    const handleClick = async () => {
            try {
                if (followed) {
                    await axios.put("/users/" + follower._id + "/unfollow", {
                        userId: currentUser._id
                    });
                    dispatch({ type: "UNFOLLOW", payload: follower._id })
                } else {
                   await axios.put("/users/" + follower._id + "/follow", {
                        userId: currentUser._id
                    });
                    dispatch({ type: "FOLLOW", payload: follower._id })
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
        marginLeft: 'auto',
    }));

    return (
        <ListItemButton>
            <Link to={`/friendsin/profile/${follower.username}`}>
                <Avatar
                    src={ follower?.avatar
                        ? `${PF}users/${follower?.avatar}`
                        : `${PF}no-avatar.png`
                    }
                    alt={follower?.username}
                    className={cl.feed__avatar}
                />
            </Link>
            <Link to={`/friendsin/profile/${follower.username}`}>
                <Typography
                    noWrap
                    component="div"
                >
                    {follower?.username}
                </Typography>
            </Link>
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
        </ListItemButton>


    );
};

export default UserSubscribeItem;