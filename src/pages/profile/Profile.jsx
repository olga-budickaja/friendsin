import React, {useEffect, useState} from 'react';
import cl from './Profile.module.scss';
import {Box, Grid} from "@mui/material";
import ProfilePromo from "../../components/profile-promo/ProfilePromo";
import AllegoristPanelNav from "../../components/allegorist-panel-nav/AllegoristPanelNav";
import Feed from "../../components/feed/Feed";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import LeftFeed from "../../components/feed/LeftFeed";
import RightFeed from "../../components/feed/RightFeed";
import axios from "axios";
import {useParams} from "react-router-dom";

const Profile = () => {
    const [user, setUser] = useState({});

    const username = useParams().username;

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`users/?username=${username}`);
            setUser(res.data)
        }
        fetchUser();
    }, [username]);
    return (
        <>
            <Topbar/>
            <Box
                sx={{ display: 'flex', marginTop: '30px' }}
            >
                <Sidebar />
                <Box className={cl.profile}>
                    <ProfilePromo user={user} />
                    <div className={cl.profile__contentMyProfile}>
                        <AllegoristPanelNav />
                    </div>
                    <div className={cl.profile__feed}>
                        <Box
                            sx={{ width: '100%', flexWrap: 'wrap', }}
                        >
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
                                    <LeftFeed user={user} />
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    md={6}
                                    sm={7}
                                    sx={{padding: '0 8px'}}
                                >
                                    <Feed username={username} />
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

                    </div>
                </Box>
                <Rightbar/>
            </Box>

        </>

    );
};

export default Profile;