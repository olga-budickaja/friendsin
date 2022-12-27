import React, {useContext} from 'react';
import {useForm} from 'react-hook-form';
import {loginCall} from "../../apiCalls";
import {Link} from "react-router-dom";
import cl from './Login.module.scss'
import {
    Box,
    Button,
    Card,
    CardContent, Checkbox, CircularProgress,
    FormControlLabel, IconButton,
    styled,
    TextField,
    Typography
} from "@mui/material";
import Logo from "../../components/UI/logo/Logo";
import {AuthContext} from "../../context/AuthContext";
import InputAdornment from "@mui/material/InputAdornment";
import {Visibility, VisibilityOff} from "@mui/icons-material";

const Login = () => {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const {
        register,
        handleSubmit,
        formState: { errors }
    }
    = useForm();
    const { user, isFetching, error, dispatch } = useContext(AuthContext);


    const onSubmit = (data) => {

        loginCall(
            {
                email: data.email,
                password: data.password
            },
            dispatch);
    }

    console.log(user)

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
        '&:disabled': {
            cursor: 'not-allowed'
        },
        disabled: {isFetching}
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
                                    <form
                                        onSubmit={handleSubmit(onSubmit)}
                                        className={cl.login__form}
                                    >
                                        <TextField
                                            id="email"
                                            label="email"
                                            autoComplete="email"
                                            variant="outlined"
                                            fullWidth
                                            autoFocus
                                            {...register("email", {
                                                required: "Required field",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Invalid email address",
                                                }
                                            })}
                                            error={!!errors?.email}
                                            helperText={errors?.email ? errors.email.message : null}
                                        />
                                        <Box mb={2} mt={2}>
                                            <TextField
                                                id="password"
                                                label="password"
                                                type={showPassword ? 'text' : 'password'}
                                                autoComplete="password"
                                                variant="outlined"
                                                fullWidth
                                                {...register("password", {
                                                    required: "Required field"
                                                })}
                                                error={!!errors?.password}
                                                helperText={errors?.password ? errors.password.message : null}
                                                InputProps={{
                                                    endAdornment:
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={handleClickShowPassword}
                                                                onMouseDown={handleMouseDownPassword}
                                                                edge="end"
                                                            >
                                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                }}
                                            />
                                        </Box>
                                        <Box mb={2}>
                                            <FormControlLabel control={<Checkbox />} label="Forgot password?" />
                                        </Box>
                                        <Box mb={2}>
                                            <BlueButton
                                                type="submit"
                                                fullWidth
                                            >
                                                {isFetching
                                                    ? <CircularProgress color="inherit" size="25px"/>
                                                    : "Log in"
                                                }
                                            </BlueButton>
                                        </Box>
                                        <Link
                                            to={'/register'}
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