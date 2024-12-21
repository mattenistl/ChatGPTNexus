import React from "react";
import { AppBar, Toolbar, Typography, Button, Container, Grid } from "@mui/material";

const Home = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            FounderSmarter
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: "20px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h3" align="center">
              Empowering Founders to Build AI Startups
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ marginTop: "10px" }}
            >
              Personalized assessments, AI tools, and a supportive community
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h5">Founder Readiness Assessment</Typography>
            <Typography>
              Evaluate your entrepreneurial readiness with AI-powered insights.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h5">AI-Driven Idea Validation</Typography>
            <Typography>
              Validate your startup idea with cutting-edge AI tools.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h5">Supportive Community</Typography>
            <Typography>
              Connect with like-minded founders and mentors.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <footer
        style={{
          marginTop: "40px",
          textAlign: "center",
          padding: "20px",
          background: "#f5f5f5",
        }}
      >
        <Typography variant="subtitle2">
          &copy; 2024 FounderSmarter. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
};

export default Home;
