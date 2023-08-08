"use client";

import { ClassNameMap, Container, Grid, Typography } from "@mui/material";
import WorkExperienceCards from "@/Components/WorkExperienceCards/WorkExperienceCards";
import { makeStyles } from "@mui/styles";
import Content from "@/Lib/Content";

// Styles for Work Experience page
const styles = makeStyles(({ breakpoints }: any) => {
  return {
    root: {
      height: "100%",
      minHeight: "100vh",
      padding: 10,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "10vh",
      [breakpoints.down("sm")]: {
        marginTop: "1vh",
        minHeight: "90vh",
      },
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
    },
  };
});

function WorkExperience() {
  const classes: ClassNameMap = styles();
  return (
    <>
      {/* Work Experience Page */}
      <Container maxWidth="lg">
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <Typography variant="h3" className={classes.title}>
              Work <span color="primary">Experience</span>
            </Typography>
            <Grid
              container
              className={classes.root}
              spacing={3}
              alignItems="stretch"
            >
              {Content.work.map((work, index) => {
                return <WorkExperienceCards key={index} work={work} />;
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default WorkExperience;
