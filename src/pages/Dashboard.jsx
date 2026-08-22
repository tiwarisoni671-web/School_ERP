import { Hand } from "lucide-react";
import StatCard from "../components/dashboard/StatCard";
import EcosystemHub from "../components/dashboard/EcosystemHub";
import LiveActivity from "../components/dashboard/LiveActivity";
import DashboardBottomWidgets from "../components/dashboard/BottomWidgets";

const Dashboard = () => {
  return (
    <div className="p-4 max-w-7xl mx-auto space-y-4 pb-20">
      {/* Banner */}
      <div className="bg-[#009b9f] text-white p-3 rounded-md text-sm flex items-start gap-2 shadow-sm">
        <div className="bg-white/20 p-1 rounded mt-0.5">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>
        <p>
          <strong>New: academic-session scoping.</strong> Lists and dashboard numbers (students, exams, assessments, homework, notices...) now show the <i>selected academic session</i> only, so totals may look smaller than before — nothing was deleted. Use the session switcher in the top bar to view another year, the "<i>View all sessions</i>" button on lists to see everything, and note that money totals marked "(All Years)" still include every session.
        </p>
        <button className="ml-auto text-white/70 hover:text-white p-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>

      {/* Greeting and Quick Links */}
      <div className="flex justify-between items-end mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            Good Evening, school <span>👋</span>
          </h1>
          <p className="text-gray-500 text-sm mt-1">Here's what's happening at ACS School today — Thursday, 20 August 2026</p>
        </div>
        
        <div className="flex gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-600 bg-white border rounded-md shadow-sm">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>
            UPDATES
          </button>
          <div className="flex bg-white border rounded-md shadow-sm overflow-hidden text-xs text-gray-600">
            <button className="px-3 py-1.5 border-r hover:bg-gray-50 flex items-center gap-1.5">Museum <span className="text-gray-400">(Aug 30)</span></button>
            <button className="px-3 py-1.5 border-r hover:bg-gray-50 flex items-center gap-1.5 text-green-600"><span className="w-2 h-2 bg-green-500 rounded-sm"></span> Republic Day Function <span className="text-gray-400">(Sep 04)</span></button>
            <button className="px-3 py-1.5 hover:bg-gray-50 flex items-center gap-1.5 text-green-600"><span className="w-2 h-2 bg-green-500 rounded-sm"></span> Health & Wellness P...</button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4">
        <StatCard 
          title="Total Students" 
          value="253" 
          iconColor="bg-blue-500" 
          icon="student"
          data={[10, 20, 15, 30, 25, 40, 50, 45, 60]}
          color="#3b82f6"
        />
        <StatCard 
          title="Collected This Month" 
          value="₹8,90,693" 
          iconColor="bg-green-500" 
          icon="money"
          trend="+ 618%"
          trendColor="text-green-600 bg-green-50"
          data={[5, 10, 8, 30, 40, 60, 55, 80, 100]}
          color="#22c55e"
        />
        <StatCard 
          title="Attendance Today" 
          value="18%" 
          iconColor="bg-indigo-500" 
          icon="attendance"
          data={[80, 70, 75, 50, 60, 40, 30, 20, 18]}
          color="#6366f1"
        />
        <StatCard 
          title="Pending Dues (All Years)" 
          value="₹92,65,450" 
          iconColor="bg-red-500" 
          icon="pending"
          data={[90, 85, 95, 90, 80, 70, 75, 85, 95]}
          color="#ef4444"
          fill="#fee2e2"
        />
      </div>

      {/* Main Content Area: Hub & Activity */}
      <div className="grid grid-cols-3 gap-4 pt-4">
        {/* Ecosystem Hub */}
        <div className="col-span-2">
           <EcosystemHub />
        </div>
        
        {/* Live Activity */}
        <div className="col-span-1">
           <LiveActivity />
        </div>
      </div>

      {/* Bottom Widgets Row */}
      <DashboardBottomWidgets />
    </div>
  );
};

export default Dashboard;
