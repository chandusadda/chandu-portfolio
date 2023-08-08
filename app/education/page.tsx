"use client";

import {
  Container,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  ClassNameMap,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Content from "@/Lib/Content";
import ChanduSadda from "@/Assets/chandu_selfe.jpg";
import Image from "next/image";

// Styles for Education page
const styles = makeStyles(({ breakpoints }: any) => {
  return {
    textColored: {
      color: `#3F0071`,
    },
    root: {
      height: "100%",
      minHeight: "100vh",
      padding: 10,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "7vh",
      [breakpoints.down("sm")]: {
        marginTop: "10vh",
      },
    },
    title: {
      fontWeight: "bolder !important",
      [breakpoints.down("sm")]: {
        fontSize: "1.8rem !important",
      },
    },
    hiddenLinks: {
      color: `#3F0071`,
      "&:hover": {
        color: `#3F0071`,
      },
    },
    photo: {
      width: "250px",
      height: "300PX",
      borderRadius: "10px",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      [breakpoints.up("md")]: {
        marginLeft: "30px",
      },
      [breakpoints.down("sm")]: {
        width: "250px",
        height: "300px",
        marginLeft: "1rem",
        marginTop: "1rem",
      },
    },
    timeline: {
      [breakpoints.up("md")]: {
        marginRight: "30px",
      },
    },
  };
});

function Education() {
  const classes: ClassNameMap = styles();
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      {/* Education Page */}
      <Container maxWidth="lg">
        <Grid container className={classes.root}>
          {/* Heading */}
          <Grid item xs={12}>
            <Typography variant="h3" className={classes.title}>
              Education
            </Typography>
          </Grid>
          {/* Grid */}
          <Grid item xs={12} sm={2} className={classes.hideSmall}>
            <Image
              src={ChanduSadda?.src}
              alt="Chandu Sadda"
              className={classes.photo}
              draggable="false"
              width={250}
              height={300}
            />
          </Grid>
          <Grid item xs={12} sm={10}>
            {/* Timeline */}
            <Timeline
              position={small ? "left" : "right"}
              className={classes.timeline}
            >
              <TimelineItem>
                <TimelineOppositeContent color="text.primary">
                  <Typography variant="h6" component="span">
                    {Content.education.ug.type}
                  </Typography>
                  <Typography>{Content.education.ug.duration}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" component="span">
                    {Content.education.ug.name}
                  </Typography>
                  <Typography>{Content.education.ug.course}</Typography>
                </TimelineContent>
              </TimelineItem>
              {Content?.education?.highSchool?.name && (
                <TimelineItem>
                  <TimelineOppositeContent color="text.primary">
                    <Typography variant="h6" component="span">
                      {Content.education.highSchool.type}
                    </Typography>
                    <Typography>
                      {Content.education.highSchool.duration}
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="secondary" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography variant="h6" component="span">
                      {Content.education.highSchool.name}
                    </Typography>
                    <Typography>
                      {Content.education.highSchool.course}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              )}
              {Content?.education?.highSchool?.name && (
                <TimelineItem>
                  <TimelineOppositeContent color="text.primary">
                    <Typography variant="h6" component="span">
                      {Content.education.juniorSchool.type}
                    </Typography>
                    <Typography>
                      {Content.education.juniorSchool.duration}
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="primary" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography variant="h6" component="span">
                      {Content.education.juniorSchool.name}
                    </Typography>
                    <Typography>
                      {Content.education.juniorSchool.course}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              )}
            </Timeline>
          </Grid>
          <Grid item xs={12}>
            {/* Text */}
            <Typography variant="h5" className={classes.title}>
              Do I depend solely on books? 📚
            </Typography>
            <Typography variant="body1" mt={1}>
              My learning is not limited to the academic institutions I&apos;ve been
              to. I believe in practical learning and take up tasks in new
              domains. I learn how to complete a task and hence learn my way up
              to mastering that domain.
            </Typography>
            <Typography variant="body1" mt={1}>
              I prefer grasping an unfamiliar concept through blog posts or
              examples which is why whenever I want to learn something
              technical, I explore Medium Blogs, Stack Overflow or GitHub
              repositories for better understanding.
            </Typography>
            {/* <Typography variant="body1" mt={1}>
              I've been certified by Microsoft, Google, Coursera and Udemy for
              my skills in various domains:
            </Typography> */}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Education;
