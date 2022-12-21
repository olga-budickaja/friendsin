import React from 'react';

import PostItem from "./PostItem";

const PostList = (posts) => {
    return (
        <>
            {posts.posts.map(post =>
                <PostItem props={post} key={post.id} />
            )}
        </>

    );
};

export default PostList;