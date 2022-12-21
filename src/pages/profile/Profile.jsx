import React from 'react';
import cl from './Profile.module.scss';
import {Box} from "@mui/material";
import ProfilePromo from "../../components/profile-promo/ProfilePromo";
import AllegoristPanelNav from "../../components/allegorist-panel-nav/AllegoristPanelNav";
import Feed from "../../components/feed/Feed";

const Profile = () => {
    return (
        <Box className={cl.profile}>
            <ProfilePromo />
            <div className={cl.profile__contentMyProfile}>
                <AllegoristPanelNav />
            </div>
            <Feed/>
        </Box>
    );
};

export default Profile;