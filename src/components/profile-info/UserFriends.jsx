import React from 'react';
import {CardMedia, Typography} from "@mui/material";

const UserFriends = ({following}) => {
    console.log(following)
    return (
        <div>
            <CardMedia
                component="img"
                // image={props.user.avatar}
                alt="green iguana"
            />
            <Typography
                sx={{ textAlign: 'center', fontSize: '10px' }}
                component="div"
            >
                {/*{props.user.username.length > 10*/}
                {/*    ? `${props.user.username.slice(0, 13)}...`*/}
                {/*    : props.user.username*/}
                {/*}*/}
            </Typography>
        </div>
    );
};

export default UserFriends;