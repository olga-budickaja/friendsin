import React from 'react';
import {Avatar, Button, ListItemButton, styled, Typography} from "@mui/material";
import cl from "../feed/Feed.module.scss";

const UserSubscribeItem = (props) => {
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
            <Avatar
                src={props.user.avatar}
                alt="Windy Smith"
                className={cl.feed__avatar}
            />
            <Typography
                noWrap
                component="div"
            >
                {props.user.username}
            </Typography>
            <BlueButton variant="contained">Confirm</BlueButton>
        </ListItemButton>
    );
};

export default UserSubscribeItem;