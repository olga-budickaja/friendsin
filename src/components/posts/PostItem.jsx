import React, {useContext, useEffect, useState} from 'react';
import cl from "./posts.module.scss";
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Collapse,
    styled,
    Typography
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {FavoriteOutlined} from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {format} from "timeago.js"
import {Link} from "react-router-dom";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const PostItem = (props) => {
    const [expanded, setExpanded] = React.useState(false);
    const [likes, setLikes] = useState(props.post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [dislikes, setDislikes] = useState(false);
    const colorRed = '#d32f2f';
    const colorGrey = '#455a64';
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user: currentUser } = useContext(AuthContext);
    const [color, setColor] = useState('')

    useEffect(() => {
        setIsLiked(props.post.likes.includes(currentUser._id))
    }, [currentUser._id, props.post.likes]);

    const likeHandler = async () => {
        try {
           await axios.put("/posts/" + props.post._id + "/like", {userId: currentUser._id});
        } catch (e) {
            console.log(e)
        }
        setLikes(dislikes ? likes - 1 : likes + 1);
        setIsLiked(!isLiked);
        setColor(dislikes ? colorGrey : colorRed)
        setDislikes(!dislikes);
    }

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Card className={cl.post}>
            <Link to={`/${props.user.username}`} className={cl.post__link}>
                <CardHeader
                    avatar = {
                        <Avatar src={`users/${props.user?.avatar}` ? `${PF}users/${props.user?.avatar}` : ``} alt="" />
                    }
                    action = {
                        <IconButton aria-label="settings">
                            <MoreVertIcon/>
                        </IconButton>
                    }
                    title={props.user.username}
                    subheader={format(props.post.createdAt)}
                />
            </Link>

            <Typography
                sx={{ padding: '0 20px 10px 20px', fontWeight: 500 }}
                variant="body1"
                color="text.secondary"
            >
                {props.post.tag}
            </Typography>
            <CardMedia
                component="img"
                image={!props.post?.postImg ? `${PF}/friendsin.png` : `${PF}posts/${props.post?.postImg}`}
                alt="Paella dish"
                className={cl.post__img}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {`${props.post?.body.slice(0, 69)}...`}
                </Typography>

            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    onClick={likeHandler}
                    aria-label="add to favorites"
                >
                    <FavoriteOutlined sx={{ fill: `${color}` }}/>
                </IconButton>
                <Typography
                    variant="body2"
                    color="text.secondary"
                >
                    {`${likes} people like it`}
                </Typography>
                <Typography
                    sx={{ marginLeft: 'auto', borderBottom: '1px dashed grey', cursor: 'pointer' }}
                    variant="body2"
                    color="text.secondary"
                >
                    {`${props.post.comments} comments`}
                </Typography>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        {props.post?.body}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default PostItem;