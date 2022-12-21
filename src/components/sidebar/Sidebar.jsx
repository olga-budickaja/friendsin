import React from 'react';
import cl from './Sidebar.module.scss'
import {Box, IconButton, List, ListItem, ListItemButton} from "@mui/material";
import {
    FeedOutlined,
    LibraryMusicOutlined,
    PeopleAltOutlined,
    StarOutlineOutlined, WbSunnyOutlined
} from "@mui/icons-material";

const Sidebar = () => {
    return (
        <Box
            sx={{ display: { lg: 'block', md: 'block', sm: 'none', xs: 'none'} }}
            className={cl.sidebar}
        >
            <nav
                aria-label="main mailbox folders"
                className={cl.sidebar__nav}
            >
                <List>
                    <ListItem disablePadding className={cl.sidebar__item}>
                        <ListItemButton>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-haspopup="true"
                            >
                                <FeedOutlined
                                    style={{fill: '#ffffff'}}
                                />
                            </IconButton>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding className={cl.sidebar__item}>
                        <ListItemButton>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-haspopup="true"
                            >
                                <StarOutlineOutlined
                                    style={{fill: '#ffffff'}}
                                />
                            </IconButton>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding className={cl.sidebar__item}>
                        <ListItemButton>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-haspopup="true"
                            >
                                <PeopleAltOutlined
                                    style={{fill: '#ffffff'}}
                                />
                            </IconButton>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding className={cl.sidebar__item}>
                        <ListItemButton>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-haspopup="true"
                            >
                                <LibraryMusicOutlined
                                    style={{fill: '#ffffff'}}
                                />
                            </IconButton>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding className={cl.sidebar__item}>
                        <ListItemButton>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-haspopup="true"
                            >
                                <WbSunnyOutlined
                                    style={{fill: '#ffffff'}}
                                />
                            </IconButton>
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
        </Box>
    );
};

export default Sidebar;