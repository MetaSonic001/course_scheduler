import ScheduleTable from '@/components/ScheduleTable';
import { Container, Paper, Typography } from '@mui/material';

export default function SchedulePage() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Course Schedule
      </Typography>
      <Paper className="p-4">
        <ScheduleTable />
      </Paper>
    </Container>
  );
}
