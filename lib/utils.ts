import { Course, Room, ScheduleItem, TimeSlot } from './types';

// Determine if a course is a postgraduate course
export function isPostGraduateCourse(course: Course): boolean {
  return parseInt(course.code.replace('cs', '')) >= 600; // Use `code` instead of `number`
}

// Check if a room is suitable for a given course based on capacity
export function isRoomSuitable(room: Room, course: Course): boolean {
  return room.capacity >= course.enrollment; // Use `enrollment` property
}

// Generate a schedule for the courses, rooms, and time slots provided
export function generateSchedule(
  courses: Course[],
  rooms: Room[],
  timeSlots: TimeSlot[]
): ScheduleItem[] {
  const schedule: ScheduleItem[] = [];
  const sortedCourses = [...courses].sort((a, b) =>
    isPostGraduateCourse(b) ? 1 : isPostGraduateCourse(a) ? -1 : 0
  );

  for (const course of sortedCourses) {
    let scheduled = false;
    const preferences = course.preferences || timeSlots; // Use all time slots if no preferences are specified
    for (const preference of preferences) {
      if (scheduled) break;
      for (const room of rooms) {
        if (isRoomSuitable(room, course) && !isTimeSlotOccupied(schedule, room, preference)) {
          schedule.push({ course, room, timeSlot: preference });
          scheduled = true;
          break;
        }
      }
    }
    if (!scheduled) {
      console.warn(`Could not schedule course: ${course.code}`); // Updated from `number` to `code`
    }
  }

  return schedule;
}

// Check if a time slot is already occupied for a given room
function isTimeSlotOccupied(
  schedule: ScheduleItem[],
  room: Room,
  timeSlot: TimeSlot
): boolean {
  return schedule.some(
    (item) => item.room.number === room.number && item.timeSlot === timeSlot
  );
}
