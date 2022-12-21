import React from 'react';
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
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
    console.log(props)
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Card className={cl.post}>
            <CardHeader
                avatar = {
                    <Avatar src={props.props.postAvatar} alt={props.props.altAvatar} />
                }
                action = {
                    <IconButton aria-label="settings">
                        <MoreVertIcon/>
                    </IconButton>
                }
                title={props.props.userNik}
                subheader={props.props.date}
            />
            <CardMedia
                component="img"
                image={props.props.postImg}
                alt="Paella dish"
                className={cl.post__img}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {props.props.body}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteOutlined/>
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
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
                        {props.props.bodyCollapse}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default PostItem;