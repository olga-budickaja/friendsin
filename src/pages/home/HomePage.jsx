import React from 'react';
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import {Box} from "@mui/material";
import Profile from "../profile/Profile";
import Rightbar from "../../components/rightbar/Rightbar";

const HomePage = () => {
    return (
        <>
            <Topbar/>
            <Box
                sx={{ display: 'flex', marginTop: '30px' }}
            >
                <Sidebar />
                <Profile/>
                <Rightbar/>
            </Box>
        </>

    );
};

export default HomePage;