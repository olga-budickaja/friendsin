import React from 'react';
import cl from './Feed.module.scss'
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
} from "@mui/material";
import UsersSubscribe from "../users-subscribe/UsersSubscribe";
import PostList from "../posts/PostList";
import CreatePost from "../create-post/CreatePost";
// import BirthdayBox from "../birthday/BirthdayBox";
import ProfileInfo from "../profile-info/ProfileInfo";

const Feed = () => {
    return (
        <Box
            sx={{ width: '100%', flexWrap: 'wrap', }}
            className={cl.feed}
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
                    <ProfileInfo/>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sm={7}
                    className={cl.feed__posts}
                    sx={{padding: '0 8px'}}
                >
                    <CreatePost />
                    <PostList />
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={3}
                    sm={12}
                    sx={{padding: '0 8px'}}
                >
                    <Card className={cl.feed__users}>
                        <CardHeader
                            subheader="Followed friends"
                        />
                        <Divider/>
                        <CardContent>
                            <UsersSubscribe/>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Feed;