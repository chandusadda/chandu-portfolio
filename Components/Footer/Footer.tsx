"use client"

import { ClassNameMap, Container, Grid, Typography } from "@mui/material";
import styles from "./FooterStyles";

function Footer() {
  const classes: ClassNameMap = styles();

  return (
    <>
      {/* Footer Section */}
      <Container maxWidth="lg" id="footer">
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <Typography variant="body1" className={classes.attribution}>
              Developed by{" "}
              <a
                href="https://www.linkedin.com/in/chandusadda/"
                className={classes.textColored}
                target="_blank"
                rel="noreferrer"
              >
                Chandu Sadda
              </a>
              .
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Footer;
