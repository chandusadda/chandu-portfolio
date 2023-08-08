"use client";

import {
  ClassNameMap,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import styles from "./AboutStyles";
import { useEffect } from "react";

function AboutSection() {
  const classes: ClassNameMap = styles();
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("sm"));
  useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
  return (
    <>
      {/* About Section */}
      <Container maxWidth="lg" id="about-section">
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <Typography variant="h3" className={classes.title}>
              About <span className={classes.textColored}>Me</span>
            </Typography>
            <Typography variant="h6" className={classes.subtitle}>
              Hailing from Tirupati, India, I presently serve as the{" "}
              <b>Lead Engineer</b> at Exium India Pvt Ltd. In this capacity, I
              am responsible for leading a remote UI team comprised of 3
              highly skilled professionals, each operating from different
              locations within the country.
            </Typography>
            <Typography variant="h6" className={classes.subtitle}>
              I began my professional journey as a <b>Software Developer</b>, delving
              into various technical domains until I discovered my true passion
              in <b>Web Development</b>. Driven by an insatiable curiosity, I have
              recently embarked on learning <b>Golang, Docker, Kubernetes</b> &
              contributing as a f<b>full-stack developer</b> over the past few weeks. My
              present role is a source of great enthusiasm for me, as it centers
              primarily on technical expertise while occasionally requiring me
              to roll up my sleeves and demonstrate my technological prowess. I
              take pride in regularly conducting diverse <b>Proof of Concepts
              (POCs)</b> to address intricate use cases, ensuring a seamless
              transition to production.
            </Typography>
            <Typography variant="h6" className={classes.subtitle}>
              In my free time, I binge on Netflix and YouTube, listen to songs,
              play cricket, and try new cuisines at local restaurants
              (foodie at heart).
            </Typography>
          </Grid>
        </Grid>
        {!small && (
          <span className="scroll-btn">
            <a
              href="#skills-section"
              onClick={(e) => {
                let whereTo = document.getElementById("skills-section");
                e.preventDefault();
                whereTo &&
                  whereTo.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
              }}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <span className="mouse">
                <span></span>
              </span>
            </a>
          </span>
        )}
      </Container>
    </>
  );
}

export default AboutSection;
