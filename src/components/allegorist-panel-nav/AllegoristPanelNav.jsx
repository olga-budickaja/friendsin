import React, {useState} from 'react';
import cl from './AllegoristPanelNav.module.scss';
import {Box, Grid} from "@mui/material";
import {
    BookmarkBorderOutlined,
    CenterFocusStrongOutlined,
    ChatOutlined, FeedOutlined,
    PeopleOutlineOutlined
} from "@mui/icons-material";
import MySearch from "../UI/search/MySearch";
import AllegoristPanelNavListButton from "./AllegoristPanelNavListButton";

const AllegoristPanelNav = () => {
    const [buttons, setButtons] = useState([
        {
            id: 'dvsjv',
            icon: <FeedOutlined />,
            active: true
        },
        {
            id: 'saadf',
            icon: <ChatOutlined />,
            active: false
        },
        {
            id: 'hytujy',
            icon: <PeopleOutlineOutlined />,
            active: false
        },
        {
            id: 'jtufkf',
            icon: <BookmarkBorderOutlined />,
            active: false
        },
        {
            id: 'tykiyl',
            icon: <CenterFocusStrongOutlined />,
            active: false
        },
    ])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid
                container
                spacing={2}
                className={cl.panelNav}
            >
                <Grid item xs={12} md={9} sm={6}>
                    <AllegoristPanelNavListButton buttons={buttons}/>
                </Grid>
                <Grid item xs={12} md={3} sm={6}>
                    <MySearch />
                </Grid>
            </Grid>
        </Box>
    );
};

export default AllegoristPanelNav;