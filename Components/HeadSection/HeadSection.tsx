"use client";

import {
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  Button,
  ClassNameMap,
} from "@mui/material";
import styles from "./HeadStyles";
import ChanduSadda from "@/Assets/chandu_pic.jpg";
import Typewriter from "typewriter-effect";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function HeadSection() {
  const classes: ClassNameMap = styles();
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("sm"));
  useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1]?.toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
  return (
    <>
      {/* Head Section */}
      <Container maxWidth="lg" id="head-section">
        <Grid container className={classes.root}>
          {small && (
            <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
              <Image
                src={ChanduSadda?.src}
                alt="Chandu Sadda"
                className={classes.heroImage}
                draggable="false"
                width="500"
                height="400"
                priority={false}
              />
            </Grid>
          )}
          <Grid item xs={12} md={6} style={{ minHeight: "200px" }}>
            <Typography variant="h3" className={classes.welcomeTitle}>
              Hey!
            </Typography>
            <Typography variant="h3" className={classes.title}>
              I&apos;m <span className={classes.textColored}>Chandu.</span>
            </Typography>
            <Typography variant="h6" className={classes.subtitle}>
              <Typewriter
                options={{
                  strings: [
                    "I plan, strategise, manage and execute large-scale projects.",
                    "I write code and develop pixel perfect applications.",
                    "Empathic listener & persuasive speaker, influencing, leading & delegating abilities.",
                    "I can help your product get users and a product-market fit.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Typography>
            <Link href="/contact">
              <Button
                variant="contained"
                className={classes.themeBtn}
              >
                Get In Touch
              </Button>
            </Link>
            <Button variant="outlined" target="_blank" href={`/chandu_sadda_cv.pdf`} className={classes.altBtn}>Download Resume</Button>
          </Grid>
          {!small && (
            <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
              <Image
                src={ChanduSadda?.src}
                alt="Chandu Sadda"
                className={classes.heroImage}
                draggable="false"
                width="500"
                height="400"
                priority={false}
              />
            </Grid>
          )}
        </Grid>
        {!small && (
          <span className="scroll-btn">
            <a
              href="#about-section"
              onClick={(e) => {
                let whereTo = document.getElementById("about-section");
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

export default HeadSection;
