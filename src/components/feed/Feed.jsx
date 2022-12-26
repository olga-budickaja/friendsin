import React, {useEffect, useState} from 'react';
import axios from "axios";
import PostList from "../posts/PostList";
import CreatePost from "../create-post/CreatePost";


const Feed = ({username}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = username
                ? await axios.get("posts/profile/" + username)
                : await axios.get("posts/timeline/63a4f7dc460cb0513701d109");
            setPosts(res.data);
        }
        fetchPosts()
    }, [username]);
    return (
        <>
            <CreatePost />
            {posts.map(post =>
                <PostList post={post} key={post._id} />
            )}
        </>
    );
};

export default Feed;