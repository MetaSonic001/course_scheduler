// components/ScheduleTable.tsx
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";

const ScheduleTable: React.FC = () => {
  // Dummy data for the schedule table
  const schedule = [
    { time: "08:00 - 09:00", course: "Math 101", room: "A1" },
    { time: "09:00 - 10:00", course: "Physics 201", room: "B2" },
    { time: "10:00 - 11:00", course: "Chemistry 301", room: "C3" },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Course</TableCell>
            <TableCell>Room</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {schedule.map((entry, index) => (
            <TableRow key={index}>
              <TableCell>{entry.time}</TableCell>
              <TableCell>{entry.course}</TableCell>
              <TableCell>{entry.room}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ScheduleTable;
