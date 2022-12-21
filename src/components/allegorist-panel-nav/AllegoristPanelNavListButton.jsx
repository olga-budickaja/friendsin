import React from 'react';
import {Box} from "@mui/material";
import AllegoristPanelNavItemButton from "./AllegoristPanelNavItemButton";

const AllegoristPanelNavListButton = (buttons) => {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {buttons.buttons.map(btn =>
                <AllegoristPanelNavItemButton props={btn} key={btn.id} />
            )}
        </Box>
    );
};

export default AllegoristPanelNavListButton;