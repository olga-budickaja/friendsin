import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import PostList from "../posts/PostList";
import CreatePost from "../create-post/CreatePost";
import {AuthContext} from "../../context/AuthContext";


const Feed = ({username}) => {
    const [posts, setPosts] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = username
                ? await axios.get("/posts/profile/" + username)
                : await axios.get("/posts/timeline/" + user._id);
            setPosts(res.data.sort((p1, p2) => {
                return new Date(p2.createdAt) - new Date(p1.createdAt)
            }));
        }
        fetchPosts()
    }, [username, user._id]);
    return (
        <>
            {(username || username === user.username) && <CreatePost/>}
            {posts.map(post =>
                <PostList post={post} key={post._id}/>
            )}
        </>
    );
};

export default Feed;