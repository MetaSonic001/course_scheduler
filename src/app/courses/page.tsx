import CourseForm from '@/components/CourseForm';
import { Container, Paper, Typography } from '@mui/material';

export default function CoursesPage() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Manage Courses
      </Typography>
      <Paper className="p-4">
        <CourseForm />
      </Paper>
    </Container>
  );
}
