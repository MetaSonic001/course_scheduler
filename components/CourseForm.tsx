// components/CourseForm.tsx
import { Box, Button, TextField, Typography } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../lib/firebase";

interface CourseFormProps {
  onClose: () => void;
}

const CourseForm: React.FC<CourseFormProps> = ({ onClose }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [instructor, setInstructor] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await addDoc(collection(db, "courses"), { name, description, instructor });
      onClose();
    } catch (error) {
      console.error("Error adding course: ", error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <Typography variant="h6" gutterBottom>
        Add New Course
      </Typography>
      <TextField
        label="Course Name"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Description"
        fullWidth
        margin="normal"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <TextField
        label="Instructor"
        fullWidth
        margin="normal"
        value={instructor}
        onChange={(e) => setInstructor(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Submit
      </Button>
    </Box>
  );
};

export default CourseForm;
