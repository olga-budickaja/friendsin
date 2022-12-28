import React from 'react';
import {Fab, List, ListItemButton, styled} from "@mui/material";
import CreatePostItemButton from "./CreatePostItemButton";
import {AddOutlined} from "@mui/icons-material";
import {red} from "@mui/material/colors";

const CreatePostButtonList = ({buttons, updateData}) => {
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

    return (
        <List sx={{display: 'flex', flexWrap: 'wrap'}}>
            {buttons.map(btn =>
                <CreatePostItemButton btn={btn} key={btn.id} updateData={updateData}/>
            )}

            <ListItemButton>
                <ColorButton
                    type="submit"
                    style={{ marginLeft: 'auto' }}
                >
                    <AddOutlined />
                </ColorButton>
            </ListItemButton>
        </List>
    );
};

export default CreatePostButtonList;