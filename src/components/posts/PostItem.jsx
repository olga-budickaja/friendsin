import React, {useState} from 'react';
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
import {Users} from "../../usersData";

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

    const [like, setLike] = useState(props.props.likes);
    const [dislike, setDislike] = useState(false);
    const colorRed = '#d32f2f';
    const colorGrey = '#455a64'

    const [color, setColor] = useState('')

    const likeHandler = () => {
        setLike(dislike ? like - 1 : like + 1);
        setColor(dislike ? colorGrey : colorRed)
        setDislike(!dislike);
    }

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Card className={cl.post}>
            <CardHeader
                avatar = {
                    <Avatar src={Users.filter(u => u.id === props.props.userId)[0].avatar} alt={props.props.altAvatar} />
                }
                action = {
                    <IconButton aria-label="settings">
                        <MoreVertIcon/>
                    </IconButton>
                }
                title={Users.filter(u => u.id === props.props.userId)[0].username}
                subheader={props.props.date}
            />
            <Typography
                sx={{ padding: '0 20px 10px 20px', fontWeight: 500 }}
                variant="body1"
                color="text.secondary"
            >
                {props.props.tag}
            </Typography>
            <CardMedia
                component="img"
                image={props.props.postImg}
                alt="Paella dish"
                className={cl.post__img}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {`${props.props?.body.slice(0, 69)}...`}
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
                    {`${like} people like it`}
                </Typography>
                <Typography
                    sx={{ marginLeft: 'auto', borderBottom: '1px dashed grey', cursor: 'pointer' }}
                    variant="body2"
                    color="text.secondary"
                >
                    {`${props.props.comments} comments`}
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
                        {props.props?.body}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default PostItem;