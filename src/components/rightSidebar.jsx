import { Avatar, Box, Typography } from '@mui/material';
import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

const RightSidebar = () => {
    return (
        <Box marginRight={5} flex={2} sx={{display: {xs: "none", sm: "block"}}}>
            <Box>
                <Typography>Recent Conversations</Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/images/munir.jpeg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Task Updates"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Luq
                                    </Typography>
                                    {" — The task has been completed...."}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="munir" src="/images/munir.jpeg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="BM team"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to Abu
                                    </Typography>
                                    {" — Wish I could come, but I'm out of town this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Abel Nino" src="/images/munir.jpeg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="BM Community"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Abel Nino
                                    </Typography>
                                    {' — What is bookishmate used for?…'}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>

            </Box>

        </Box>

    )
}

export default RightSidebar;