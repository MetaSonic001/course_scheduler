'use client';

import CourseForm from '@/components/CourseForm';
import ProtectedRoute from '@/components/ProtectedRoute';
import RoomForm from '@/components/RoomForm';
import ScheduleTable from '@/components/ScheduleTable';

const AdminPage = () => {
  return (
    <ProtectedRoute>
      <CourseForm />
      <RoomForm />
      <ScheduleTable />
    </ProtectedRoute>
  );
};

export default AdminPage;
