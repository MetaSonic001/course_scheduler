// components/CourseList.tsx
'use client'
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getCourses } from "../lib/firebase";

interface Course {
  id: string;
  name: string;
  description: string;
  instructor: string;
}

const CourseList: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const coursesData = await getCourses();
        setCourses(coursesData);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Course List
      </Typography>
      <Grid container spacing={3}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Card>
              <CardContent>
                <Typography variant="h5">{course.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {course.description}
                </Typography>
                <Typography variant="subtitle1">
                  Instructor: {course.instructor}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CourseList;
