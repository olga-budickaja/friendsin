import React from 'react';
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import {Box, Grid} from "@mui/material";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import LeftFeed from "../../components/feed/LeftFeed";
import RightFeed from "../../components/feed/RightFeed";

const HomePage = () => {
    return (
        <>
            <Topbar/>
            <Box
                sx={{ display: 'flex', marginTop: '30px' }}
            >
                <Sidebar />
                <Box sx={{ padding: '0 20px' }}>
                    <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                        <Grid
                            item
                            xs={12}
                            md={3}
                            sm={5}
                            sx={{padding: '0 8px'}}
                        >
                            <LeftFeed />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={6}
                            sm={7}
                            sx={{padding: '0 8px'}}
                        >
                            <Feed />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={3}
                            sm={12}
                            sx={{padding: '0 8px'}}
                        >
                            <RightFeed/>
                        </Grid>
                    </Grid>
                </Box>
                <Rightbar/>
            </Box>
        </>

    );
};

export default HomePage;