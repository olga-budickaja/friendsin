import React from 'react';
import {Box, Typography} from "@mui/material";

const UserInfo = () => {
    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );
    return (
        <>
            <Typography variant="body2" component="div">
                {bull} city:
                <Typography
                    sx={{ color: 'grey', marginLeft: '15px' }}
                    component="span"
                >
                    New York
                </Typography>
            </Typography>
            <Typography
                sx={{ marginTop: '15px' }}
                variant="body2"
                component="div"
            >
                {bull} from:
                <Typography
                    sx={{ color: 'grey', marginLeft: '15px' }}
                    component="span"
                >
                    Madrid
                </Typography>
            </Typography>
            <Typography
                sx={{ margin: '15px 0' }}
                variant="body2"
                component="div"
            >
                {bull} relationship:
                <Typography
                    sx={{ color: 'grey', margin: '15px' }}
                    component="span"
                >
                    Single
                </Typography>
            </Typography>
        </>
    );
};

export default UserInfo;