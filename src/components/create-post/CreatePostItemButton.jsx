import React from 'react';
import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";

const CreatePostItemButton = (props) => {
    console.log(props.primary)
    return (
        <ListItemButton>
            <ListItemIcon>
                {props.props.icon}
            </ListItemIcon>
            <ListItemText
                primary={props.props.primary}
            />
        </ListItemButton>
    );
};

export default CreatePostItemButton;