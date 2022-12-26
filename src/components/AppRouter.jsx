import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import Login from "../pages/login/Login";
import Profile from "../pages/profile/Profile";
import Register from "../pages/register/Register";

const AppRouter = () => {
    return (
        <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/:username" element={<Profile/>}/>
        </Routes>
    );
};

export default AppRouter;