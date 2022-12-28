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
            <Route path="/" element={ user ? <HomePage/> : <Register/> } />
            <Route path="/login" element={ user ? <Navigate replace to={"/"} /> : <Login/> }/>
            <Route path="/register" element={ user ? <Navigate replace to={"/"} /> : <Register/> }/>
            <Route path="/:username" element={<Profile/>}/>
        </Routes>
    );
};

export default AppRouter;