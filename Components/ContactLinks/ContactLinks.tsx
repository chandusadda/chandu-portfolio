"use client"

import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Phone from "@mui/icons-material/Phone";
import styles from "./ContactLinksStyles";
import { Button, ClassNameMap, Typography } from "@mui/material";

const ContactLinks = () => {
  const classes: ClassNameMap = styles();
  return (
    <>
      <Typography variant="h5" className={classes.title}>
        Primary
      </Typography>
      <a href="mailto:chandusadda1992@gmail.com">
        <EmailIcon fontSize="large" className={classes.email} />
      </a>
      <a href="tel:+919989339665">
        <Phone fontSize="large" className={classes.phone} />
      </a>
      <Typography variant="h5" className={classes.title} mt={2}>
        Social
      </Typography>
      <a href="https://github.com/chandusadda" target="_blank">
        <GitHubIcon fontSize="large" className={classes.github} />
      </a>
      <a href="https://www.linkedin.com/in/chandusadda/" target="_blank">
        <LinkedInIcon fontSize="large" className={classes.linkedin} />
      </a>
      <a href="https://twitter.com/chandu_sadda" target="_blank">
        <TwitterIcon fontSize="large" className={classes.twitter} />
      </a>
      <Typography variant="h5" className={classes.title} mt={2} mb={2}>
        Resume
      </Typography>
      <Button
        variant="contained"
        target="_blank"
        href={`https://drive.google.com/file/d/1AT4tLPCfpdkYPwJaqwlNRCc0jX2BAYxz/view?usp=sharing`}
        className={classes.themeBtn}
      >
        Download Resume
      </Button>
    </>
  );
};

export default ContactLinks;
