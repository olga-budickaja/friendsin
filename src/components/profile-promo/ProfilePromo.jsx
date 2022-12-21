import React from 'react';
import cl from './ProfilePromo.module.scss'
import {Avatar, Box, CardMedia} from "@mui/material";
import background from "../../assets/img/backgrounds/bg1.jpg";
import avatar from "../../assets/img/users/user1.jpg";

const ProfilePromo = () => {
    return (
        <div className={cl.promo}>
            <div className={cl.relative}>
                <CardMedia
                    component="img"
                    height="275"
                    image={background}
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
                            src={avatar}
                            alt="avatar"
                        />
                    </Avatar>
                    <Box
                        className={cl.promo__cardDescription}
                    >
                        <div className={cl.promo__cardTitle}>Katrin Love</div>
                        <Box
                            sx={{ display: { md: 'flex', xs: 'none' } }}
                            className={cl.promo__cardCounter}
                        >
                            <div className={cl.promo__cardCounterBlock}>
                                <div className={cl.promo__cardSubtitle}>323</div>
                                <div>Following</div>
                            </div>
                            <div className={cl.promo__cardCounterBlock}>
                                <div className={cl.promo__cardSubtitle}>5467</div>
                                <div>Likes</div>
                            </div>
                            <div className={cl.promo__cardCounterBlock}>
                                <div className={cl.promo__cardSubtitle}>7894</div>
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