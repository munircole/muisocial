import { Box } from '@mui/material';
import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const NewsFeed = () => {
    return (
        <Box flex={5}>
            <Card sx={{ maxWidth: 600 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "#ff5700"}} aria-label="recipe">
                            B
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Bookishmate"
                    subheader="October 1, 2023"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image="/images/b1.png"
                    alt="Bookishmate"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    Expand your knowledge through peer-to-peer Q&A Platform for University Students,
                    Expand your knowledge through peer-to-peer Q&A Platform for University Students,
                    Expand your knowledge through peer-to-peer Q&A Platform for University Students


                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>


            <Card sx={{ maxWidth: 600, mt: 5 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "#ff5700" }} aria-label="recipe">
                            B
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Bookishmate"
                    subheader="October 1, 2023"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image="../images/b1.png"
                    alt="Bookishmate"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    Expand your knowledge through peer-to-peer Q&A Platform for University Students,
                    Expand your knowledge through peer-to-peer Q&A Platform for University Students,
                    Expand your knowledge through peer-to-peer Q&A Platform for University Students


                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>


            <Card sx={{ maxWidth: 600,  mt: 5}}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "#ff5700" }} aria-label="recipe">
                            B
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Bookishmate"
                    subheader="October 1, 2023"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image="../images/b1.png"
                    alt="Bookishmate"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    Expand your knowledge through peer-to-peer Q&A Platform for University Students,
                    Expand your knowledge through peer-to-peer Q&A Platform for University Students,
                    Expand your knowledge through peer-to-peer Q&A Platform for University Students


                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>





        </Box>

    )
}

export default NewsFeed;