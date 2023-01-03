import React from 'react';
import BirthdayBox from "../birthday/BirthdayBox";
import ProfileInfo from "../profile-info/ProfileInfo";

const LeftFeed = ({user}) => {
    const Homepage = () => {
        return (<BirthdayBox/>)
    }

    const ProfilePage = () => {
        return (<ProfileInfo user={user}/>)
    }
    return (
        <>
            {user ? <ProfilePage/> : <Homepage />}
        </>

    );
};

export default LeftFeed;