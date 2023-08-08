"use client"

import React from "react";
import styles from "./WorkExperienceCardsStyles";
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Grid,
  ClassNameMap,
} from "@mui/material";
import htmlJsonParser from "html-react-parser";
import { WorkExpInterface } from "@/common/common";

// Work Experience Card
const WorkExperienceCards = (props: WorkExpInterface) => {
  const classes: ClassNameMap = styles();
  return (
    <>
      <Grid item className={classes.grid} xs={12} md={6}>
        <Card className={classes.card}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="main-color"
            >
              {props.work.company}
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              component="div"
              color="secondary"
            >
              {props.work.role}
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              component="div"
              color="text.secondary"
            >
              {props.work.duration}
            </Typography>
            {props.work.description.map((line, index) => {
              const embed = htmlJsonParser(line);
              return (
                <Typography
                  variant="body1"
                  color="text.primary"
                  className="text-xl"
                  key={index}
                >
                  {embed}
                </Typography>
              );
            })}
            {props.work.achievements && props.work.achievements.length > 0 && (
              <>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className={classes.cardAchieve}
                >
                  {`Achievements`}
                </Typography>
                {props.work.achievements.map((line, index) => {
                  const embed = htmlJsonParser(line);
                  return (
                    <Typography
                      variant="body1"
                      color="text.primary"
                      className="text-xl"
                      key={index}
                    >
                      {embed}
                    </Typography>
                  );
                })}
              </>
            )}
          </CardContent>
          {props.work.link && (
            <CardActions>
              <Button
                size="small"
                color="secondary"
                variant="outlined"
                href={props.work.link}
                target="_blank"
                rel="noreferrer"
                className={classes.websiteBtn}
                download
              >
                View Website
              </Button>
            </CardActions>
          )}
        </Card>
      </Grid>
    </>
  );
};

export default WorkExperienceCards;
