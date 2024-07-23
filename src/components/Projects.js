import React from "react";
import { Container, Typography } from "@mui/material";
import "./Projects.css"; // Import the CSS file

const Projects = () => {
  return (
    <Container className="projects">
      <Typography variant="h2">Projects</Typography>
      <div className="project">
        <Typography variant="h3">Gift Suggestion App</Typography>
        <Typography variant="body1">
          Developed a gift suggestion platform with Node.js, Firebase, and
          Google Authentication for streamlined user access and security.
        </Typography>
      </div>
      <div className="project">
        <Typography variant="h3">Sticky Notes Clone Application</Typography>
        <Typography variant="body1">
          Created a sticky notes application while attending an online bootcamp
          using ReactJs, Bootstrap CSS, and explored the use of context API.
        </Typography>
      </div>
      <div className="project">
        <Typography variant="h3">LinkedIn Scrapper</Typography>
        <Typography variant="body1">
          Developed a Google Chrome extension using React.js, HTML, and CSS,
          specializing in efficient data scraping from LinkedIn profiles. Hosted
          the extension’s source code on GitHub, emphasizing transparency and
          collaboration in development.
        </Typography>
      </div>
    </Container>
  );
};

export default Projects;
