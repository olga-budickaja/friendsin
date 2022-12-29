import React from 'react';
import {CardMedia, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const UserFriends = ({friend}) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div>
            <Link to={`/${friend.username}`}>
                <CardMedia
                    component="img"
                    image={`${PF}users/${friend?.avatar}`}
                    alt=""
                />
            </Link>
            <Typography
                sx={{ textAlign: 'center', fontSize: '12px', fontWeight: 600 }}
                component="div"
            >
                {friend.username.length > 10
                    ? `${friend.username.slice(0, 13)}...`
                    : friend.username
                }
            </Typography>
        </div>
    );
};

export default UserFriends;