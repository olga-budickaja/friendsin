import React from 'react';
import cl from './AllegoristPanelNav.module.scss';
import {Box, Fab, Grid, styled} from "@mui/material";
import {
    BookmarkBorderOutlined,
    CenterFocusStrongOutlined,
    ChatOutlined, FeedOutlined,
    PeopleOutlineOutlined
} from "@mui/icons-material";
import MySearch from "../UI/search/MySearch";

const AllegoristPanelNav = () => {

    const ColorButton = styled(Fab)(({ theme }) => ({
        color: '#ffffff',
        backgroundColor: '#188FD9',
        '&:hover': {
            backgroundColor: '#025373',
        },
        textTransform: 'none',
        width: 45,
        height: 45,
        fontSize: 14,
        borderRadius: '100%'
    }));

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid
                container
                spacing={2}
                className={cl.panelNav}
            >
                <Grid item xs={12} md={9} sm={6}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                            <div className={cl.panelNav__btn}>
                                <ColorButton
                                    variant="contained"
                                    className={cl.panelNav__active}
                                >
                                    <FeedOutlined />
                                </ColorButton>

                            </div>
                            <div className={cl.panelNav__btn}>
                                <ColorButton
                                    variant="contained"
                                >
                                    <ChatOutlined />
                                </ColorButton>
                            </div>
                            <div className={cl.panelNav__btn}>
                                <ColorButton
                                    variant="contained"
                                >
                                    <PeopleOutlineOutlined />
                                </ColorButton>
                            </div>
                            <div className={cl.panelNav__btn}>
                                <ColorButton
                                    variant="contained"
                                >
                                    <BookmarkBorderOutlined />
                                </ColorButton>
                            </div>
                            <div className={cl.panelNav__btn}>
                                <ColorButton
                                    variant="contained"
                                >
                                    <CenterFocusStrongOutlined />
                                </ColorButton>
                            </div>
                        </Box>
                </Grid>
                <Grid item xs={12} md={3} sm={6}>
                    <MySearch />
                </Grid>
            </Grid>
        </Box>
    );
};

export default AllegoristPanelNav;