import React from 'react';
import {Avatar, Button, ListItemButton, styled, Typography} from "@mui/material";
import avatar from "../../assets/img/users/user10.jpg";
import cl from "../feed/Feed.module.scss";

const UserSubscribeItem = () => {
    const BlueButton = styled(Button)(({ theme }) => ({
        color: '#ffffff',
        backgroundColor: '#188FD9',
        '&:hover': {
            backgroundColor: '#025373',
        },
        textTransform: 'none',
        fontSize: 14,
        padding: '2px 8px',
        marginLeft: 20,
    }));
    return (
        <ListItemButton>
            <Avatar
                src={avatar}
                alt="Windy Smith"
                className={cl.feed__avatar}
            />
            <Typography
                noWrap
                component="div"
            >
                Katrin Love
            </Typography>
            <BlueButton variant="contained">Confirm</BlueButton>
        </ListItemButton>
    );
};

export default UserSubscribeItem;