import React from "react";
import CourseList from "../../components/CourseList";
import Navigation from "../../components/Navigation";
import ScheduleTable from "../../components/ScheduleTable";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navigation />
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Courses</h2>
            <CourseList />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Schedule</h2>
            <ScheduleTable />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
