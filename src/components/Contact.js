import React, { useRef } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";
import emailjs from "emailjs-com";
import "./Contact.css"; // Import the CSS file

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u93mprs",
        "template_saqofdt",
        form.current,
        "qZU7h7hOCzC9iPyBZ"
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Error:", error.text);
          alert("Failed to send message, please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <Container className="contact">
      <Typography variant="h2">Contact Me</Typography>
      <form ref={form} onSubmit={sendEmail}>
        <TextField label="Name" name="user_name" variant="outlined" required />
        <TextField
          label="Email"
          name="user_email"
          variant="outlined"
          required
        />
        <TextField
          label="Message"
          name="message"
          variant="outlined"
          required
          multiline
          rows={4}
        />
        <Button variant="contained" color="primary" type="submit">
          Send
        </Button>
      </form>
      <Typography variant="body1">
        Connect with me on{" "}
        <a
          href="https://www.linkedin.com/in/vickey-kumar1996/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        or check out my projects on{" "}
        <a
          href="https://github.com/vickey1213"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </Typography>
    </Container>
  );
};

export default Contact;
