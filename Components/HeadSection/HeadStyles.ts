"use client"

import { makeStyles } from "@mui/styles";

// Styles for head section
export default makeStyles(({ breakpoints }: any) => {
    return {
        textColored: {
            color: `#3F0071`,
        },
        root: {
            height: "100%",
            minHeight: "90vh",
            padding: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            [breakpoints.down("sm")]: {
                minHeight: "75vh",
                marginTop: "5vh",
            },
        },
        welcomeTitle: {
            [breakpoints.down("sm")]: {
                fontSize: "1.5rem !important",
                marginTop: "20px !important",
            },
        },
        title: {
            fontWeight: "bolder !important",
            marginTop: "10px !important",
            marginBottom: "20px !important",
            [breakpoints.down("sm")]: {
                fontSize: "1.8rem !important",
            },
        },
        subtitle: {
            marginBottom: "30px !important",
            [breakpoints.down("sm")]: {
                height: "75px !important"
            },
        },
        heroImage: {
            height: "400px",
            width: "500px",
            borderRadius: "10px",
            boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
            [breakpoints.down("sm")]: {
                width: "280px",
                marginTop: "50px",
                height: "300px",
            },
        },
        themeBtn: {
            backgroundColor: `#3F0071`,
            boxShadow: "none !important",
            fontWeight: "600 !important",
            color: "#ffffff",
            height: "46px",
            width: "33%",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "30px !important",
            "&:hover": {
                backgroundColor: `#3F0071`,
            },
            [breakpoints.down("sm")]: {
                width: "70%",
                marginBottom: "20px !important",
            },
        },
        altBtn: {
            backgroundColor: `transparent !important`,
            boxShadow: "none !important",
            fontWeight: "600 !important",
            color: `#3F0071`,
            height: "46px",
            width: "33%",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            "&:hover": {
                backgroundColor: `whitesmoke !important`,
            },
            [breakpoints.down("sm")]: {
                width: "70%",
            },
        },
    };
});