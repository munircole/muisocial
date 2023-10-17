import { Box, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ForumIcon from '@mui/icons-material/Forum';
import ChatIcon from '@mui/icons-material/Chat';
import GroupIcon from '@mui/icons-material/Group';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import React from 'react'


const LeftSidebar = () => {
    return (
        <Box flex={2}  sx={{display: {xs: "none", sm: "block"}}}>
            <List>
                <ListItemButton>
                    <ListItemIcon>
                        <HomeIcon color='secondary' />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <ChatIcon color='success' />
                    </ListItemIcon>
                    <ListItemText primary="Messages" />
                </ListItemButton>


                <ListItemButton>
                    <ListItemIcon>
                        <GroupIcon color='secondary'/>
                    </ListItemIcon>
                    <ListItemText primary="Friends" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <ForumIcon color='success'/>
                    </ListItemIcon>
                    <ListItemText primary="Groups" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <ContactPageIcon color='secondary'/>
                    </ListItemIcon>
                    <ListItemText primary="Pages" />
                </ListItemButton>
            </List>

        </Box>

    )
}

export default LeftSidebar;