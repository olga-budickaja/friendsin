import React from 'react';
import {Box} from "@mui/material";
import cl from "./Rightbar.module.scss";
import RightbarUsersList from "./RightbarUsersList";

const Rightbar = () => {
    return (
        <Box
            sx={{ display: { lg: 'block', md: 'block', sm: 'none', xs: 'none'} }}
            className={cl.rightbar}
        >
            <nav
                aria-label="main mailbox folders"
                className={cl.rightbar__nav}
            >
                <RightbarUsersList />
            </nav>
        </Box>
    );
};

export default Rightbar;