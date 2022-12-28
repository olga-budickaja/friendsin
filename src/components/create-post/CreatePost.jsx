import React, {useContext, useRef, useState} from 'react';
import {
    Avatar,
    Card,
    CardContent,
    CardHeader, Fab, List, ListItemButton, ListItemIcon, ListItemText, styled,
    TextField
} from "@mui/material";
import cl from './CreatePost.module.scss';
import {AddOutlined, CollectionsOutlined} from "@mui/icons-material";
import {AuthContext} from "../../context/AuthContext";
import {red} from "@mui/material/colors";
import axios from "axios";

const CreatePost = () => {
    const {user} = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const desc = useRef();
    const [file, setFile] = useState(null);
    let inputBody;

    const submitHandler = async (e) => {
        e.preventDefault()
        const newPost = {
            userId: user._id,
            body: inputBody.value,
        }
        if (file) {
            console.log(file)
            const data = new FormData();
            const fileName = file.name;
            data.append("file", file);
            data.append("name", fileName);
            newPost.postImg = fileName;

            try {
                await axios.post("/upload", data);
            } catch (e) {
                console.log(e)
            }

        }

        try {
           await axios.post("/posts", newPost);
            window.location.reload();
        } catch (e) {
            
        }
    }

    const ColorButton = styled(Fab)(({ theme }) => ({
        color: '#ffffff',
        backgroundColor: red[600],
        '&:hover': {
            backgroundColor: red[800],
        },
        textTransform: 'none',
        width: 35,
        height: 35,
        fontSize: 14,
        borderRadius: '100%'
    }));

    // const [buttons, setButtons] = useState([
    //     {
    //         id: 'file',
    //         icon: <CollectionsOutlined sx={{ color: "orange" }} />,
    //         primary: 'Photo or Video',
    //         click: 'addPhoto',
    //         type: 'file',
    //         accept: '.png, .jpeg, .jpg',
    //     },
    //     {
    //         id: 'yjrdjr',
    //         icon: <LabelOutlined sx={{ color: "blue" }}/>,
    //         primary: 'Tag',
    //         click: 'addTag'
    //     },
    //     {
    //         id: 'hdeyr',
    //         icon: <LocationOnOutlined sx={{ color: "green" }}/>,
    //         primary: 'Location',
    //         click: 'addLocation'
    //     },
    // ]);

    return (
        <Card className={cl.create}>
            <CardHeader
                avatar = {
                    <Avatar  src={`${PF}/users/${user.avatar}`} alt=""/>
                }
                title="Share your impressions..."
            />
            <CardContent>
                <form onSubmit={submitHandler}>
                    <TextField
                        id="desc"
                        autoComplete="desc"
                        label={"Wat`s in your mind " + user.username + "?"}
                        inputRef={node => {inputBody = node}}
                        multiline
                        rows={2}
                        fullWidth
                        ref={desc}
                    />
                    <List sx={{display: 'flex', flexWrap: 'wrap'}}>
                        <ListItemButton sx={{  minWidth: 'unset' }}>
                            <label
                                htmlFor="file"
                                className={cl.create__label}
                            >
                                <ListItemIcon>
                                    <CollectionsOutlined sx={{ color: "orange" }} />
                                </ListItemIcon>
                                <ListItemText
                                    sx={{ marginLeft: '10px', marginTop: '-1px' }}
                                    primary="Photo or Video"
                                />
                                <input
                                    style={{ display: 'none' }}
                                    type="file"
                                    id="file"
                                    multiple
                                    accept=".png,.jpeg,.jpg"
                                    onChange={(e) => setFile(e.target.files[0])}
                                />
                            </label>
                        </ListItemButton>
                        <ListItemButton>
                            <ColorButton
                                type="submit"
                                style={{ marginLeft: 'auto' }}
                            >
                                <AddOutlined />
                            </ColorButton>
                        </ListItemButton>
                    </List>
                </form>
            </CardContent>
        </Card>
    );
};

export default CreatePost;