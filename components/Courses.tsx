// src/app/courses/page.tsx
import { Box, Button, Container, Modal } from "@mui/material";
import React, { useState } from "react";
import CourseForm from "../../components/CourseForm";
import CourseList from "../../components/CourseList";
import Navigation from "../../components/Navigation";

const Courses: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Navigation />
      <Container sx={{ mt: 4 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Add Course
          </Button>
        </Box>
        <CourseList />
        <Modal open={open} onClose={handleClose}>
          <Box sx={{ width: 400, p: 4, margin: "auto", mt: 10, bgcolor: "background.paper", borderRadius: 1 }}>
            <CourseForm onClose={handleClose} />
          </Box>
        </Modal>
      </Container>
    </div>
  );
};

export default Courses;
