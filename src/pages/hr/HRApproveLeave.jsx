import React from 'react';
import { 
  LayoutDashboard, HelpCircle, Users, CalendarCheck, CheckCircle, List, Send, 
  IndianRupee, FileText, Calculator, CreditCard, Star, RefreshCw, CheckSquare, 
  Building, Briefcase, IdCard, Settings, MoreVertical, ChevronDown, CheckCheck
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function HRApproveLeave() {
  const navigate = useNavigate();

  const tabs = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/hr/dashboard' },
    { name: 'Guide', icon: HelpCircle, path: '/hr/guide' },
    { name: 'Staff Directory', icon: Users, path: '/hr/staff' },
    { name: 'Attendance', icon: CalendarCheck, path: '/hr/attendance' },
    { name: 'Approve Leave', icon: CheckCircle, path: '/hr/approve-leave', active: true },
    { name: 'Leave Types', icon: List, path: '/hr/leave-types' },
    { name: 'Apply Leave', icon: Send, path: '/hr/apply-leave' },
    { name: 'Set Salary', icon: IndianRupee, path: '/hr/set-salary' },
    { name: 'Salary Templates', icon: FileText, path: '/hr/salary-templates' },
    { name: 'Payroll', icon: Calculator, path: '/hr/payroll' },
    { name: 'Loans', icon: CreditCard, path: '/hr/manage-loans' },
    { name: 'Appraisals', icon: Star, path: '/hr/appraisals' },
    { name: 'Appraisal Cycles', icon: RefreshCw, path: '/hr/appraisal-cycles' },
    { name: 'Criteria', icon: CheckSquare, path: '/hr/appraisal-criteria' },
    { name: 'Departments', icon: Building, path: '/hr/departments' },
    { name: 'Designations', icon: Briefcase, path: '/hr/designations' },
    { name: 'ID Cards', icon: IdCard, path: '/hr/id-cards' },
    { name: 'Settings', icon: Settings, path: '/hr/settings' },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans pb-10">
      
      {/* Header */}
      <div className="bg-white px-6 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-slate-800">Human Resource</h1>
          <p className="text-[11px] text-slate-500 mt-1">Manage staff, attendance, leaves, payroll, and loans across the school.</p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white px-6 border-b border-slate-200 flex items-center gap-4 lg:gap-6 text-[12px] font-bold">
        {tabs.slice(0, 11).map((tab) => (
          <button 
            key={tab.name}
            onClick={() => tab.path && navigate(tab.path)}
            className={`flex items-center gap-2 py-3 whitespace-nowrap cursor-pointer transition-colors ${
              tab.active 
                ? 'text-[#5F52FF] border-b-2 border-[#5F52FF]' 
                : 'text-slate-500 hover:text-slate-800 border-b-2 border-transparent'
            }`}
          >
            <tab.icon className="w-3.5 h-3.5" />
            {tab.name}
          </button>
        ))}
        
        {/* More Menu Dropdown */}
        <div className="relative group">
          <button className="flex items-center gap-2 py-3 whitespace-nowrap cursor-pointer text-slate-500 hover:text-slate-800 border-b-2 border-transparent transition-colors">
            <MoreVertical className="w-3.5 h-3.5" /> More Menu <ChevronDown className="w-3.5 h-3.5" />
          </button>
          <div className="absolute right-0 top-full mt-0 w-48 bg-white border border-slate-200 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 py-1">
            {tabs.slice(11).map((tab) => (
              <button 
                key={tab.name}
                onClick={() => tab.path && navigate(tab.path)}
                className="w-full text-left px-4 py-2 flex items-center gap-2 text-[12px] text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <tab.icon className="w-3.5 h-3.5 text-slate-500" />
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 max-w-[1400px] mx-auto">
        
        {/* Empty State Box */}
        <div className="bg-white border border-slate-200 rounded-lg shadow-sm py-24 flex flex-col items-center justify-center">
          <div className="w-12 h-12 bg-[#5F52FF]/10 rounded-full flex items-center justify-center mb-4">
            <CheckCheck className="w-6 h-6 text-[#5F52FF]" />
          </div>
          <p className="text-[13px] font-bold text-slate-700">There are no pending leave requests.</p>
        </div>

      </div>
    </div>
  );
}
