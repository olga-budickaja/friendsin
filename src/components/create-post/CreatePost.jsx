import React, {useState} from 'react';
import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    TextField
} from "@mui/material";
import avatar from "../../assets/img/users/user1.jpg";
import cl from './CreatePost.module.scss';
import {CollectionsOutlined, LabelOutlined, LocationOnOutlined} from "@mui/icons-material";
import CreatePostButtonList from "./CreatePostButtonList";

const CreatePost = () => {
    const [buttons, setButtons] = useState([
        {
            id: 'jbgsgl',
            icon: <CollectionsOutlined sx={{ color: "orange" }} />,
            primary: 'Photo or Video',
            click: 'addPhoto'
        },
        {
            id: 'yjrdjr',
            icon: <LabelOutlined sx={{ color: "blue" }}/>,
            primary: 'Tag',
            click: 'addTag'
        },
        {
            id: 'hdeyr',
            icon: <LocationOnOutlined sx={{ color: "green" }}/>,
            primary: 'Location',
            click: 'addLocation'
        },
    ]);

    return (
        <Card className={cl.create}>
            <CardHeader
                avatar = {
                    <Avatar src={avatar} alt="Some Name"/>
                }
                title="Share your impressions..."
            />
            <CardContent>
                <TextField
                    id="outlined-multiline-static"
                    label="Create new post"
                    multiline
                    rows={2}
                    className={cl.create__input}
                />
                <CreatePostButtonList buttons={buttons} />
            </CardContent>
        </Card>
    );
};

export default CreatePost;