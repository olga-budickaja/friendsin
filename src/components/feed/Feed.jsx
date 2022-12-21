import React, {useState} from 'react';
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
import BirthdayBox from "../birthday/BirthdayBox";

import avatar1 from "../../assets/img/users/user1.jpg";
import avatar2 from "../../assets/img/users/user2.jpg";
import avatar3 from "../../assets/img/users/user3.jpg";
import avatar4 from "../../assets/img/users/user4.jpg";
import avatar5 from "../../assets/img/users/user5.jpg";
import avatar6 from "../../assets/img/users/user6.jpg";
import avatar7 from "../../assets/img/users/user7.jpg";
import avatar8 from "../../assets/img/users/user8.jpg";
import avatar9 from "../../assets/img/users/user9.jpg";
import avatar10 from "../../assets/img/users/user10.jpg";
import avatar11 from "../../assets/img/users/user11.jpg";

import bg1 from "../../assets/img/backgrounds/bg1.jpg";
import bg2 from "../../assets/img/backgrounds/bg2.jpg";
import bg3 from "../../assets/img/backgrounds/bg3.jpg";
import bg4 from "../../assets/img/backgrounds/bg4.jpg";
import bg5 from "../../assets/img/backgrounds/bg5.jpg";
import bg6 from "../../assets/img/backgrounds/bg6.jpg";
import bg7 from "../../assets/img/backgrounds/bg7.jpg";
import bg8 from "../../assets/img/backgrounds/bg8.jpg";
import bg9 from "../../assets/img/backgrounds/bg9.jpg";
import bg10 from "../../assets/img/backgrounds/bg10.jpg";
import bg11 from "../../assets/img/backgrounds/bg11.jpg";

import img1 from "../../assets/img/posts/post-1.jpg"
import img2 from "../../assets/img/posts/post-2.jpg"
import img3 from "../../assets/img/posts/post-3.jpg"
import img4 from "../../assets/img/posts/post-4.jpg"
import img5 from "../../assets/img/posts/post-5.jpg"
import img6 from "../../assets/img/posts/post-6.jpg"
import img7 from "../../assets/img/posts/post-7.jpg"
import img8 from "../../assets/img/posts/post-8.jpg"
import img9 from "../../assets/img/posts/post-9.jpg"
import img10 from "../../assets/img/posts/post-10.jpg"

const Feed = () => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            postAvatar: avatar10,
            altAvatar: 'Katrin Pink',
            userNik: 'KatrinPink',
            date: '5 min ago',
            tag: 'its my tag',
            like: 23,
            comments: 9,
            postImg: img4,
            altImg: 'Puppy',
            body: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
            bodyCollapse: 'Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.',
        },
        {
            id: 2,
            postAvatar: avatar2,
            altAvatar: 'Vanessa Muller',
            userNik: 'vanessa_kat',
            date: '1 hour ago',
            like: 5,
            comments: 1,
            postImg: img1,
            altImg: 'Puppy',
            body: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
            bodyCollapse: 'Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.',
        },
        {
            id: 3,
            postAvatar: avatar3,
            altAvatar: 'Mak Vuers',
            userNik: 'mak22',
            date: '2 day ago',
            tag: 'I add some tag',
            like: 13,
            comments: 0,
            postImg: img3,
            altImg: 'Puppy',
            body: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
            bodyCollapse: 'Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.',
        },
        {
            id: 4,
            postAvatar: avatar4,
            altAvatar: 'Luchija Mendales',
            userNik: 'lusichka',
            date: '15 min ago',
            tag: 'and I add some tag',
            like: 10,
            comments: 3,
            postImg: img5,
            altImg: 'Puppy',
            body: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
            bodyCollapse: 'Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.',
        },
    ]);
    const [users, setUsers] = useState([
        {
            id: 'mgdmgy',
            name: 'Katrin Love',
            userNik: 'kate_love',
            avatar: avatar1,
            banner: bg1,
            following: [
                'Karl Muller',
                'Bonh Jovy',
                'Vanessa Muller',
                'Luchija Mendales'
            ],
            likes: 10,
            followers: [
                'Vanessa Muller',
                'Luchija Mendales',
                'Kristian Bray'
            ],
            birthday: '29 Dec.2000',
            online: true,
            photo: [
                {id: 'asfsdgasg', src: img1},
                {id: 'gfjdj', src: img2},
                {id: 'kilugr', src: img3},
                {id: 'yu5r7iuyj', src: img4},
                {id: 'fghrdh', src: img5},
            ],
            video: []
        },
        {
            id: 'hserjrhj',
            name: 'Alex Brown',
            userNik: 'alex_pink',
            avatar: avatar2,
            banner: bg2,
            following: [
                'Karl Muller',
                'Bonh Jovy',
                'Vanessa Muller',
                'Luchija Mendales'
            ],
            likes: 10,
            followers: [
                'Vanessa Muller',
                'Luchija Mendales',
                'Kristian Bray'
            ],
            birthday: '29 Dec.2000',
            online: true,
            photo: [
                {id: 'asfsdgasg', src: img6},
                {id: 'gfjdj', src: img7},
                {id: 'kilugr', src: img8},
                {id: 'yu5r7iuyj', src: img9},
                {id: 'fghrdh', src: img10},
            ],
            video: []
        },
    ])

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
                    <BirthdayBox/>
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
                    <PostList posts={posts}/>
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