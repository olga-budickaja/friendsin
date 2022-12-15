import React from 'react';
import cl from './Logo.module.scss'
import {Typography} from "@mui/material";
import {ChatBubbleOutline, Favorite} from "@mui/icons-material";

const Logo = () => {
    return (
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
            className={`${cl.logo__relative} ${cl.logo}`}
        >
            FriendsIn
            <ChatBubbleOutline/>
            <Favorite style={{fontSize: 'x-small'}} className={cl.logo__absolute}/>
        </Typography>
    );
};

export default Logo;