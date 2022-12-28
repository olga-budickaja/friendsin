import React from 'react';
import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import cl from './CreatePost.module.scss';

const CreatePostItemButton = (props) => {
    return (
        <ListItemButton sx={{  minWidth: 'unset' }}>
            <label
                htmlFor={props.btn.id}
                className={cl.create__label}
            >
                <ListItemIcon>
                    {props.btn.icon}
                </ListItemIcon>
                <ListItemText
                    sx={{ marginLeft: '10px', marginTop: '-1px' }}
                    primary={props.btn.primary}
                />
                <input
                    style={{ display: 'none' }}
                    type={props.btn.type}
                    id={props.btn.id}
                    accept={props.btn.accept}
                    onChange={(e) => props.updateData(e.target.files[0])}
                />
            </label>
        </ListItemButton>
    );
};

export default CreatePostItemButton;