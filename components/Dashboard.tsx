// src/app/page.tsx
import { Container, Grid } from "@mui/material";
import React from "react";
import CourseList from "../components/CourseList";
import Navigation from "../components/Navigation";
import ScheduleTable from "../components/ScheduleTable";

const Dashboard: React.FC = () => {
  return (
    <div>
      <Navigation />
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <CourseList />
          </Grid>
          <Grid item xs={12} md={6}>
            <ScheduleTable />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;
