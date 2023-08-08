"use client"

import { makeStyles } from "@mui/styles";

// Styles for work experience cards section
export default makeStyles(({ }: any) => {
    return {
        websiteBtn: {
            marginRight: "10px !important",
            textAlign: "center",
        },
        card: {
            display: 'flex', justifyContent: 'space-between', flexDirection: 'column', width: '100%', 
        },
        grid: {
            display: 'flex',
        },
        feedback: {
            textAlign: "center",
        },
        cardAchieve: {
            marginBottom: "0.75rem !important",
            marginTop: "0.75rem !important",
            color: "#3F0071"
        }
    };
});