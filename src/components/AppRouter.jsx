import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import Login from "../pages/login/Login";
import Profile from "../pages/profile/Profile";
import Register from "../pages/register/Register";
import {AuthContext} from "../context/AuthContext";

const AppRouter = () => {

    const {user} = useContext(AuthContext)
    return (
        <Routes>
            <Route path="friendsin/" element={ user ? <HomePage /> : <Register/> } />
            <Route path="friendsin/login" element={ user ? <Navigate replace to={"/"} /> : <Login/> }/>
            <Route path="friendsin/register" element={ user ? <Navigate replace to={"/"} /> : <Register/> }/>
            <Route path="friendsin/profile/:username" element={<Profile />}/>
        </Routes>
    );
};

export default AppRouter;