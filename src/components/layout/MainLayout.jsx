import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
      {/* Sidebar Navigation */}
      <div className="print:hidden h-full">
        <Sidebar isCollapsed={!isSidebarOpen} />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 bg-white print:bg-white">
        <div className="print:hidden">
          <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        </div>
        
        {/* Dynamic Page Content */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
