import React, {useEffect, useState} from 'react';
import PostItem from "./PostItem";
import axios from "axios";

const PostList = ({post}) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`users/?userId=${post.userId}`);
            setUser(res.data)
        }
        fetchUser();
    }, []);
    return (
        <>
            <PostItem post={post} user={user}/>
        </>

    );
};

export default PostList;