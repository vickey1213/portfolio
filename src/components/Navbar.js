import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as ScrollLink } from "react-scroll";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "Home", to: "home" },
    { text: "About", to: "about" },
    { text: "Experience", to: "experience" },
    { text: "Projects", to: "projects" },
    { text: "Contact", to: "contact" },
  ];

  const drawerList = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.text}>
            <ScrollLink to={item.to} smooth={true} duration={500}>
              <ListItemText primary={item.text} />
            </ScrollLink>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <AppBar position="sticky" className="navbar">
      <Toolbar>
        <Typography variant="h6" component="div" className="navbar-logo">
          <ScrollLink to="home" smooth={true} duration={500}>
            My Portfolio
          </ScrollLink>
        </Typography>
        <div className="navbar-links">
          {menuItems.map((item) => (
            <ScrollLink
              to={item.to}
              smooth={true}
              duration={500}
              key={item.text}
            >
              <Button color="inherit">{item.text}</Button>
            </ScrollLink>
          ))}
        </div>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          className="menu-button"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          {drawerList()}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
