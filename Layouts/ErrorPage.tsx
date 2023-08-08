"use client"

import Header from "../Components/Header/Header";
import { Container, Grid, Typography, Button, ClassNameMap } from "@mui/material";
import Footer from "../Components/Footer/Footer";
import { makeStyles } from "@mui/styles";

// Styles for ErrorPage page
const styles = makeStyles(({ breakpoints }: any) => {
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
        },
        themeBtn: {
            backgroundColor: `#3F0071`,
            boxShadow: "none !important",
            fontWeight: "600 !important",
            color: "#ffffff",
            height: "46px",
            width: "15%",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            "&:hover": {
                backgroundColor: `#3F0071`,
            },
            [breakpoints.down("sm")]: {
                width: "65%",
            },
        },
    };
});

function ErrorPage() {
    const classes: ClassNameMap = styles();
    return (
        <>
            {/* Error Page */}
            <Header />
            <Container maxWidth="lg">
                <Grid
                    container
                    className={classes.root}
                >
                    <Grid
                        item
                        xs={12}
                    >
                        <Typography variant="h4" className={classes.title}>
                            Looks like you loved exploring my <span className={classes.textColored}>portfolio</span>
                        </Typography>
                        <Typography variant="h5" className={classes.title}>
                            Unfortunately this page <span className={classes.textColored}>doesn't</span> exist
                        </Typography>
                        <Button variant="contained" href="/" className={classes.themeBtn}>Go Home</Button>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </>
    );
}

export default ErrorPage;