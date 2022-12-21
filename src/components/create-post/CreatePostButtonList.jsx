import React from 'react';
import {Fab, List, ListItemButton, styled} from "@mui/material";
import CreatePostItemButton from "./CreatePostItemButton";
import {AddOutlined} from "@mui/icons-material";
import {red} from "@mui/material/colors";

const CreatePostButtonList = (buttons) => {
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

    const addNewPost = () => {

    }

    return (
        <List sx={{display: 'flex', flexWrap: 'wrap'}}>
            {buttons.buttons.map(btn =>
                <CreatePostItemButton props={btn} key={btn.id}/>
            )}

            <ListItemButton>
                <ColorButton
                    style={{ marginLeft: 'auto' }}
                    onClick={addNewPost}
                >
                    <AddOutlined />
                </ColorButton>
            </ListItemButton>
        </List>
    );
};

export default CreatePostButtonList;