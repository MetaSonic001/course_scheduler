'use client';

import { Container, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useAuth } from '../src/contexts/AuthContext';

const StudentDashboard = () => {
  const { user } = useAuth();

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Student Dashboard
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Welcome, {user?.email}
      </Typography>
      {/* Add more student-specific features here */}
      <List>
        <ListItem>
          <ListItemText primary="Feature 1" secondary="Details about Feature 1" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Feature 2" secondary="Details about Feature 2" />
        </ListItem>
      </List>
    </Container>
  );
};

export default StudentDashboard;
