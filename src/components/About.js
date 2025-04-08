import React from "react";
import { Container, Typography } from "@mui/material";
import "./About.css";

const About = () => {
  return (
    <Container className="about">
      <Typography variant="h2">About Me</Typography>
      <Typography variant="body1">
        I am a frontend developer with 2 years of experience in software
        development. I specialize in creating dynamic and beautiful web pages
        using React.js, HTML, CSS, and JavaScript.
      </Typography>
      <Typography variant="h3">Skills</Typography>
      <ul>
        <li>React.js, Next.js</li>
        <li>HTML, CSS, JavaScript</li>
        <li>Bootstrap, Material-UI ,</li>
        <li>MongoDB, Node.js, Express.js</li>
        <li>Git, npm, Visual Studio Code</li>
        <li>Tailwind CSS</li>
      </ul>
    </Container>
  );
};

export default About;
