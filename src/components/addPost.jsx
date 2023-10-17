import { Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from "@mui/material";
import React from "react";
import { Add, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from "@mui/icons-material";
import styled from "@emotion/styled";

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})
const UserBox = styled(Modal)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "5px",
    marginBottom: "10px",
})
const AddPost = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Tooltip
                onClick={handleOpen}
                title="add"
                sx={{
                    position: "fixed",
                    bottom: 20,
                    left: { xs: "calc(45%)", md: 20 },
                }}
            >
                <Fab color="secondary" aria-label="add">
                    <Add />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box width={500} height={250} bgcolor={"white"} borderRadius={10} p={5}>
                    <Typography variant="h6" color={"gray"} textAlign={"center"}>Create Post</Typography>
                    <UserBox>
                        <Typography>Bookishmate</Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={4}
                        placeholder="What's on your mind"
                        variant="standard"
                    />
                    <Stack direction={"row"} gap={1} mt={2}>
                        <EmojiEmotions color="secondary" />
                        <VideoCameraBack color="success" />
                        <Image />
                        <PersonAdd />
                    </Stack>
                    <ButtonGroup variant="contained" aria-label="outlined button group" >
                        <Button bgcolor="green">
                            Post
                        </Button>

                    </ButtonGroup>

                </Box>
            </StyledModal>

        </>
    )
}

export default AddPost;