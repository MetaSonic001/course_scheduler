'use client';

import { Container, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useAuth } from '../src/contexts/AuthContext';

const TeacherDashboard = () => {
  const { user } = useAuth();

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Teacher Dashboard
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Welcome, {user?.email}
      </Typography>
      {/* Add more teacher-specific features here */}
      <List>
        <ListItem>
          <ListItemText primary="Feature A" secondary="Details about Feature A" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Feature B" secondary="Details about Feature B" />
        </ListItem>
      </List>
    </Container>
  );
};

export default TeacherDashboard;
