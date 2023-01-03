import React from 'react';
import {Card, CardContent, CardHeader, Divider} from "@mui/material";
import UsersSubscribe from "../users-subscribe/UsersSubscribe";

const RightFeed = ( ) => {

    return (
        <Card>
            <CardHeader
                subheader="Followed friends"
            />
            <Divider/>
            <CardContent>
                <UsersSubscribe />
            </CardContent>
        </Card>
    );
};

export default RightFeed;