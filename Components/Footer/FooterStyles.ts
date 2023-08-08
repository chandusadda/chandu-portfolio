"use client"

import { makeStyles } from "@mui/styles";

// Styles for about section
export default makeStyles(({ }: any): any => {
    return {
        textColored: {
            color: `#3F0071`,
        },
        root: {
            padding: 10,
            alignItems: "center",
            justifyContent: "center",
        },
        attribution: {
            textAlign: "center",
            fontWeight: "500 !important",
            paddingBottom: "20px",
        },
    };
});