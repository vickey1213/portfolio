import React from "react";
import { Container, Typography } from "@mui/material";
import profile from "../assets/profile.jpg";
import "./Home.css";

const Home = () => {
  return (
    <Container className="home container" id="home">
      <div className="hero-inner">
        <img src={profile} alt="Vickey Kumar" className="profile-img" />
        <Typography variant="h1" className="title">
          Hi, I'm Vickey Kumar
        </Typography>
        <Typography variant="h2" className="subtitle">
          Front-End Developer & Software Engineer
        </Typography>
        <Typography variant="body1" className="lead">
          Passionate about creating beautiful, responsive web applications with modern technologies.
        </Typography>

        <div className="cta-group">
          <a href="#contact" className="btn">
            <i className="fas fa-envelope"></i>
            Get In Touch
          </a>
          <a href="https://gleaming-kheer-fb1169.netlify.app" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <i className="fas fa-external-link-alt"></i>
            View My Work
          </a>
        </div>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/vickey-kumar1996/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://github.com/vickey1213" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="mailto:vickey.kmr90@gmail.com">
            <i className="fas fa-envelope"></i> Email
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Home;
