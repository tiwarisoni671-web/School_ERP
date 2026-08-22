import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Info, Settings, Users, CheckCircle, XCircle, CreditCard, PieChart, AlertCircle, 
  Search, HelpCircle, Save, Calendar
} from 'lucide-react';
import QuickSetupModal from '../../components/finance/QuickSetupModal';
import UnderstandingAssignmentsModal from '../../components/finance/UnderstandingAssignmentsModal';

const statsData = [
  { label: 'STUDENTS', value: '13', color: 'bg-[#3182ce]', icon: Users },
  { label: 'HAVE FEES', value: '13', color: 'bg-[#48bb78]', icon: CheckCircle },
  { label: 'NO FEES YET', value: '0', color: 'bg-[#718096]', icon: XCircle },
  { label: 'TOTAL BILLED', value: '₹7,58,985', color: 'bg-[#0bc5ea]', icon: CreditCard },
  { label: 'COLLECTED', value: '₹3,84,395', color: 'bg-[#9f7aea]', icon: PieChart },
  { label: 'OUTSTANDING', value: '₹3,74,590', color: 'bg-[#f56565]', icon: AlertCircle },
];

const studentsData = [
  { id: 1, admissionNo: 'YISADM-004', rollNo: '4', name: 'Kabir Singh', groups: 4, billed: 50399, paid: 20000, due: 30399, status: 'Partial' },
  { id: 2, admissionNo: 'YISADM-006', rollNo: '6', name: 'Vihan Gupta', groups: 4, billed: 50399, paid: 21000, due: 29399, status: 'Partial' },
  { id: 3, admissionNo: 'YISADM-008', rollNo: '8', name: 'Shaurya Mishra', groups: 4, billed: 50399, paid: 35000, due: 15399, status: 'Partial' },
  { id: 4, admissionNo: 'YISADM-009', rollNo: '9', name: 'Kavya Joshi', groups: 4, billed: 50399, paid: 20000, due: 30399, status: 'Partial' },
  { id: 5, admissionNo: 'YISADM-010', rollNo: '10', name: 'Atharv Kumar', groups: 4, billed: 50399, paid: 48399, due: 2000, status: 'Partial' },
  { id: 6, admissionNo: 'YISADM-011', rollNo: '11', name: 'Kiara Soni', groups: 4, billed: 50399, paid: 21000, due: 29399, status: 'Partial' },
  { id: 7, admissionNo: 'YISADM-012', rollNo: '12', name: 'Krish Yadav', groups: 4, billed: 50399, paid: 20000, due: 30399, status: 'Partial' },
  { id: 8, admissionNo: 'YISADM-013', rollNo: '13', name: 'Myra Khan', groups: 4, billed: 50399, paid: 20000, due: 30399, status: 'Partial' },
  { id: 9, admissionNo: 'YISADM-014', rollNo: '14', name: 'Aaryan Rao', groups: 4, billed: 50399, paid: 20000, due: 30399, status: 'Partial' },
  { id: 10, admissionNo: 'YISADM-015', rollNo: '15', name: 'Navya Bansal', groups: 4, billed: 50399, paid: 22399, due: 28000, status: 'Partial' },
  { id: 11, admissionNo: 'YISADM-016', rollNo: '16', name: 'Darsh Jain', groups: 4, billed: 50399, paid: 21000, due: 29399, status: 'Partial' },
  { id: 12, admissionNo: 'YISADM-017', rollNo: '17', name: 'Ria Chouhan', groups: 4, billed: 50399, paid: 22000, due: 28399, status: 'Partial' },
  { id: 13, admissionNo: 'YISADM-018', rollNo: '18', name: 'Daksh Tiwari', groups: 4, billed: 50399, paid: 21000, due: 29399, status: 'Partial' },
];

const AssignFees = () => {
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [isQuickSetupOpen, setIsQuickSetupOpen] = useState(false);
  const [isUnderstandingOpen, setIsUnderstandingOpen] = useState(false);
  const [mode, setMode] = useState('assign'); // 'assign' or 'unassign'
  
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedStudents(studentsData.map(s => s.id));
    } else {
      setSelectedStudents([]);
    }
  };

  const handleSelectOne = (e, id) => {
    if (e.target.checked) {
      setSelectedStudents([...selectedStudents, id]);
    } else {
      setSelectedStudents(selectedStudents.filter(sId => sId !== id));
    }
  };

  return (
    <div className="p-4 max-w-[1600px] mx-auto bg-gray-50 min-h-screen text-gray-800 pb-20">
      
      {/* Banner */}
      <div className="bg-[#009b9f] text-white p-2.5 rounded-lg text-xs flex items-center gap-2 mb-4 shadow-sm">
        <Info className="w-4 h-4 flex-shrink-0" />
        <p>
          <strong>New: academic-session scoping.</strong> Lists and dashboard numbers (students, exams, assessments, homework, notices...) now show the <em>selected academic session</em> only, so totals may look smaller than before — nothing was deleted. Use the session switcher in the top bar to view another year, the "View all sessions" button on lists to see everything, and note that money totals marked "(All Years)" still include every session.
        </p>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Finance & Fees</h1>
          <p className="text-[11px] text-gray-500">Manage fee types, groups, collection, challans, and reports across the school.</p>
        </div>
        <button 
          onClick={() => setIsQuickSetupOpen(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 transition-colors"
        >
          <Settings className="w-3.5 h-3.5" /> Quick Setup
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-6 border-b border-gray-200 mb-6 overflow-x-auto text-xs font-semibold text-gray-600">
        <Link to="/finance" className="pb-2 px-1 whitespace-nowrap hover:text-blue-600 transition-colors">Dashboard</Link>
        <Link to="/finance/collect" className="pb-2 px-1 whitespace-nowrap hover:text-blue-600 transition-colors">Collect Fees</Link>
        <Link to="/finance/due-fees" className="pb-2 px-1 whitespace-nowrap hover:text-blue-600 transition-colors">Search Due Fees</Link>
        <Link to="/finance/transactions" className="pb-2 px-1 whitespace-nowrap hover:text-blue-600 transition-colors">All Transactions</Link>
        <Link to="/finance/online-transactions" className="pb-2 px-1 whitespace-nowrap hover:text-blue-600 transition-colors">Online Transactions</Link>
        <Link to="/finance/challans" className="pb-2 px-1 whitespace-nowrap hover:text-blue-600 transition-colors">Fee Challans</Link>
        <button className="text-gray-900 border-b-[3px] border-gray-900 pb-2 px-1 whitespace-nowrap">Assign Fees</button>
        <Link to="/finance/carry-forward" className="pb-2 px-1 whitespace-nowrap hover:text-blue-600 transition-colors">Fees Carry Forward</Link>

        <button className="pb-2 px-1 whitespace-nowrap hover:text-blue-600 transition-colors">Fee Groups</button>
        <button className="pb-2 px-1 whitespace-nowrap hover:text-blue-600 transition-colors">Fees Discount</button>
        <button className="pb-2 px-1 whitespace-nowrap hover:text-blue-600 transition-colors">Fee Types</button>
        <button className="pb-2 px-1 whitespace-nowrap hover:text-blue-600 transition-colors">Generate Due Slip</button>
        <button className="pb-2 px-1 whitespace-nowrap hover:text-blue-600 transition-colors">Due Slip History</button>
      </div>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[15px] font-bold text-gray-800">Manage Fee Assignments</h2>
        <button 
          onClick={() => setIsUnderstandingOpen(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gray-600 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 transition-colors"
        >
          <HelpCircle className="w-3.5 h-3.5" /> How Assignments Work
        </button>
      </div>

      {/* Filters Row */}
      <div className="flex flex-wrap md:flex-nowrap gap-3 mb-6 items-end">
        <div className="flex-1 min-w-[150px]">
          <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Class</label>
          <select className="w-full text-xs border border-gray-300 rounded px-2.5 py-1.5 text-gray-700 focus:outline-none focus:border-indigo-500">
            <option>Nursery</option>
          </select>
        </div>
        <div className="flex-1 min-w-[150px]">
          <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Section <span className="text-gray-400 font-normal">(Optional)</span></label>
          <select className="w-full text-xs border border-gray-300 rounded px-2.5 py-1.5 text-gray-700 focus:outline-none focus:border-indigo-500">
            <option>A</option>
          </select>
        </div>
        <div className="flex-1 min-w-[150px]">
          <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Category <span className="text-gray-400 font-normal">(Optional)</span></label>
          <select className="w-full text-xs border border-gray-300 rounded px-2.5 py-1.5 text-gray-700 focus:outline-none focus:border-indigo-500">
            <option>GENERAL</option>
          </select>
        </div>
        <div className="flex-1 min-w-[150px]">
          <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Fee Status</label>
          <select className="w-full text-xs border border-gray-300 rounded px-2.5 py-1.5 text-gray-700 focus:outline-none focus:border-indigo-500">
            <option>All or fees assigned</option>
          </select>
        </div>
        <button className="bg-[#5a67d8] hover:bg-[#4c51bf] text-white px-8 py-1.5 rounded text-xs font-bold shadow-sm transition-colors flex items-center gap-1.5 h-[34px]">
          <Search className="w-3.5 h-3.5" /> Retrieve
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-2 mb-6">
        {statsData.map((stat, idx) => (
          <div key={idx} className={`${stat.color} rounded shadow-sm p-3 text-white relative overflow-hidden`}>
            <p className="text-[10px] font-bold opacity-90 mb-1">{stat.label}</p>
            <p className="text-lg font-extrabold">{stat.value}</p>
            <stat.icon className="absolute right-[-10px] bottom-[-10px] w-14 h-14 opacity-20" />
          </div>
        ))}
      </div>

      {/* Main Box */}
      <div className="bg-white border border-gray-200 rounded shadow-sm">
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
          <h3 className="text-sm font-bold text-indigo-700 flex items-center gap-1.5">
            <Users className="w-4 h-4" /> Manage Students (Total: 13)
          </h3>
          <div className="flex rounded overflow-hidden shadow-sm">
            <button 
              onClick={() => setMode('assign')}
              className={`px-3 py-1.5 text-xs font-bold border-r flex items-center gap-1 transition-colors ${
                mode === 'assign' ? 'bg-[#48bb78] text-white border-[#38a169]' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border-gray-300'
              }`}
            >
              <CheckCircle className="w-3.5 h-3.5" /> Assign Mode
            </button>
            <button 
              onClick={() => setMode('unassign')}
              className={`px-3 py-1.5 text-xs font-bold flex items-center gap-1 transition-colors ${
                mode === 'unassign' ? 'bg-[#e53e3e] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
               <XCircle className="w-3.5 h-3.5" /> Unassign Mode
            </button>
          </div>
        </div>

        <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex flex-wrap md:flex-nowrap gap-6 items-start">
          <div className={`flex-1 ${mode === 'unassign' ? 'opacity-60 pointer-events-none' : ''}`}>
             <label className="block text-[10px] font-bold text-gray-500 mb-1">Fee Group <span className="text-red-500">*</span></label>
             <select 
               disabled={mode === 'unassign'}
               className="w-full text-xs border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:border-indigo-500 bg-white disabled:bg-gray-100"
             >
                <option>-- Select Fee Group --</option>
             </select>
          </div>
          <div className={`flex-1 ${mode === 'unassign' ? 'opacity-60 pointer-events-none' : ''}`}>
             <label className="block text-[10px] font-bold text-gray-500 mb-1">Demand Date <span className="text-[#3182ce] font-normal">(Allows future dues)</span></label>
             <div className="relative">
                <input 
                  type="text" 
                  value="21-08-2026" 
                  readOnly 
                  disabled={mode === 'unassign'}
                  className="w-full text-xs border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:border-indigo-500 bg-white disabled:bg-gray-100" 
                />
                <Calendar className="w-4 h-4 text-gray-400 absolute right-3 top-2" />
             </div>
             <p className="text-[10px] text-gray-400 mt-1 flex items-start gap-1">
               <Info className="w-3 h-3 flex-shrink-0 mt-0.5" /> If set into the future, parents will not see the fee until the exact date arrives.
             </p>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[11px] whitespace-nowrap">
            <thead>
              <tr className="bg-gray-50 text-gray-600 border-b border-gray-200 uppercase font-bold tracking-wider">
                <th className="px-4 py-2 w-10 text-center">
                  <input type="checkbox" onChange={handleSelectAll} checked={selectedStudents.length === studentsData.length && studentsData.length > 0} className="w-3 h-3 text-indigo-600 border-gray-300 rounded" />
                </th>
                <th className="px-3 py-2">Admission No</th>
                <th className="px-3 py-2">Roll No</th>
                <th className="px-3 py-2 w-48">Student Name</th>
                <th className="px-3 py-2 text-indigo-600">Fee Groups Assigned</th>
                <th className="px-3 py-2 text-right">Billed</th>
                <th className="px-3 py-2 text-right">Paid</th>
                <th className="px-3 py-2 text-right">Due</th>
                <th className="px-3 py-2 text-center">Pay Status</th>
                <th className="px-3 py-2 text-center">For This Group</th>
              </tr>
            </thead>
            <tbody>
              {studentsData.map((student) => (
                <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-2 text-center">
                    <input 
                      type="checkbox" 
                      checked={selectedStudents.includes(student.id)}
                      onChange={(e) => handleSelectOne(e, student.id)}
                      className="w-3 h-3 text-indigo-600 border-gray-300 rounded" 
                    />
                  </td>
                  <td className="px-3 py-2 text-gray-600">{student.admissionNo}</td>
                  <td className="px-3 py-2 text-gray-600">{student.rollNo}</td>
                  <td className="px-3 py-2 font-bold text-gray-800">{student.name}</td>
                  <td className="px-3 py-2">
                     <span className="px-2 py-0.5 border border-gray-200 text-gray-600 rounded bg-gray-50 text-[10px] font-semibold flex items-center w-max gap-1">
                        <Users className="w-3 h-3" /> {student.groups} GROUPS
                     </span>
                  </td>
                  <td className="px-3 py-2 text-right text-gray-600 font-medium">₹{student.billed.toLocaleString()}</td>
                  <td className="px-3 py-2 text-right text-gray-600 font-medium">₹{student.paid.toLocaleString()}</td>
                  <td className="px-3 py-2 text-right text-red-500 font-bold">₹{student.due.toLocaleString()}</td>
                  <td className="px-3 py-2 text-center">
                     <span className="px-2 py-0.5 bg-[#ecc94b] text-white rounded shadow-sm text-[10px] font-bold">
                       {student.status}
                     </span>
                  </td>
                  <td className="px-3 py-2 text-center text-gray-400 italic text-[10px]">
                     Pick a group
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-3 border-t border-gray-200 flex justify-between items-center bg-gray-50 text-xs text-gray-500">
          <span>Showing 1-13 of 13</span>
          <div className="flex gap-1">
             <button className="w-6 h-6 rounded bg-[#5a67d8] text-white flex items-center justify-center font-bold">1</button>
          </div>
        </div>

      </div>

      {/* Action Button at the bottom */}
      <div className="flex justify-end mt-4">
        {mode === 'assign' ? (
          <button className="bg-[#48bb78] hover:bg-[#38a169] text-white px-6 py-2.5 rounded shadow-sm font-bold flex items-center gap-2 transition-colors">
            <Save className="w-4 h-4" /> Assign Fees Now
          </button>
        ) : (
          <button className="bg-[#e53e3e] hover:bg-[#c53030] text-white px-6 py-2.5 rounded shadow-sm font-bold flex items-center gap-2 transition-colors">
            <XCircle className="w-4 h-4" /> Unassign Fees Now
          </button>
        )}
      </div>

      {/* Quick Setup Modal */}
      <QuickSetupModal isOpen={isQuickSetupOpen} onClose={() => setIsQuickSetupOpen(false)} />

      {/* Understanding Assignments Modal */}
      <UnderstandingAssignmentsModal isOpen={isUnderstandingOpen} onClose={() => setIsUnderstandingOpen(false)} />
    </div>
  );
};

export default AssignFees;
