import React from 'react';
import { Settings, Calendar, Bell } from 'lucide-react';

const DashboardHeader = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-800 flex items-center gap-2">
          Good Afternoon, <span className="bg-[#5F52FF] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider relative top-[1px]">EXECUTIVE PRO X</span>
        </h1>
        <div className="flex items-center text-[11px] text-slate-500 mt-1 font-medium">
          <span className="flex items-center gap-1.5"><div className="w-3 h-3 bg-slate-200 rounded-sm"></div> YUG SCHOOL</span>
          <span className="mx-2 text-slate-300">|</span>
          <span>1:26 PM</span>
          <span className="mx-2 text-slate-300">|</span>
          <span>Monday, Aug 24, 2026</span>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="flex items-center bg-white border border-slate-200 rounded-md shadow-sm h-8 overflow-hidden text-[11px]">
          <div className="px-3 py-1.5 bg-orange-50 text-orange-600 font-bold flex items-center gap-1.5 border-r border-slate-200">
            <Bell className="w-3 h-3" />
            UPDATES
          </div>
          <div className="px-3 py-1.5 text-slate-500 border-r border-slate-200">
            (Aug 26)
          </div>
          <div className="px-3 py-1.5 text-slate-700 font-medium flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-sm"></span>
            Field Trip to Science Museum (Aug 30)
          </div>
          <button className="px-2 py-1.5 text-slate-400 hover:text-slate-600 transition-colors bg-slate-50 border-l border-slate-200">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        
        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-md shadow-sm text-[11px] font-bold text-slate-700 hover:bg-slate-50 transition-colors h-8">
          <Settings className="w-3.5 h-3.5" />
          Customize
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
