import React from 'react';
import cl from "./AllegoristPanelNav.module.scss";
import {Fab, styled} from "@mui/material";

const AllegoristPanelNavItemButton = (props) => {
    const ColorButton = styled(Fab)(({ theme }) => ({
        color: '#ffffff',
        backgroundColor: '#188FD9',
        '&:hover': {
            backgroundColor: '#025373',
        },
        textTransform: 'none',
        width: 45,
        height: 45,
        fontSize: 14,
        borderRadius: '100%'
    }));

    return (
        <div className={cl.panelNav__btn}>
            <ColorButton
                variant="contained"
            >
                {props.props.icon}
            </ColorButton>
        </div>
    );
};

export default AllegoristPanelNavItemButton;