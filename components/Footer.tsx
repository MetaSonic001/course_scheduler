import { Container, Typography } from '@mui/material';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-4 mt-8">
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Course Scheduling System. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
}