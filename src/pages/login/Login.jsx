import React from 'react';
import cl from './Login.module.scss'
import {
    Box,
    Button,
    Card,
    CardContent, Checkbox,
    FormControlLabel,
    Link,
    styled,
    TextField,
    Typography
} from "@mui/material";
import Logo from "../../components/UI/logo/Logo";

const Login = () => {
    const BlueButton = styled(Button)(({ theme }) => ({
        color: '#ffffff',
        backgroundColor: '#188FD9',
        '&:hover': {
            backgroundColor: '#025373',
        },
        textTransform: 'none',
        fontSize: 14,
        padding: '2px 8px',
        margin: '0 auto',
    }));
    return (
        <Box sx={{ flexGrow: 1 }}>
            <div className={cl.login__container}>
                <div className={cl.login__center}>
                    <div className={cl.login__wrapper}>
                        <div>
                            <Card sx={{ background: 'transparent' }}>
                                <CardContent>
                                    <div className={cl.login__logo}>
                                        <Logo/>
                                    </div>
                                    <Typography
                                        variant="subtitle1"
                                        gutterBottom
                                        sx={{ color: '#263238', marginTop: '10px', lineHeight: '1.3rem'}}
                                    >
                                        Hi! Join the <span>FriendsIn</span> family - a social network to communicate with friends
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                        <div>
                            <Card>
                                <CardContent>
                                    <form className={cl.login__form}>
                                        <TextField
                                            id="outlined-basic"
                                            label="email"
                                            variant="outlined"
                                            fullWidth="100%"
                                        />
                                        <TextField
                                            id="outlined-basic"
                                            label="password"
                                            variant="outlined"
                                            fullWidth="100%"
                                            sx={{ margin: '20px 0' }}
                                        />
                                        <FormControlLabel control={<Checkbox />} label="Forgot password?" />
                                        <div>
                                            <BlueButton sx={{ width: '100%', marginBottom: '20px' }}
                                            >
                                                Success
                                            </BlueButton>
                                        </div>
                                        <Link
                                            href="#"
                                            color="inherit"
                                        >
                                            Add new account
                                        </Link>
                                    </form>
                                </CardContent>

                            </Card>

                        </div>
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default Login;