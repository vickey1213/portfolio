import React from "react";
import { Container, Typography } from "@mui/material";
import "./Projects.css"; // Import the CSS file

const Projects = () => {
  const projects = [
    {
      title: "Gift Suggestion App",
      description: "A comprehensive gift suggestion platform built with modern web technologies, featuring user authentication and personalized recommendations.",
      tags: ["Node.js", "Firebase", "Google Auth", "React"]
    },
    {
      title: "Sticky Notes Clone Application",
      description: "An interactive sticky notes app developed during an online bootcamp, showcasing state management and responsive design principles.",
      tags: ["React.js", "Bootstrap", "Context API", "CSS"]
    },
    {
      title: "LinkedIn Scraper Chrome Extension",
      description: "A powerful Chrome extension for efficient data scraping from LinkedIn profiles, with a focus on performance and user privacy.",
      tags: ["React.js", "Chrome API", "JavaScript", "HTML/CSS"]
    }
  ];

  return (
    <Container className="projects container" id="projects">
      <Typography variant="h2">Featured Projects</Typography>
      <div className="grid">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <Typography variant="h3">{project.title}</Typography>
            <Typography variant="body1">{project.description}</Typography>
            <div className="tags">
              {project.tags.map((tag, tagIndex) => (
                <span className="tag" key={tagIndex}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Projects;
