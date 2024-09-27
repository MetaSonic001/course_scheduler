// src/app/rooms/page.tsx
import { Container, Typography } from "@mui/material";
import React from "react";
import Navigation from "../components/Navigation";

const Rooms: React.FC = () => {
  return (
    <div>
      <Navigation />
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Rooms Management
        </Typography>
        <Typography variant="body1">
          This page will display room management and allocation features.
        </Typography>
      </Container>
    </div>
  );
};

export default Rooms;
