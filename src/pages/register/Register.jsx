import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import cl from './Register.module.scss'
import {
    Box,
    Button,
    Card,
    CardContent, Checkbox,
    FormControlLabel, IconButton,
    styled,
    TextField,
    Typography
} from "@mui/material";
import Logo from "../../components/UI/logo/Logo";
import {useForm} from "react-hook-form";
import InputAdornment from '@mui/material/InputAdornment';
import {Visibility, VisibilityOff} from "@mui/icons-material";
import axios from "axios";


const Register = () => {
    const history = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    }
        = useForm();

    const onSubmit = async (data) => {
       if (data.password !== data.confirmPassword) {
            alert("Passwords don`t much!");
       } else {
           const user = {
               username: data.username,
               email: data.email,
               password: data.password
           }
           try {
               const res = await axios.post("/auth/register", user);
               history('/login');
           } catch (e) {
                console.log(e)
           }

       }
    }

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

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
                                    <form
                                        onSubmit={handleSubmit(onSubmit)}
                                        className={cl.login__form}
                                    >
                                        <TextField
                                            id="username"
                                            label="username"
                                            variant="outlined"
                                            fullWidth
                                            autoFocus
                                            {...register("username", {
                                                required: "Required field",
                                                minLength: {
                                                    value: 2,
                                                    message: "The username must be at least 2 characters long"
                                                },
                                                maxLength: {
                                                    value: 10,
                                                    message: "The name should not be longer than 10 characters"
                                                }
                                            })}
                                            error={!!errors?.username}
                                            helperText={errors?.username ? errors.username.message : null}
                                        />
                                        <TextField
                                            id="email"
                                            label="email"
                                            autoComplete="email"
                                            variant="outlined"
                                            fullWidth

                                            {...register("email", {
                                                required: "Required field",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Invalid email address",
                                                }
                                            })}
                                            error={!!errors?.email}
                                            helperText={errors?.email ? errors.email.message : null}
                                            sx={{ marginTop: '10px' }}
                                        />
                                        <TextField
                                            id="password"
                                            label="password"
                                            type={showPassword ? 'text' : 'password'}
                                            autoComplete="password"
                                            variant="outlined"
                                            fullWidth
                                            {...register("password", {
                                                required: "Required field",
                                                minLength: {
                                                    value: 6,
                                                    message: "password must not be less than 6 characters"
                                                }
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

                                            sx={{ marginTop: '10px' }}
                                        />
                                        <TextField
                                            id="confirmPassword"
                                            label="confirm password"
                                            type={showPassword ? 'text' : 'password'}
                                            autoComplete="confirmPassword"
                                            ref="password"
                                            variant="outlined"
                                            fullWidth
                                            {...register("confirmPassword", {
                                                required: "Required field",
                                                minLength: {
                                                    value: 6,
                                                    message: "password must not be less than 6 characters"
                                                },
                                            })}
                                            error={!!errors?.confirmPassword}
                                            helperText={errors?.confirmPassword ? errors.confirmPassword.message : null}
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
                                            sx={{ margin: '10px 0' }}
                                        />
                                        <FormControlLabel control={<Checkbox />} label="Forgot password?" />
                                        <div>
                                            <BlueButton
                                                type="submit"
                                                fullWidth
                                            >
                                                Create account
                                            </BlueButton>
                                        </div>
                                        <Link
                                            to={'/login'}
                                            href="#"
                                            color="inherit"
                                        >
                                            Log in
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

export default Register;