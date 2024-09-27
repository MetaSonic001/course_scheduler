// components/Navigation.tsx
// import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { useRouter } from "next/Navigation";
import React from "react";

const Navigation: React.FC = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Course Scheduler
        </Typography>
        <Button color="inherit" onClick={() => handleNavigation("/")}>Dashboard</Button>
        <Button color="inherit" onClick={() => handleNavigation("/courses")}>Courses</Button>
        <Button color="inherit" onClick={() => handleNavigation("/rooms")}>Rooms</Button>
        <Button color="inherit" onClick={() => handleNavigation("/login")}>Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
