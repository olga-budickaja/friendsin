import React from 'react';
import {Avatar, Badge, Box, List, ListItem, ListItemButton, styled} from "@mui/material";
import cl from "./Rightbar.module.scss";
import user2 from "../../assets/img/users/user2.jpg";

const Rightbar = () => {
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: '#44b700',
            color: '#44b700',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: 'ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    }));
    return (
        <Box
            sx={{ display: { lg: 'block', md: 'block', sm: 'none', xs: 'none'} }}
            className={cl.rightbar}
        >
            <nav
                aria-label="main mailbox folders"
                className={cl.rightbar__nav}
            >
                <List>
                    <ListItem disablePadding className={cl.rightbar__item}>
                        <ListItemButton>
                            <StyledBadge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                variant="dot"
                            >
                                <Avatar src={user2} alt="user2"/>
                            </StyledBadge>

                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding className={cl.rightbar__item}>
                        <ListItemButton>
                            <StyledBadge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                variant="dot"
                            >
                                <Avatar src={user2} alt="user2"/>
                            </StyledBadge>

                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding className={cl.rightbar__item}>
                        <ListItemButton>
                            <StyledBadge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                variant="dot"
                            >
                                <Avatar src={user2} alt="user2"/>
                            </StyledBadge>

                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding className={cl.rightbar__item}>
                        <ListItemButton>
                            <StyledBadge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                variant="dot"
                            >
                                <Avatar src={user2} alt="user2"/>
                            </StyledBadge>

                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding className={cl.rightbar__item}>
                        <ListItemButton>
                            <StyledBadge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                variant="dot"
                            >
                                <Avatar src={user2} alt="user2"/>
                            </StyledBadge>

                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding className={cl.rightbar__item}>
                        <ListItemButton>
                            <StyledBadge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                variant="dot"
                            >
                                <Avatar src={user2} alt="user2"/>
                            </StyledBadge>

                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding className={cl.rightbar__item}>
                        <ListItemButton>
                            <StyledBadge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                variant="dot"
                            >
                                <Avatar src={user2} alt="user2"/>
                            </StyledBadge>

                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding className={cl.rightbar__item}>
                        <ListItemButton>
                            <StyledBadge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                variant="dot"
                            >
                                <Avatar src={user2} alt="user2"/>
                            </StyledBadge>

                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
        </Box>
    );
};

export default Rightbar;