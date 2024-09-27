'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import TeacherDashboard from '@/components/TeacherDashboard';

export default function TeacherPage() {
  return (
    <ProtectedRoute>
      <TeacherDashboard />
    </ProtectedRoute>
  );
}
