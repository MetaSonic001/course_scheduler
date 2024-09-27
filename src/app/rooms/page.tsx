import RoomForm from '@/components/RoomForm';
import { Container, Paper, Typography } from '@mui/material';

export default function RoomsPage() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Manage Rooms
      </Typography>
      <Paper className="p-4">
        <RoomForm />
      </Paper>
    </Container>
  );
}
