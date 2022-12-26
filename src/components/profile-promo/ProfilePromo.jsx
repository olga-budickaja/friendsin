import React from 'react';
import cl from './ProfilePromo.module.scss'
import {Avatar, Box, CardMedia} from "@mui/material";

const ProfilePromo = ({user}) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <div className={cl.promo}>
            <div className={cl.relative}>
                <CardMedia
                    component="img"
                    height="275"
                    image={!user?.bg ? `${PF}friendsin-bg.png` : `${PF}backgrounds/${user?.bg}`}
                    alt="Paella dish"
                />
                <div className={cl.promo__wrapper}>
                    <Avatar
                        sx={{ width: 150, height: 150 }}
                        style={{background: 'white'}}
                        variant="outlined"
                        className={cl.promo__card}
                    >
                        <Avatar
                            className={cl.promo__cardAvatar}
                            sx={{ width: 145, height: 145 }}
                            src={`${PF}users/${user?.avatar}`}
                            alt=""
                        />
                    </Avatar>
                    <Box
                        className={cl.promo__cardDescription}
                    >
                        <div className={cl.promo__cardTitle}>{user.username}</div>
                        <Box
                            sx={{ display: { md: 'flex', xs: 'none' } }}
                            className={cl.promo__cardCounter}
                        >
                            <div className={cl.promo__cardCounterBlock}>
                                <div className={cl.promo__cardSubtitle}>5</div>
                                <div>Following</div>
                            </div>
                            <div className={cl.promo__cardCounterBlock}>
                                <div className={cl.promo__cardSubtitle}>10</div>
                                <div>Likes</div>
                            </div>
                            <div className={cl.promo__cardCounterBlock}>
                                <div className={cl.promo__cardSubtitle}>10</div>
                                <div>Followers</div>
                            </div>
                        </Box>
                    </Box>
                </div>

            </div>

        </div>
    );
};

export default ProfilePromo;