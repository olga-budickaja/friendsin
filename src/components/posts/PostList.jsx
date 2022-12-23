import React from 'react';
import PostItem from "./PostItem";
import {Posts} from "../../usersData";

const PostList = () => {
    return (
        <>
            {Posts.map(post =>
                <PostItem props={post} key={post.id} />
            )}
        </>

    );
};

export default PostList;