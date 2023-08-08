"use client"

import { makeStyles } from "@mui/styles";

// Styles for about section
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
        },
        title: {
            fontWeight: "bolder !important",
            marginTop: "10px !important",
            marginBottom: "20px !important",
            [breakpoints.down("sm")]: {
                fontSize: "1.8rem !important",
                marginTop: "10vh !important",
            },
        },
        subtitle: {
            marginBottom: "30px !important",
        },
        hiddenLinks: {
            color: `#3F0071`,
            textDecoration: "none",
            "&:hover": {
                color: `#3F0071`,
            },
        }
    };
});