import React from 'react';
import cl from './BirthdayBox.module.scss';
import {Avatar, Card, CardContent, CardHeader, CardMedia, Divider} from "@mui/material";
import img from "../../assets/img/present.png";
import banner from "../../assets/img/banners/bgBirthtday.jpg"
import UsersSubscribe from "../users-subscribe/UsersSubscribe";

const BirthdayBox = () => {
    return (
        <Card className={cl.banner}>
            <CardHeader
                avatar={
                    <Avatar src={img} alt="present"/>
                }
                title={`Some Name and 3 other friends have birthday today.`}
            />

            <CardMedia>
                <img className={cl.banner__img} src={banner} alt="Birthday today"/>
            </CardMedia>
            <CardHeader
                subheader="Friends have birthday today"
            />
            <Divider/>
            <CardContent>
                <UsersSubscribe />
            </CardContent>

        </Card>
    );
};

export default BirthdayBox;