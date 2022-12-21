import React from 'react';
import {AppBar, Box, Toolbar} from "@mui/material";
import Logo from "../UI/logo/Logo";
import MySearch from "../UI/search/MySearch";
import TopbarIconMenu from "./topbar-icon-menu/TopbarIconMenu";
import TopbarIconMessage from "./topbar-icon-message/TopbarIconMessage";
import cl from './Topbar.module.scss';

const Topbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className={cl.topbar__color}>
                    <Logo/>
                    <MySearch/>
                    <TopbarIconMenu/>
                    <Box sx={{ flexGrow: 1 }} />
                    <TopbarIconMessage/>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Topbar;