import React from 'react';
import {Box, IconButton} from "@mui/material";
import {PersonAddAlt, Roofing} from "@mui/icons-material";
import {Link} from "react-router-dom";

const TopbarIconMenu = () => {
    return (
        <Box sx={{ display: { md: 'flex' } }}>
            <Link to={'/friendsin/'}>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Roofing />
                </IconButton>
            </Link>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <PersonAddAlt />
            </IconButton>

        </Box>
    );
};

export default TopbarIconMenu;