import React from 'react';
import {Box, IconButton} from "@mui/material";
import {PersonAddAlt, Roofing} from "@mui/icons-material";

const TopbarIconMenu = () => {
    return (
        <Box sx={{ display: { md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Roofing />
            </IconButton>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <PersonAddAlt />
            </IconButton>

        </Box>
    );
};

export default TopbarIconMenu;