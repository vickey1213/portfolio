import React from "react";
import { Container, Typography } from "@mui/material";
import profile from "../assets/profile.jpg";
import "./Home.css";

const Home = () => {
  return (
    <Container className="home">
      <Typography variant="h1" className="home-heading">
        Welcome to My Portfolio
      </Typography>
      <Typography variant="body1">
        Hi, I am Vickey Kumar, a Software Developer.
      </Typography>
      <img src={profile} alt="Vickey Kumar" className="profile-img" />
      <Typography variant="body1">
        Contact me at: (+91) 6206585892 | vickey.kmr90@gmail.com
      </Typography>
      <Typography variant="body1">
        <a
          href="https://gleaming-kheer-fb1169.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Website
        </a>
      </Typography>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/vickey-kumar1996/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a
          href="https://github.com/vickey1213"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
      </div>
    </Container>
  );
};

export default Home;
