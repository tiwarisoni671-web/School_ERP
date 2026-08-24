import React, { useState } from 'react';
import { 
  LayoutDashboard, HelpCircle, Users, CalendarCheck, CheckCircle, List, Send, 
  IndianRupee, FileText, Calculator, CreditCard, Star, RefreshCw, CheckSquare, 
  Building, Briefcase, IdCard, Settings, MoreVertical, ChevronDown, 
  Eye, Zap, Calendar, Download, Printer, Edit2, X, Plus
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { exportToCSV, exportToExcel, exportToPDF, printTable } from '../../utils/exportUtils';

export default function HRPayroll() {
  const navigate = useNavigate();

  const tabs = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/hr/dashboard' },
    { name: 'Guide', icon: HelpCircle, path: '/hr/guide' },
    { name: 'Staff Directory', icon: Users, path: '/hr/staff' },
    { name: 'Attendance', icon: CalendarCheck, path: '/hr/attendance' },
    { name: 'Approve Leave', icon: CheckCircle, path: '/hr/approve-leave' },
    { name: 'Leave Types', icon: List, path: '/hr/leave-types' },
    { name: 'Apply Leave', icon: Send, path: '/hr/apply-leave' },
    { name: 'Set Salary', icon: IndianRupee, path: '/hr/set-salary' },
    { name: 'Salary Templates', icon: FileText, path: '/hr/salary-templates' },
    { name: 'Payroll', icon: Calculator, path: '/hr/payroll', active: true },
    { name: 'Loans', icon: CreditCard, path: '/hr/loans' },
    { name: 'Appraisals', icon: Star, path: '/hr/appraisals' },
    { name: 'Appraisal Cycles', icon: RefreshCw, path: '/hr/appraisal-cycles' },
    { name: 'Criteria', icon: CheckSquare, path: '/hr/criteria' },
    { name: 'Departments', icon: Building, path: '/hr/departments' },
    { name: 'Designations', icon: Briefcase, path: '/hr/designations' },
    { name: 'ID Cards', icon: IdCard, path: '/hr/id-cards' },
    { name: 'Settings', icon: Settings, path: '/hr/settings' },
  ];

  const [currentView, setCurrentView] = useState('list'); // 'list', 'summary', 'edit', 'payslip'
  const [selectedMonth, setSelectedMonth] = useState('May 2026');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [generateMonth, setGenerateMonth] = useState('July');
  const [generateYear, setGenerateYear] = useState('2026');

  const [payrolls, setPayrolls] = useState([
    { id: 1, month: 'May 2026', status: 'Generated', date: '23 Aug, 2026' },
    { id: 2, month: 'August 2026', status: 'Generated', date: '20 Aug, 2026' },
    { id: 3, month: 'June 2026', status: 'Generated', date: '07 Aug, 2026' },
    { id: 4, month: 'July 2026', status: 'Generated', date: '05 Aug, 2026' },
    { id: 5, month: 'February 2026', status: 'Generated', date: '19 May, 2026' },
    { id: 6, month: 'January 2026', status: 'Generated', date: '26 Feb, 2026' },
  ]);

  const handleGeneratePayroll = () => {
    const newPayroll = {
      id: Date.now(),
      month: `${generateMonth} ${generateYear}`,
      status: 'Generated',
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
    };
    setPayrolls([newPayroll, ...payrolls]);
    alert(`Payroll for ${generateMonth} ${generateYear} generated successfully!`);
  };

  const summaryData = [
    { id: 1, name: 'Amit Sharma', gross: '0.00', days: '0.00 / 26', attDeduction: '35,000.00', statDeductions: 'PF: 504.00', otherDeductions: '1,816.67', net: '0.00', status: 'Paid' },
    { id: 2, name: 'Rajesh Kumar', gross: '0.00', days: '0.00 / 26', attDeduction: '35,000.00', statDeductions: 'PF: 504.00', otherDeductions: '1,191.67', net: '0.00', status: 'Unpaid' },
    { id: 3, name: 'Vikram Singh', gross: '0.00', days: '0.00 / 26', attDeduction: '25,000.00', statDeductions: 'PF: 360.00', otherDeductions: '100.00', net: '0.00', status: 'Unpaid' },
    { id: 4, name: 'Sneha Desai', gross: '0.00', days: '0.00 / 26', attDeduction: '67,000.00', statDeductions: '', otherDeductions: '5,000.00', net: '0.00', status: 'Unpaid' },
  ];

  const renderListView = () => (
    <div className="flex flex-col lg:flex-row gap-6 items-start">
      <div className="flex-1 bg-white border border-slate-200 rounded-lg shadow-sm w-full">
        <div className="px-5 py-4 border-b border-slate-200 flex items-center gap-2">
          <FileText className="w-4 h-4 text-[#5F52FF]" />
          <h2 className="text-[14px] font-bold text-slate-800">Generated Payroll List</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/50 text-[11px] font-bold text-[#5F52FF] uppercase tracking-wider">
                <th className="px-5 py-3 w-12">#</th>
                <th className="px-5 py-3">Month & Year</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Generated On</th>
                <th className="px-5 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="text-[13px] text-slate-700">
              {payrolls.map((pr) => (
                <tr key={pr.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-4">{pr.id}</td>
                  <td className="px-5 py-4 font-semibold">{pr.month}</td>
                  <td className="px-5 py-4">
                    <span className="inline-block px-2 py-1 bg-orange-50 text-orange-600 border border-orange-200 rounded text-[11px] font-bold">
                      {pr.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">{pr.date}</td>
                  <td className="px-5 py-4">
                    <button 
                      onClick={() => {
                        setSelectedMonth(pr.month);
                        setCurrentView('summary');
                      }}
                      className="px-4 py-1.5 bg-white border border-slate-300 rounded hover:bg-slate-50 text-[12px] font-bold text-slate-700 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" /> View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="w-full lg:w-[350px] shrink-0 bg-white border border-slate-200 rounded-lg shadow-sm">
        <div className="px-5 py-4 border-b border-slate-200 flex items-center gap-2">
          <Zap className="w-4 h-4 text-[#5F52FF]" />
          <h2 className="text-[14px] font-bold text-slate-800">Generate New Payroll</h2>
        </div>
        <div className="p-5 space-y-4">
          <div>
            <label className="block text-[12px] font-bold text-slate-700 mb-1.5">Month</label>
            <select 
              value={generateMonth}
              onChange={(e) => setGenerateMonth(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded text-[13px] text-slate-700 focus:outline-none focus:border-[#5F52FF]"
            >
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </div>
          <div>
            <label className="block text-[12px] font-bold text-slate-700 mb-1.5">Year</label>
            <input 
              type="text" 
              value={generateYear}
              onChange={(e) => setGenerateYear(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded text-[13px] text-slate-700 focus:outline-none focus:border-[#5F52FF]" 
            />
          </div>
          
          <div className="bg-slate-50 border border-slate-200 rounded-md p-4">
            <h4 className="text-[12px] font-bold text-slate-800 flex items-center gap-1.5 mb-2">
              <Calendar className="w-3.5 h-3.5" /> Working Days
            </h4>
            <p className="text-[12px] text-slate-600 mb-2">
              31 days in month - 4 weekly offs - 0 holidays = <span className="font-bold text-slate-800">27 working days</span>
            </p>
            <div className="flex gap-1.5 items-start text-slate-500 text-[11px] bg-white border border-slate-200 rounded p-2">
              <HelpCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
              <span>No staff holidays this month. If you expected one, check it was added as a Holiday and not an Event.</span>
            </div>
          </div>
        </div>
        <div className="px-5 py-4 border-t border-slate-200">
          <button 
            onClick={handleGeneratePayroll}
            className="w-full py-2 bg-[#5F52FF] hover:bg-[#4f42e6] text-white font-bold text-[13px] rounded flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer border-none"
          >
            <Zap className="w-4 h-4 fill-white" /> Generate Payroll
          </button>
        </div>
      </div>
    </div>
  );

  const renderSummaryView = () => (
    <div className="bg-white border border-slate-200 rounded-lg shadow-sm">
      <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
        <h2 className="text-[18px] font-bold text-slate-800">Payroll for {selectedMonth}</h2>
        <button 
          onClick={() => setCurrentView('list')}
          className="px-4 py-2 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-[12px] rounded transition-colors cursor-pointer"
        >
          Back to Payroll List
        </button>
      </div>
      
      <div className="p-4 border-b border-slate-200 flex items-center gap-2">
        <FileText className="w-4 h-4 text-[#5F52FF]" />
        <h3 className="text-[14px] font-bold text-slate-800">Payroll Summary</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/50 text-[11px] font-bold text-[#5F52FF] uppercase tracking-wider">
              <th className="px-5 py-3">Staff Name</th>
              <th className="px-5 py-3">Gross Salary</th>
              <th className="px-5 py-3">Days Worked</th>
              <th className="px-5 py-3">Attendance Deduction</th>
              <th className="px-5 py-3">Statutory Deductions</th>
              <th className="px-5 py-3">Other Deductions</th>
              <th className="px-5 py-3">Net Salary</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="text-[13px] text-slate-700">
            {summaryData.map((staff) => (
              <tr key={staff.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="px-5 py-4 font-semibold">{staff.name}</td>
                <td className="px-5 py-4">{staff.gross}</td>
                <td className="px-5 py-4">{staff.days}</td>
                <td className="px-5 py-4 font-bold text-red-500">{staff.attDeduction}</td>
                <td className="px-5 py-4 text-slate-500">{staff.statDeductions}</td>
                <td className="px-5 py-4">{staff.otherDeductions}</td>
                <td className="px-5 py-4 font-bold text-slate-900">{staff.net}</td>
                <td className="px-5 py-4">
                  {staff.status === 'Paid' ? (
                    <span className="inline-block px-2 py-1 bg-green-50 text-green-600 border border-green-200 rounded text-[11px] font-bold">Paid</span>
                  ) : (
                    <span className="inline-block px-2 py-1 bg-orange-50 text-orange-600 border border-orange-200 rounded text-[11px] font-bold">Unpaid</span>
                  )}
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    {staff.status === 'Unpaid' && (
                      <>
                        <button onClick={() => setCurrentView('edit')} className="p-1.5 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors" title="Edit">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button onClick={() => setShowPaymentModal(true)} className="px-4 py-1.5 bg-[#5F52FF] hover:bg-[#4f42e6] text-white text-[12px] font-bold rounded transition-colors cursor-pointer border-none">
                          Pay
                        </button>
                      </>
                    )}
                    <button onClick={() => setCurrentView('payslip')} className="px-4 py-1.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-[12px] font-bold rounded transition-colors cursor-pointer">
                      View Payslip
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderEditView = () => (
    <div className="bg-white border border-slate-200 rounded-lg shadow-sm">
      <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
        <h2 className="text-[18px] font-bold text-slate-800">Edit Payroll for: {selectedMonth}</h2>
      </div>
      
      <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Col - Employee Info */}
        <div className="col-span-1 lg:col-span-2 space-y-6">
          <div className="flex gap-6 items-start">
            <div className="w-24 h-24 bg-slate-100 rounded-md flex items-center justify-center text-slate-400 border border-slate-200 text-[12px]">
              Staff Image
            </div>
            <div className="flex-1 text-[13px] text-slate-700 space-y-1">
              <div className="grid grid-cols-[100px_1fr]"><span className="font-bold">Name</span><span>: Rajesh Kumar</span></div>
              <div className="grid grid-cols-[100px_1fr]"><span className="font-bold">Staff ID</span><span>: STF-003</span></div>
              <div className="grid grid-cols-[100px_1fr]"><span className="font-bold">Phone</span><span>: 9876543212</span></div>
              <div className="grid grid-cols-[100px_1fr]"><span className="font-bold">Email</span><span>: rajesh.k@example.com</span></div>
              <div className="grid grid-cols-[100px_1fr]"><span className="font-bold">Department</span><span>: Finance</span></div>
              <div className="grid grid-cols-[100px_1fr]"><span className="font-bold">Designation</span><span>: Staff</span></div>
            </div>
            <div className="flex-1 bg-slate-50 border border-slate-200 rounded-md overflow-hidden">
              <div className="text-[10px] font-bold text-[#5F52FF] uppercase text-center py-2 border-b border-slate-200 bg-[#5F52FF]/5">
                Attendance Summary for May
              </div>
              <div className="grid grid-cols-6 text-center text-[10px] font-bold text-[#5F52FF] uppercase py-2 border-b border-slate-200">
                <div>Present</div>
                <div>Half Day</div>
                <div>Absent</div>
                <div>Late</div>
                <div>Holidays</div>
                <div>Payable / Working</div>
              </div>
              <div className="grid grid-cols-6 text-center text-[13px] text-slate-700 py-3 bg-white">
                <div>0</div>
                <div>0</div>
                <div>0</div>
                <div>0</div>
                <div>5</div>
                <div className="font-bold">0 / 26</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[14px] font-bold text-slate-800">Earnings</h3>
                <button className="w-6 h-6 flex items-center justify-center border border-slate-300 rounded hover:bg-slate-50 text-slate-500 cursor-pointer"><Plus className="w-3.5 h-3.5" /></button>
              </div>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <input type="text" value="DA" readOnly className="w-24 px-3 py-1.5 border border-slate-300 rounded text-[13px] bg-slate-50 text-slate-600 focus:outline-none" />
                  <input type="text" value="4200" className="flex-1 px-3 py-1.5 border border-slate-300 rounded text-[13px] bg-slate-50 text-right text-slate-700 focus:outline-none" />
                </div>
                <div className="flex gap-2">
                  <input type="text" value="TA" readOnly className="w-24 px-3 py-1.5 border border-slate-300 rounded text-[13px] bg-slate-50 text-slate-600 focus:outline-none" />
                  <input type="text" value="2000" className="flex-1 px-3 py-1.5 border border-slate-300 rounded text-[13px] bg-slate-50 text-right text-slate-700 focus:outline-none" />
                </div>
                <div className="flex gap-2">
                  <input type="text" value="HRA" readOnly className="w-24 px-3 py-1.5 border border-slate-300 rounded text-[13px] bg-slate-50 text-slate-600 focus:outline-none" />
                  <input type="text" value="7000" className="flex-1 px-3 py-1.5 border border-slate-300 rounded text-[13px] bg-slate-50 text-right text-slate-700 focus:outline-none" />
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[14px] font-bold text-slate-800">Deductions</h3>
                <button className="w-6 h-6 flex items-center justify-center border border-slate-300 rounded hover:bg-slate-50 text-slate-500 cursor-pointer"><Plus className="w-3.5 h-3.5" /></button>
              </div>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <input type="text" value="Welfare Fund" readOnly className="w-32 px-3 py-1.5 border border-slate-300 rounded text-[13px] bg-slate-50 text-slate-600 focus:outline-none" />
                  <input type="text" value="150" className="flex-1 px-3 py-1.5 border border-slate-300 rounded text-[13px] bg-slate-50 text-right text-slate-700 focus:outline-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Col - Payroll Summary Box */}
        <div className="col-span-1">
          <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
            <div className="px-4 py-3 border-b border-slate-200 flex items-center gap-2 bg-slate-50/50">
              <FileText className="w-4 h-4 text-[#5F52FF]" />
              <h3 className="text-[13px] font-bold text-slate-800">Payroll Summary</h3>
            </div>
            <div className="p-4 space-y-3 text-[13px] text-slate-700 border-b border-slate-200">
              <div className="flex justify-between"><span>Basic Salary</span><span className="font-bold">35,000.00</span></div>
              <div className="flex justify-between"><span>Total Earning</span><span className="font-bold">0.00</span></div>
              <div className="flex justify-between"><span>Total Deduction</span><span className="font-bold">1,695.67</span></div>
              <div className="flex justify-between font-bold text-slate-900 border-t border-slate-100 pt-2 mt-2">
                <span>Gross Salary</span><span>0.00</span>
              </div>
              <div className="flex justify-between text-red-500 font-bold">
                <span>Attendance Deduction</span><span>(-) 35,000.00</span>
              </div>
            </div>
            <div className="bg-[#5F52FF] text-white p-4 flex justify-between font-bold text-[14px]">
              <span>Net Salary</span><span>-1,695.67</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-4 border-t border-slate-200 flex justify-end gap-3 bg-slate-50">
        <button 
          onClick={() => setCurrentView('summary')}
          className="px-6 py-2 bg-white border border-slate-300 rounded text-slate-700 font-bold text-[13px] hover:bg-slate-50 transition-colors cursor-pointer"
        >
          Cancel
        </button>
        <button className="px-6 py-2 bg-[#5F52FF] hover:bg-[#4f42e6] text-white rounded font-bold text-[13px] transition-colors cursor-pointer border-none shadow-sm">
          Save Changes
        </button>
      </div>
    </div>
  );

  const renderPayslipView = () => (
    <div className="bg-white border border-slate-200 rounded-lg shadow-sm">
      <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
        <h2 className="text-[18px] font-bold text-slate-800">View Payslip</h2>
        <div className="flex items-center gap-3">
          <button onClick={() => setCurrentView('summary')} className="px-4 py-2 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-[12px] rounded transition-colors cursor-pointer">
            Back to Payroll List
          </button>
          <button className="px-4 py-2 bg-[#17a2b8] hover:bg-[#138496] text-white font-bold text-[12px] rounded flex items-center gap-2 transition-colors cursor-pointer border-none shadow-sm">
            <Download className="w-3.5 h-3.5" /> Download PDF
          </button>
          <button className="px-4 py-2 bg-[#fd7e14] hover:bg-[#e86e10] text-white font-bold text-[12px] rounded flex items-center gap-2 transition-colors cursor-pointer border-none shadow-sm">
            <Printer className="w-3.5 h-3.5" /> Print
          </button>
        </div>
      </div>

      <div className="p-8 bg-slate-50/50">
        <div className="max-w-[1000px] mx-auto bg-white border border-slate-300 shadow-sm">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-slate-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center shrink-0">
                {/* Logo Placeholder */}
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800 uppercase tracking-wide">YUG-SCHOOL</h1>
                <p className="text-[11px] text-slate-500">Lucknow</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">School Code/UDISE: YIS | Affiliated By: C.B.S.E</p>
              </div>
            </div>
            <div className="text-right">
              <h2 className="text-[20px] font-bold text-slate-700 tracking-wider">PAYSLIP</h2>
              <p className="text-[12px] text-slate-500 font-bold mt-1">May, 2026</p>
            </div>
          </div>

          {/* Details */}
          <div className="grid grid-cols-2 text-[12px] text-slate-700 border-b border-slate-300">
            <div className="p-6 space-y-2 border-r border-slate-300">
              <div className="grid grid-cols-[130px_1fr]"><span className="font-bold">Employee Name</span><span>: Amit Sharma</span></div>
              <div className="grid grid-cols-[130px_1fr]"><span className="font-bold">Designation</span><span>: Senior Teacher</span></div>
              <div className="grid grid-cols-[130px_1fr]"><span className="font-bold">Staff ID</span><span>: STF-001</span></div>
              <div className="grid grid-cols-[130px_1fr]"><span className="font-bold">Bank Name</span><span>: N/A</span></div>
              <div className="grid grid-cols-[130px_1fr]"><span className="font-bold">Bank Account #</span><span>: N/A</span></div>
              <div className="grid grid-cols-[130px_1fr]"><span className="font-bold">Payment Date</span><span>: 23 Aug, 2026</span></div>
              <div className="grid grid-cols-[130px_1fr] items-center">
                <span className="font-bold">Status</span>
                <span>: <span className="inline-block px-2 py-0.5 bg-green-500 text-white font-bold rounded">Paid</span></span>
              </div>
            </div>
            <div className="p-6 space-y-2">
              <div className="grid grid-cols-[130px_1fr]"><span className="font-bold">Calendar Days</span><span>: 31</span></div>
              <div className="grid grid-cols-[130px_1fr]"><span className="font-bold">Holidays</span><span>: 0</span></div>
              <div className="grid grid-cols-[130px_1fr]"><span className="font-bold">Weekly Offs</span><span>: 5</span></div>
              <div className="grid grid-cols-[130px_1fr]"><span className="font-bold">Working Days</span><span>: 26</span></div>
              <div className="grid grid-cols-[130px_1fr]"><span className="font-bold">Present Days</span><span>: 0.00</span></div>
              <div className="grid grid-cols-[130px_1fr]"><span className="font-bold">Absent Days</span><span>: 26</span></div>
            </div>
          </div>

          {/* Earnings & Deductions */}
          <div className="grid grid-cols-2 border-b border-slate-300">
            <div className="border-r border-slate-300">
              <div className="px-6 py-2 bg-slate-100/50 font-bold text-slate-700 text-[13px] border-b border-slate-300">Earnings</div>
              <div className="p-6 text-[12px] space-y-3">
                <div className="flex justify-between border-b border-dashed border-slate-200 pb-1">
                  <span className="font-bold text-slate-700">Basic Salary</span><span>35,000.00</span>
                </div>
                <div className="flex justify-between border-b border-dashed border-slate-200 pb-1">
                  <span className="font-bold text-slate-700">DA</span><span>4,200.00</span>
                </div>
                <div className="flex justify-between border-b border-dashed border-slate-200 pb-1">
                  <span className="font-bold text-slate-700">TA</span><span>2,000.00</span>
                </div>
                <div className="flex justify-between border-b border-dashed border-slate-200 pb-1">
                  <span className="font-bold text-slate-700">HRA</span><span>7,000.00</span>
                </div>
                <div className="flex justify-between border-b border-dashed border-slate-200 pb-1 text-red-500">
                  <span className="font-bold">Loss of Pay (26 days)</span><span>(-) 48,200.00</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-slate-800">Total Earnings (A)</span><span className="font-bold text-slate-800">0.00</span>
                </div>
              </div>
            </div>
            <div>
              <div className="px-6 py-2 bg-slate-100/50 font-bold text-slate-700 text-[13px] border-b border-slate-300">Deductions</div>
              <div className="p-6 text-[12px] space-y-3">
                <div className="flex justify-between border-b border-dashed border-slate-200 pb-1">
                  <span className="font-bold text-slate-700">WELFARE FUND</span><span>150.00</span>
                </div>
                <div className="flex justify-between border-b border-dashed border-slate-200 pb-1 text-red-500">
                  <span className="font-bold">PROVIDENT FUND (PF)</span><span>(-) 504.00</span>
                </div>
                <div className="flex justify-between border-b border-dashed border-slate-200 pb-1 text-red-500">
                  <span className="font-bold">LOAN EMI DEDUCTION</span><span>(-) 1,666.67</span>
                </div>
                <div className="flex justify-between border-b border-dashed border-slate-200 pb-1 text-red-500">
                  <span className="font-bold">Carried forward — earnings insufficient</span><span>(-) 2,320.67</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-slate-800">Total Deductions (B)</span><span className="font-bold text-slate-800">0.00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Net Salary Payable */}
          <div className="bg-[#28a745] text-white p-4 flex justify-between items-center">
            <div>
              <div className="text-[16px] font-bold">Net Salary Payable</div>
              <div className="text-[11px]">Amount in words: Zero</div>
            </div>
            <div className="text-[20px] font-bold">₹ 0.00</div>
          </div>

          {/* Footer */}
          <div className="p-6 flex justify-between items-end h-32">
            <div className="text-[9px] text-slate-400 border-t border-slate-200 pt-2 w-1/2">
              This is a computer-generated payslip and does not require a signature.
            </div>
            <div className="text-center w-48">
              <div className="border-b border-slate-400 mb-1 flex justify-center pb-2">
                {/* Signature scribble */}
                <svg width="60" height="20" viewBox="0 0 100 30" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10,20 Q30,5 50,20 T90,20" />
                  <path d="M40,25 Q45,10 60,15" />
                </svg>
              </div>
              <div className="text-[10px] text-slate-500">(Authorized Signatory)</div>
            </div>
          </div>

        </div>
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

      <div className="p-6 max-w-[1400px] mx-auto space-y-4">
        {currentView === 'list' && renderListView()}
        {currentView === 'summary' && renderSummaryView()}
        {currentView === 'edit' && renderEditView()}
        {currentView === 'payslip' && renderPayslipView()}
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-sm overflow-hidden">
            <div className="px-5 py-4 flex justify-between items-center border-b border-slate-200">
              <h2 className="text-[16px] font-bold text-slate-800">Proceed with Payment</h2>
              <button onClick={() => setShowPaymentModal(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5">
              <p className="text-[14px] text-slate-700 mb-4">Are you sure you want to mark this salary as paid?</p>
              <div>
                <label className="block text-[12px] font-bold text-slate-700 mb-1.5">Payment Date</label>
                <div className="relative">
                  <input type="date" defaultValue="2026-08-24" className="w-full px-3 py-2 border border-slate-300 rounded text-[13px] text-slate-700 focus:outline-none focus:border-[#5F52FF]" />
                </div>
              </div>
            </div>
            <div className="px-5 py-4 border-t border-slate-200 flex justify-end gap-3 bg-slate-50">
              <button onClick={() => setShowPaymentModal(false)} className="px-4 py-2 bg-white border border-slate-300 rounded text-slate-700 font-bold text-[13px] hover:bg-slate-50 transition-colors cursor-pointer">
                Cancel
              </button>
              <button onClick={() => setShowPaymentModal(false)} className="px-4 py-2 bg-[#5F52FF] hover:bg-[#4f42e6] text-white rounded font-bold text-[13px] transition-colors cursor-pointer border-none shadow-sm">
                Confirm Payment
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
