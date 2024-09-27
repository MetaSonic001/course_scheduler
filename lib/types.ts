// types.ts
export interface Course {
  id: string;
  code: string; // Updated from number to code
  name: string;
  vertical: string;
  subVertical: string;
  teacherName: string;
  time: string;
  room: string;
  semester: number;
  credits: number;
  enrollment: number; // Add this property to represent student enrollment
  preferences?: TimeSlot[]; // Optional property for preferred time slots
}

export interface Room {
  number: string;
  capacity: number;
}

export type TimeSlot = string;

export interface ScheduleItem {
  course: Course;
  room: Room;
  timeSlot: TimeSlot;
}

export interface ErrorMessage {
  code: string;
  message: string;
}
