import React, { useState } from 'react';
import { 
  LayoutDashboard, HelpCircle, Users, CalendarCheck, CheckCircle, List, Send, 
  IndianRupee, FileText, Calculator, CreditCard, Star, RefreshCw, CheckSquare, 
  Building, Briefcase, IdCard, Settings, MoreVertical, ChevronDown, 
  Plus, Edit2, Trash2, List as ListIcon, X, Save, Copy, FileSpreadsheet, Download, Printer, LayoutGrid, Lightbulb
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { exportToCSV, exportToExcel, exportToPDF, printTable } from '../../utils/exportUtils';

export default function HRLeaveTypes() {
  const navigate = useNavigate();

  const tabs = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/hr/dashboard' },
    { name: 'Guide', icon: HelpCircle, path: '/hr/guide' },
    { name: 'Staff Directory', icon: Users, path: '/hr/staff' },
    { name: 'Attendance', icon: CalendarCheck, path: '/hr/attendance' },
    { name: 'Approve Leave', icon: CheckCircle, path: '/hr/approve-leave' },
    { name: 'Leave Types', icon: List, path: '/hr/leave-types', active: true },
    { name: 'Apply Leave', icon: Send, path: '/hr/apply-leave' },
    { name: 'Set Salary', icon: IndianRupee, path: '/hr/set-salary' },
    { name: 'Salary Templates', icon: FileText, path: '/hr/salary-templates' },
    { name: 'Payroll', icon: Calculator, path: '/hr/payroll' },
    { name: 'Loans', icon: CreditCard, path: '/hr/loans' },
    { name: 'Appraisals', icon: Star, path: '/hr/appraisals' },
    { name: 'Appraisal Cycles', icon: RefreshCw, path: '/hr/appraisal-cycles' },
    { name: 'Criteria', icon: CheckSquare, path: '/hr/criteria' },
    { name: 'Departments', icon: Building, path: '/hr/departments' },
    { name: 'Designations', icon: Briefcase, path: '/hr/designations' },
    { name: 'ID Cards', icon: IdCard, path: '/hr/id-cards' },
    { name: 'Settings', icon: Settings, path: '/hr/settings' },
  ];

  const [view, setView] = useState('list'); // 'list', 'add', 'edit'
  
  const [leaveTypes, setLeaveTypes] = useState([
    { id: 1, name: 'mendatory leave', type: 'Unpaid (LOP)', quota: '0.0 Days', frequency: 'Fully Granted', carryForward: 'No', description: '' },
    { id: 2, name: 'Sick Leave', type: 'Unpaid (LOP)', quota: '0.0 Days', frequency: 'Fully Granted', carryForward: 'No', description: '' },
    { id: 3, name: 'Maternity Leave', type: 'Unpaid (LOP)', quota: '0.0 Days', frequency: 'Fully Granted', carryForward: 'No', description: '' },
    { id: 4, name: 'Casual Leave', type: 'Unpaid (LOP)', quota: '0.0 Days', frequency: 'Fully Granted', carryForward: 'No', description: '' },
    { id: 5, name: 'Medical Leave', type: 'Unpaid (LOP)', quota: '0.0 Days', frequency: 'Fully Granted', carryForward: 'No', description: '' },
  ]);

  const [formData, setFormData] = useState({
    id: null,
    name: '',
    description: '',
    isPaid: false,
    quota: '0.0',
    frequency: 'Accrued Fully (Granted at Start of Year)',
    carryForward: false
  });

  const handleAddNew = () => {
    setFormData({
      id: null,
      name: '',
      description: '',
      isPaid: false,
      quota: '0.0',
      frequency: 'Accrued Fully (Granted at Start of Year)',
      carryForward: false
    });
    setView('add');
  };

  const handleEdit = (leave) => {
    setFormData({
      id: leave.id,
      name: leave.name,
      description: leave.description,
      isPaid: leave.type === 'Paid',
      quota: leave.quota.replace(' Days', ''),
      frequency: 'Accrued Fully (Granted at Start of Year)',
      carryForward: leave.carryForward === 'Yes'
    });
    setView('edit');
  };

  const handleDelete = (id) => {
    if(window.confirm('Are you sure you want to delete this leave type?')) {
      setLeaveTypes(leaveTypes.filter(l => l.id !== id));
    }
  };

  const handleSave = () => {
    const newLeave = {
      id: formData.id || Date.now(),
      name: formData.name || 'Untitled Leave',
      type: formData.isPaid ? 'Paid' : 'Unpaid (LOP)',
      quota: `${formData.quota} Days`,
      frequency: 'Fully Granted',
      carryForward: formData.carryForward ? 'Yes' : 'No',
      description: formData.description
    };

    if (view === 'add') {
      setLeaveTypes([...leaveTypes, newLeave]);
    } else {
      setLeaveTypes(leaveTypes.map(l => l.id === newLeave.id ? newLeave : l));
    }
    
    setView('list');
  };

  const exportHeaders = ['name', 'type', 'quota', 'frequency', 'carryForward', 'description'];
  
  const handleCSV = () => exportToCSV(exportHeaders, leaveTypes, 'leave_types.csv');
  const handleExcel = () => exportToExcel(exportHeaders, leaveTypes, 'leave_types.xls');
  const handlePDF = () => exportToPDF('Leave Types Report', exportHeaders, leaveTypes);
  const handlePrint = () => printTable('Leave Types Report', exportHeaders, leaveTypes);

  const renderListView = () => (
    <div className="space-y-4">
      <div className="flex justify-end">
        <button 
          onClick={handleAddNew}
          className="bg-[#5F52FF] hover:bg-[#4f42e6] text-white px-4 py-2 rounded font-bold text-[13px] flex items-center gap-2 transition-colors cursor-pointer border-none shadow-sm"
        >
          <Plus className="w-4 h-4" /> Add New Leave Type
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg shadow-sm">
        <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ListIcon className="w-4 h-4 text-[#5F52FF]" />
            <h2 className="text-[15px] font-bold text-slate-800">All Leave Types</h2>
          </div>
          <div className="flex items-center gap-1">
            <button className="p-1.5 text-[#5F52FF] bg-[#5F52FF]/10 rounded cursor-pointer"><ListIcon className="w-4 h-4" /></button>
            <button className="p-1.5 text-slate-400 hover:text-slate-600 rounded cursor-pointer transition-colors"><LayoutGrid className="w-4 h-4" /></button>
          </div>
        </div>
        
        <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[13px] text-slate-600">
            <span>Show</span>
            <select className="border border-slate-300 rounded px-2 py-1 focus:outline-none focus:border-[#5F52FF]">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            <div className="flex ml-2 gap-1">
              <button onClick={() => {}} className="px-3 py-1 border border-slate-300 rounded bg-white hover:bg-slate-50 flex items-center justify-center cursor-pointer"><Copy className="w-3.5 h-3.5 text-slate-500" /></button>
              <button onClick={handleCSV} className="px-3 py-1 border border-slate-300 rounded bg-white hover:bg-slate-50 font-bold text-[12px] text-slate-600 cursor-pointer">CSV</button>
              <button onClick={handleExcel} className="px-3 py-1 border border-slate-300 rounded bg-white hover:bg-slate-50 font-bold text-[12px] text-slate-600 cursor-pointer">Excel</button>
              <button onClick={handlePDF} className="px-3 py-1 border border-slate-300 rounded bg-white hover:bg-slate-50 font-bold text-[12px] text-slate-600 cursor-pointer">PDF</button>
              <button onClick={handlePrint} className="px-3 py-1 border border-slate-300 rounded bg-white hover:bg-slate-50 flex items-center justify-center cursor-pointer"><Printer className="w-3.5 h-3.5 text-slate-500" /></button>
              <button className="px-3 py-1 border border-slate-300 rounded bg-white hover:bg-slate-50 font-bold text-[12px] text-slate-600 flex items-center gap-1 cursor-pointer"><LayoutDashboard className="w-3.5 h-3.5" /> Columns <ChevronDown className="w-3 h-3" /></button>
            </div>
          </div>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search leave types..." 
              className="pl-3 pr-8 py-1.5 border border-slate-300 rounded text-[13px] w-[200px] focus:outline-none focus:border-[#5F52FF]"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/50 text-[11px] font-bold text-[#5F52FF] uppercase tracking-wider">
                <th className="px-5 py-3 w-12 cursor-pointer hover:bg-slate-100"># <span className="text-slate-300 ml-1">↑↓</span></th>
                <th className="px-5 py-3 cursor-pointer hover:bg-slate-100">Name <span className="text-slate-300 ml-1">↑↓</span></th>
                <th className="px-5 py-3 cursor-pointer hover:bg-slate-100">Type <span className="text-slate-300 ml-1">↑↓</span></th>
                <th className="px-5 py-3 cursor-pointer hover:bg-slate-100">Yearly Quota <span className="text-slate-300 ml-1">↑↓</span></th>
                <th className="px-5 py-3 cursor-pointer hover:bg-slate-100">Accrual Frequency <span className="text-slate-300 ml-1">↑↓</span></th>
                <th className="px-5 py-3 cursor-pointer hover:bg-slate-100">Carry Forward <span className="text-slate-300 ml-1">↑↓</span></th>
                <th className="px-5 py-3 cursor-pointer hover:bg-slate-100">Description <span className="text-slate-300 ml-1">↑↓</span></th>
                <th className="px-5 py-3 cursor-pointer hover:bg-slate-100">Actions <span className="text-slate-300 ml-1">↑↓</span></th>
              </tr>
            </thead>
            <tbody className="text-[13px] text-slate-700">
              {leaveTypes.map((leave, index) => (
                <tr key={leave.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-4">{index + 1}</td>
                  <td className="px-5 py-4 font-semibold">{leave.name}</td>
                  <td className="px-5 py-4">
                    <span className="inline-block px-2 py-1 bg-slate-100 text-slate-600 border border-slate-200 rounded text-[11px] font-bold flex items-center gap-1 w-fit">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div> {leave.type}
                    </span>
                  </td>
                  <td className="px-5 py-4 font-bold">{leave.quota}</td>
                  <td className="px-5 py-4 text-[#5F52FF]">{leave.frequency}</td>
                  <td className="px-5 py-4 flex items-center gap-1">
                    {leave.carryForward === 'Yes' ? <CheckCircle className="w-3.5 h-3.5 text-green-500" /> : <X className="w-3.5 h-3.5 text-slate-400" />} {leave.carryForward}
                  </td>
                  <td className="px-5 py-4">{leave.description}</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <button onClick={() => handleEdit(leave)} className="text-slate-400 hover:text-slate-700 transition-colors cursor-pointer" title="Edit">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDelete(leave.id)} className="text-slate-400 hover:text-red-500 transition-colors cursor-pointer" title="Delete">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {leaveTypes.length === 0 && (
                <tr>
                  <td colSpan="8" className="px-5 py-8 text-center text-slate-500 text-[13px]">
                    No leave types found. Click "Add New Leave Type" to create one.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        <div className="px-5 py-3 border-t border-slate-200 flex items-center justify-between bg-slate-50/50">
          <div className="text-[12px] text-slate-500">
            Showing 1–{leaveTypes.length} of {leaveTypes.length}
          </div>
          <div className="flex items-center gap-1">
            <button className="w-7 h-7 flex items-center justify-center rounded border border-slate-200 bg-white text-slate-400 text-[12px]">«</button>
            <button className="w-7 h-7 flex items-center justify-center rounded bg-[#5F52FF] text-white text-[12px] font-bold shadow-sm">1</button>
            <button className="w-7 h-7 flex items-center justify-center rounded border border-slate-200 bg-white text-slate-400 text-[12px]">»</button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFormView = () => (
    <div className="flex flex-col lg:flex-row gap-6 items-start">
      <div className="flex-1 bg-white border border-slate-200 rounded-lg shadow-sm w-full">
        <div className="px-6 py-4 border-b border-slate-200 flex items-center gap-2">
          <ListIcon className="w-4 h-4 text-[#5F52FF]" />
          <h2 className="text-[16px] font-bold text-slate-800">
            {view === 'add' ? 'Add New Leave Type' : 'Edit Leave Type'}
          </h2>
        </div>
        
        <div className="p-6 space-y-6">
          <div>
            <label className="block text-[13px] font-bold text-slate-800 mb-1.5">
              Leave Type Name <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="e.g., Casual Leave"
              className="w-full px-3 py-2 border border-slate-300 rounded text-[13px] text-slate-700 focus:outline-none focus:border-[#5F52FF]" 
            />
          </div>
          
          <div>
            <label className="block text-[13px] font-bold text-slate-800 mb-1.5">Description</label>
            <textarea 
              rows="4" 
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full px-3 py-2 border border-slate-300 rounded text-[13px] text-slate-700 focus:outline-none focus:border-[#5F52FF]" 
            ></textarea>
          </div>

          <div>
            <label className="flex items-center gap-2 cursor-pointer mb-1">
              <div className="relative">
                <input 
                  type="checkbox" 
                  checked={formData.isPaid}
                  onChange={(e) => setFormData({...formData, isPaid: e.target.checked})}
                  className="sr-only peer" 
                />
                <div className="w-8 h-4 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-[#5F52FF]"></div>
              </div>
              <span className="text-[13px] text-slate-800 font-bold">Is Paid Leave?</span>
            </label>
            <p className="text-[11px] text-slate-500">If enabled, days taken under this leave type will be counted as payable days during payroll generation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[13px] font-bold text-slate-800 mb-1.5">
                Default Yearly Quota (Days) <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input 
                  type="number" 
                  step="0.5"
                  value={formData.quota}
                  onChange={(e) => setFormData({...formData, quota: e.target.value})}
                  className="w-full px-3 py-2 border border-slate-300 rounded text-[13px] text-slate-700 focus:outline-none focus:border-[#5F52FF]" 
                />
                <div className="absolute right-3 top-2.5 flex flex-col text-slate-400">
                  <span className="text-[8px] leading-[6px] cursor-pointer hover:text-slate-700" onClick={() => setFormData({...formData, quota: (parseFloat(formData.quota || 0) + 0.5).toString()})}>▲</span>
                  <span className="text-[8px] leading-[6px] cursor-pointer hover:text-slate-700" onClick={() => setFormData({...formData, quota: Math.max(0, parseFloat(formData.quota || 0) - 0.5).toString()})}>▼</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 mt-1">Initial annual quota (supports half days, e.g. 12.5)</p>
            </div>
            <div>
              <label className="block text-[13px] font-bold text-slate-800 mb-1.5">
                Accrual Frequency <span className="text-red-500">*</span>
              </label>
              <select 
                value={formData.frequency}
                onChange={(e) => setFormData({...formData, frequency: e.target.value})}
                className="w-full px-3 py-2 border border-slate-300 rounded text-[13px] text-slate-700 focus:outline-none focus:border-[#5F52FF]"
              >
                <option>Accrued Fully (Granted at Start of Year)</option>
                <option>Monthly (Pro-rata)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2 cursor-pointer mb-1">
              <div className="relative">
                <input 
                  type="checkbox" 
                  checked={formData.carryForward}
                  onChange={(e) => setFormData({...formData, carryForward: e.target.checked})}
                  className="sr-only peer" 
                />
                <div className="w-8 h-4 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-[#5F52FF]"></div>
              </div>
              <span className="text-[13px] text-slate-800 font-bold">Enable Carry-Forward?</span>
            </label>
            <p className="text-[11px] text-slate-500">If enabled, unused days carry over to the next academic/calendar year.</p>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-slate-200 flex justify-end gap-3 bg-slate-50 rounded-b-lg">
          <button 
            onClick={() => setView('list')}
            className="px-6 py-2 bg-white border border-slate-300 rounded text-slate-700 font-bold text-[13px] hover:bg-slate-50 transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button 
            onClick={handleSave}
            className="px-6 py-2 bg-[#5F52FF] hover:bg-[#4f42e6] text-white rounded font-bold text-[13px] flex items-center gap-2 transition-colors cursor-pointer border-none shadow-sm"
          >
            <Save className="w-4 h-4" /> {view === 'add' ? 'Save' : 'Update'}
          </button>
        </div>
      </div>

      {/* Right Column (Tips) */}
      <div className="w-full lg:w-[320px] shrink-0 bg-white border border-slate-200 rounded-lg shadow-sm p-5">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="w-4 h-4 text-slate-800" />
          <h2 className="text-[14px] font-bold text-slate-800">Tips</h2>
        </div>
        
        {view === 'add' ? (
          <ul className="space-y-4 text-[11px] text-slate-600 list-disc pl-4">
            <li><span className="font-bold text-slate-800">Paid vs Unpaid:</span> Paid leave days count as payable days in payroll; unpaid leave (LOP) reduces the month's salary.</li>
            <li><span className="font-bold text-slate-800">Yearly quota:</span> The number of days each staff member gets per year. Half days like 12.5 are supported.</li>
            <li><span className="font-bold text-slate-800">Monthly pro-rata:</span> Staff earn 1/12th of the quota each month — useful for new joiners mid-year.</li>
            <li><span className="font-bold text-slate-800">Carry-forward:</span> Lets unused days roll into next year. Set a cap to avoid large accumulated balances.</li>
            <li><span className="font-bold text-slate-800">Common setups:</span> Casual Leave (paid, 12/yr), Sick Leave (paid, 10/yr), Leave Without Pay (unpaid).</li>
          </ul>
        ) : (
          <ul className="space-y-4 text-[11px] text-slate-600 list-disc pl-4">
            <li><span className="font-bold text-slate-800">Changing the quota</span> affects future balance calculations; already-approved leaves are not recalculated.</li>
            <li><span className="font-bold text-slate-800">Switching Paid ↔ Unpaid</span> changes how future payrolls count these days — existing payrolls stay untouched.</li>
            <li><span className="font-bold text-slate-800">Carry-forward cap:</span> leave the max blank for unlimited, or set a cap like 5 to limit rollover.</li>
          </ul>
        )}
      </div>
    </div>
  );

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
        {view === 'list' && renderListView()}
        {(view === 'add' || view === 'edit') && renderFormView()}
      </div>
    </div>
  );
}
