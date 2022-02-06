import * as React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { challenges } from "../src/challenges";
import Router from "next/router";
import Layout from "../components/common/Layout";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

const DemoButton = styled(Button)(({ theme }) => ({
  color: "#FFFFFF",
  backgroundColor: "#00AD7C",
  "&:hover": {
    backgroundColor: "#00AD7C",
  },
}));

const LandingPage = () => {
  return (
    <div>
      <Layout>
        <Grid container spacing={4}>
          {challenges.map((challenge_detail) => {
            return (
              <Grid item xs={12} sm={4} key={challenge_detail.name}>
                <Card style={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={challenge_detail.image}
                    alt={challenge_detail.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {challenge_detail.name}
                    </Typography>
                    <Typography variant="body2">
                      {`${challenge_detail.description.slice(0, 80)}...`}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <DemoButton
                      variant="contained"
                      startIcon={<LanguageIcon />}
                      size="small"
                      onClick={() => Router.push(challenge_detail.route)}
                    >
                      Demo
                    </DemoButton>
                    <Button
                      variant="contained"
                      startIcon={<GitHubIcon />}
                      size="small"
                    >
                      <a
                        href="https://github.com/Parth-1602/Frontend-Mentor-Challenges"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Github Code
                      </a>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Layout>
    </div>
  );
};

export default LandingPage;
