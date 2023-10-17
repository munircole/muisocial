import { createTheme } from "@mui/material";


export const theme = createTheme({
    palette:{
        primary:{
            main: "#ffffff",  //an light colour
            grey: "#f0f0ff"
        },

        secondary:{
            main: "#ff5700"  // an orange color
        },

        buttoncolor:{
            main: "#1db954",
            gradient: "linear-gradient(#1db954, #ff5700)",


        }
    }
})