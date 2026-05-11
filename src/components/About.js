import React from "react";
import { Container, Typography } from "@mui/material";
import "./About.css";

const About = () => {
  return (
    <Container className="about container" id="about">
      <Typography variant="h2">About Me</Typography>
      <Typography variant="body1">
        I'm a passionate Front-End Developer with over 3 years of experience crafting dynamic and beautiful web applications.
        I specialize in modern JavaScript frameworks like React.js and Next.js, creating responsive, user-centric interfaces
        that deliver exceptional user experiences.
      </Typography>
      <Typography variant="body1">
        My journey in web development started with a curiosity for how things work on the web, and it has evolved into
        a deep expertise in building scalable, performant applications. I love turning complex problems into simple,
        beautiful designs.
      </Typography>
      <Typography variant="h3">Skills & Technologies</Typography>
      <ul className="skills">
        <li className="skill">React.js</li>
        <li className="skill">Next.js</li>
        <li className="skill">JavaScript (ES6+)</li>
        <li className="skill">TypeScript</li>
        <li className="skill">HTML5</li>
        <li className="skill">CSS3</li>
        <li className="skill">Material-UI</li>
        <li className="skill">Tailwind CSS</li>
        <li className="skill">Node.js</li>
        <li className="skill">MongoDB</li>
        <li className="skill">Git</li>
        <li className="skill">REST APIs</li>
      </ul>
    </Container>
  );
};

export default About;
