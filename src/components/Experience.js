import React from "react";
import { Container, Typography, Button } from "@mui/material";
import "./Experience.css";

const Experience = () => {
  const figmaUrl = "#"; // Replace with your Figma prototype URL

  const jobs = [
    {
      title: "Front-End Developer",
      company: "ProHance",
      date: "Aug 2024 - Mar 2025",
      bullets: [
        "Designed and developed scalable, interactive web applications using React.js, Next.js, and TypeScript, improving user experience and operational efficiency across high-traffic internal platforms.",
        "Built and maintained Chrome extensions and cloud-integrated dashboards, streamlining workflows and enhancing visibility for internal teams by integrating with various backend APIs and cloud services.",
        "Optimized frontend performance by implementing client-side caching strategies, efficient state management, and lazy loading techniques, ensuring fast, responsive UI experiences.",
        "Integrated with backend services powered by Node.js and Nest.js, enabling real-time features such as live updates, notifications, and dynamic data rendering in mission-critical apps.",
        "Collaborated closely with cross-functional teams including designers, DevOps, and QA engineers to deliver high-quality, edge-ready web tools with a strong emphasis on usability and performance.",
        "Deployed frontend applications using CI/CD pipelines (GitHub Actions, Jenkins) in Dockerized environments, ensuring seamless and reliable rollouts to staging and production environments.",
        "Followed agile development practices, led peer code reviews, and mentored junior frontend developers, promoting best practices in UI development, accessibility, and maintainable codebases."
      ],
      tech: ["React", "Next.js", "TypeScript", "Chrome Extensions", "Node.js", "Nest.js"]
    },
    {
      title: "Front-End Developer",
      company: "UnicornKart",
      date: "Apr 2022 - Aug 2024",
      bullets: [
        "Led the design and development of a high-performance e-commerce frontend using React.js, Next.js, Material UI, and Tailwind CSS, delivering responsive, pixel-perfect interfaces from Figma designs across desktop and mobile devices.",
        "Built interactive and reusable UI components, adhering to accessibility standards and modern design systems, which significantly improved development efficiency and visual consistency across the platform.",
        "Implemented advanced user-facing features like WebSocket-powered live cart updates and real-time order tracking, enhancing user engagement and minimizing customer support touchpoints.",
        "Optimized frontend performance using code-splitting, lazy loading, image optimization, and custom caching strategies, resulting in a 20% improvement in page load times and a 15% boost in conversion rates.",
        "Collaborated with backend and mobile teams to integrate shared business logic and real-time functionalities, ensuring a consistent and seamless experience across web and React Native mobile apps (iOS & Android).",
        "Integrated third-party services such as Stripe/Razorpay for secure payments, recommendation engines for personalization, and ERP systems for real-time inventory sync, directly from the frontend layer.",
        "Participated in DevOps practices relevant to frontend delivery by configuring CI/CD pipelines (GitHub Actions), contributing to Docker-based deployment workflows, and supporting Kubernetes rollouts to ensure zero-downtime releases."
      ],
      tech: ["React", "Next.js", "Material UI", "Tailwind", "WebSockets", "Stripe"]
    },
    {
      title: "Front-End Intern",
      company: "DotAgent Tech",
      date: "Dec 2021 - Jun 2022",
      bullets: [
        "Developed modern and responsive web applications using ReactJS and Next.js framework, ensuring optimal user experience and performance.",
        "Created and utilized NextPy, a custom Python Framework, to seamlessly render ReactJS code into Python, enabling efficient backend development and enhanced application functionality."
      ],
      tech: ["ReactJS", "Next.js", "NextPy", "Python"]
    }
  ];

  return (
    <Container className="experience container" component="section" id="experience">
      <header className="experience-header">
        <div>
          <Typography variant="h2" component="h2" className="title">Experience</Typography>
          <Typography variant="subtitle1" className="subtitle">Selected roles showcasing product-focused frontend engineering, modern tooling, and performance-first delivery.</Typography>
        </div>

        <div className="figma-cta">
      git
        </div>
      </header>

      <ol className="timeline">
        {jobs.map((job, idx) => (
          <li className="timeline-item" key={idx}>
            <div className="card">
              <header className="card-header">
                <div>
                  <Typography variant="h3" component="h3" className="job-title">{job.title}</Typography>
                  <Typography variant="h4" component="p" className="company">{job.company}</Typography>
                  <span className="date">{job.date}</span>
                </div>
                <div className="tech-chips">
                  {job.tech.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </header>

              <ul className="bullets">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <footer className="experience-footer">
        <Typography variant="body2">Want this translated into a Figma flow or need design assets? Replace the Figma prototype link above with your file and I'll include a design export or guided spec.</Typography>
      </footer>
    </Container>
  );
};

export default Experience;
