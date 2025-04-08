import React from "react";
import { Container, Typography } from "@mui/material";
import "./Experience.css";

const Experience = () => {
  return (
    <Container className="experience">
      <Typography variant="h2">Experience</Typography>

      <div className="job">
        <Typography variant="h3">Front-End Developer</Typography>
        <Typography variant="h4">ProHance (Aug 2024 - Present)</Typography>
        <ul>
          <li>
            Developed and maintained Chrome extensions, enhancing user
            interaction and accessibility.
          </li>
          <li>
            Built a feature-rich e-commerce site using React, Next.js, and
            Tailwind CSS.
          </li>
          <li>
            Created reusable Material-UI components, boosting development
            efficiency.
          </li>
          <li>
            Utilized third-party APIs for payments, order tracking, and product
            recommendations.
          </li>
          <li>
            Specialized in UI design and responsive frontend development using
            React.js, HTML5, CSS3, and JavaScript.
          </li>
          <li>
            Integrated Redux for state management, ensuring consistency and
            scalability.
          </li>
          <li>
            Collaborated with cross-functional teams to optimize performance and
            enhance user experiences.
          </li>
        </ul>
      </div>

      <div className="job">
        <Typography variant="h3">Front-End Engineer</Typography>
        <Typography variant="h4">UnicornKart (July 2022 - Aug 2024)</Typography>
        <ul>
          <li>
            Designed and developed a feature-rich e-commerce website for the US
            market using HTML, CSS, JavaScript, React, Next.js, and Tailwind
            CSS.
          </li>
          <li>
            Implemented reusable components with Material-UI, ensuring
            consistency and efficiency in development.
          </li>
          <li>
            Integrated Redux for state management, maintaining data consistency
            and enhancing scalability.
          </li>
          <li>
            Utilized third-party APIs to seamlessly integrate payment gateways,
            order tracking, and product recommendations, enhancing user
            experience.
          </li>
          <li>
            Optimized website performance through meticulous code optimization
            and responsive design principles.
          </li>
          <li>
            Conducted comprehensive user testing, gathering feedback to
            collaboratively enhance UI/UX and improve conversion rates.
          </li>
        </ul>
      </div>

      <div className="job">
        <Typography variant="h3">Front-End Intern</Typography>
        <Typography variant="h4">
          DotAgent Tech (Dec 2021 - Jun 2022)
        </Typography>
        <ul>
          <li>
            Developed modern and responsive web applications using ReactJS and
            Next.js framework, ensuring optimal user experience and performance.
          </li>
          <li>
            Created and utilized NextPy, a custom Python Framework, to
            seamlessly render ReactJS code into Python, enabling efficient
            backend development and enhanced application functionality.
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Experience;
