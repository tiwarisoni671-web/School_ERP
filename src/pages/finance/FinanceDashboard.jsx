import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
  BarChart, Bar, Legend
} from 'recharts';
import { 
  Download, Zap, Info, ChevronRight, FileText, CheckCircle, AlertTriangle, 
  ArrowUpRight, IndianRupee, Clock, ListFilter, SlidersHorizontal, Users,
  Gauge, BookOpen, HandCoins, FileSearch, ArrowRightLeft, Globe, UserPlus, 
  WalletCards, LayoutGrid, Percent, Hash, Receipt
} from 'lucide-react';
import QuickSetupModal from '../../components/finance/QuickSetupModal';

const FinanceDashboard = () => {
  const navigate = useNavigate();
  const [isQuickSetupOpen, setIsQuickSetupOpen] = useState(false);

  // Dummy Data for charts
  const trendData = [
    { name: '05 Aug', amount: 80000 },
    { name: '07 Aug', amount: 300000 },
    { name: '09 Aug', amount: 150000 },
    { name: '11 Aug', amount: 200000 },
    { name: '13 Aug', amount: 180000 },
    { name: '15 Aug', amount: 600000 },
    { name: '17 Aug', amount: 220000 },
    { name: '19 Aug', amount: 300000 },
    { name: '21 Aug', amount: 800000 },
  ];

  const feeTypeData = [
    { name: 'Tution', value: 400, color: '#3b82f6' },
    { name: 'Transport', value: 300, color: '#10b981' },
    { name: 'Hostel', value: 300, color: '#f59e0b' },
    { name: 'Library', value: 200, color: '#ec4899' },
    { name: 'Exam', value: 278, color: '#8b5cf6' },
    { name: 'Misc', value: 189, color: '#06b6d4' },
    { name: 'Fine', value: 189, color: '#ef4444' },
  ];

  const paymentModeData = [
    { name: 'Cash', value: 30, color: '#10b981' },
    { name: 'Online - UPI/QR', value: 50, color: '#3b82f6' },
    { name: 'Online - Bank', value: 20, color: '#f59e0b' },
  ];

  const dueVsPaidData = [
    { name: 'Class I - A', due: 4000, paid: 2400 },
    { name: 'Class II - B', due: 3000, paid: 1398 },
    { name: 'Class III - C', due: 2000, paid: 9800 },
    { name: 'Class IV - D', due: 2780, paid: 3908 },
    { name: 'Class V - A', due: 1890, paid: 4800 },
    { name: 'Class VI - A', due: 2390, paid: 3800 },
    { name: 'Class VII - A', due: 3490, paid: 4300 },
  ];

  return (
    <div className="p-4 max-w-[1600px] mx-auto bg-gray-50 min-h-screen text-gray-800 pb-20">
      {/* Banner */}
      <div className="bg-[#009b9f] text-white p-2.5 rounded-lg text-xs flex items-center gap-2 mb-4">
        <Info className="w-4 h-4 flex-shrink-0" />
        <p>
          <strong>New: academic-session scoping.</strong> Lists and dashboard numbers now show the selected academic session only, so totals may look smaller than before — nothing was deleted.
        </p>
      </div>

      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Finance & Fees</h1>
          <p className="text-xs text-gray-500 mt-1">Manage fee types, groups, collection, challans, and reports across the school.</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setIsQuickSetupOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gray-700 bg-white border rounded-md shadow-sm hover:bg-gray-50"
          >
            <Zap className="w-3.5 h-3.5 text-yellow-500" />
            Quick Setup
          </button>
          <button onClick={() => navigate('/finance/collect')} className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700">
            <Download className="w-3.5 h-3.5" />
            Collect Fees
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-gray-200 overflow-x-auto pb-0.5 text-[13px] font-semibold text-[#5c6e81] mb-6 hide-scroll print:hidden">
        <style dangerouslySetInnerHTML={{__html: `.hide-scroll::-webkit-scrollbar { display: none; }`}} />
        <button className="text-[#15202b] border-b-[3px] border-[#15202b] pb-2 px-1 whitespace-nowrap flex items-center gap-1.5">
           <Gauge className="w-4 h-4" /> Dashboard
        </button>
        <button className="pb-2 px-1 whitespace-nowrap flex items-center gap-1.5 hover:text-blue-600 transition-colors">
           <BookOpen className="w-4 h-4" /> Guide
        </button>
        <Link to="/finance/collect" className="pb-2 px-1 whitespace-nowrap flex items-center gap-1.5 hover:text-blue-600 transition-colors">
           <HandCoins className="w-4 h-4" /> Collect Fees
        </Link>
        <Link to="/finance/search-due-fees" className="pb-2 px-1 whitespace-nowrap flex items-center gap-1.5 hover:text-blue-600 transition-colors">
           <FileSearch className="w-4 h-4" /> Search Due Fees
        </Link>
        <Link to="/finance/transactions" className="pb-2 px-1 whitespace-nowrap flex items-center gap-1.5 hover:text-blue-600 transition-colors">
           <ArrowRightLeft className="w-4 h-4" /> All Transactions
        </Link>
        <Link to="/finance/online-transactions" className="pb-2 px-1 whitespace-nowrap flex items-center gap-1.5 hover:text-blue-600 transition-colors">
           <Globe className="w-4 h-4" /> Online Transactions
        </Link>
        <Link to="/finance/challans" className="pb-2 px-1 whitespace-nowrap flex items-center gap-1.5 hover:text-blue-600 transition-colors">
           <FileText className="w-4 h-4" /> Fee Challans
        </Link>
        <button className="pb-2 px-1 whitespace-nowrap flex items-center gap-1.5 hover:text-blue-600 transition-colors">
           <UserPlus className="w-4 h-4" /> Assign Fees
        </button>
        <button className="pb-2 px-1 whitespace-nowrap flex items-center gap-1.5 hover:text-blue-600 transition-colors">
           <WalletCards className="w-4 h-4" /> Fees Carry Forward
        </button>
        <button className="pb-2 px-1 whitespace-nowrap flex items-center gap-1.5 hover:text-blue-600 transition-colors">
           <LayoutGrid className="w-4 h-4" /> Fee Groups
        </button>
        <button className="pb-2 px-1 whitespace-nowrap flex items-center gap-1.5 hover:text-blue-600 transition-colors">
           <Percent className="w-4 h-4" /> Fees Discount
        </button>
        <button className="pb-2 px-1 whitespace-nowrap flex items-center gap-1.5 hover:text-blue-600 transition-colors">
           <Hash className="w-4 h-4" /> Fee Types
        </button>
        <button className="pb-2 px-1 whitespace-nowrap flex items-center gap-1.5 hover:text-blue-600 transition-colors">
           <Receipt className="w-4 h-4" /> Generate Due Slip
        </button>
        <button className="pb-2 px-1 whitespace-nowrap flex items-center gap-1.5 hover:text-blue-600 transition-colors">
           <Clock className="w-4 h-4" /> Due Slip History
        </button>
      </div>

      {/* Top Stats Cards */}
      <div className="grid grid-cols-6 gap-3 mb-4">
        {[
          { label: 'TOTAL ASSIGNED', value: '₹11,106,983', sub: '354 fees assigned', iconColor: 'text-blue-500', borderColor: 'border-blue-200' },
          { label: 'TOTAL COLLECTED', value: '₹1,578,643', sub: '₹2,34,545 online (15%)', iconColor: 'text-green-500', borderColor: 'border-green-200' },
          { label: 'CONCESSION', value: '₹306,690', sub: 'Total discounts granted', iconColor: 'text-orange-400', borderColor: 'border-orange-200' },
          { label: 'TOTAL FINE', value: '₹13,500', sub: 'Total fine collected', iconColor: 'text-orange-500', borderColor: 'border-orange-300' },
          { label: 'TOTAL DUE (ALL YEARS)', value: '₹9,322,650', sub: '275 students with dues', iconColor: 'text-red-500', borderColor: 'border-red-200' },
          { label: 'COLLECTED TODAY', value: '₹129,000', sub: '21 Aug 2026', iconColor: 'text-purple-500', borderColor: 'border-purple-200' },
        ].map((stat, i) => (
          <div key={i} className={`bg-white rounded-lg p-3 border-l-4 ${stat.borderColor} shadow-sm border border-y-gray-100 border-r-gray-100 flex flex-col justify-center`}>
             <h4 className="text-[9px] font-bold text-gray-400 uppercase tracking-wide mb-1">{stat.label}</h4>
             <div className="flex items-center gap-1.5">
               <span className={`text-[10px] ${stat.iconColor}`}>■</span>
               <span className="text-base font-bold text-gray-800">{stat.value}</span>
             </div>
             <p className="text-[9px] text-gray-500 mt-1">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Info Notice */}
      <div className="bg-indigo-50/50 border border-indigo-100 text-indigo-800 p-3 rounded-lg text-xs flex items-start gap-2 mb-4">
        <Info className="w-4 h-4 text-indigo-600 mt-0.5" />
        <div>
          <p><strong>These cards cover the whole school, across all academic years</strong> — every fee ever assigned, including students who have already paid in full.</p>
          <a href="#" className="text-indigo-600 hover:underline">Why does Total Due look smaller than before?</a>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm mb-4 flex items-center justify-between">
        <div className="flex-1 mr-8">
           <h3 className="text-xs font-bold text-gray-800 flex items-center gap-1.5 mb-1">
             <CheckCircle className="w-4 h-4 text-blue-500" /> Overall Collection Progress
           </h3>
           <p className="text-[10px] text-gray-500 mb-2">Percentage of net payable fees (after concessions) successfully collected.</p>
           <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
             <div className="h-full bg-yellow-400 rounded-full" style={{width: '14.5%'}}></div>
           </div>
        </div>
        <div className="text-xl font-bold text-yellow-500">14.5%</div>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-12 gap-4 mb-4">
        {/* Trend Chart */}
        <div className="col-span-6 bg-white rounded-lg p-4 border border-gray-100 shadow-sm h-64">
           <h3 className="text-xs font-bold text-gray-800 mb-4 flex items-center gap-1.5">
             <SlidersHorizontal className="w-4 h-4 text-gray-400" /> Collection Trend (Last 15 Days)
           </h3>
           <ResponsiveContainer width="100%" height="80%">
            <AreaChart data={trendData}>
              <defs>
                <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#818cf8" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#818cf8" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
              <XAxis dataKey="name" tick={{fontSize: 9, fill: '#9ca3af'}} axisLine={false} tickLine={false} />
              <YAxis tick={{fontSize: 9, fill: '#9ca3af'}} axisLine={false} tickLine={false} tickFormatter={(val) => `₹${val/1000}k`} />
              <RechartsTooltip contentStyle={{fontSize: '11px', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
              <Area type="monotone" dataKey="amount" stroke="#6366f1" strokeWidth={2} fillOpacity={1} fill="url(#colorAmount)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* By Fee Type */}
        <div className="col-span-3 bg-white rounded-lg p-4 border border-gray-100 shadow-sm h-64 flex flex-col">
           <h3 className="text-xs font-bold text-gray-800 flex items-center gap-1.5">
             <ListFilter className="w-4 h-4 text-orange-400" /> By Fee Type (Month)
           </h3>
           <div className="flex-1 mt-4">
             <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={feeTypeData} innerRadius={40} outerRadius={60} paddingAngle={2} dataKey="value">
                    {feeTypeData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                  </Pie>
                </PieChart>
             </ResponsiveContainer>
           </div>
        </div>

        {/* By Payment Mode */}
        <div className="col-span-3 bg-white rounded-lg p-4 border border-gray-100 shadow-sm h-64 flex flex-col">
           <h3 className="text-xs font-bold text-gray-800 flex items-center gap-1.5">
             <ArrowUpRight className="w-4 h-4 text-blue-500" /> By Payment Mode
           </h3>
           <div className="flex-1 mt-4">
             <ResponsiveContainer width="100%" height="80%">
                <PieChart>
                  <Pie data={paymentModeData} innerRadius={45} outerRadius={60} paddingAngle={0} dataKey="value">
                    {paymentModeData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                  </Pie>
                </PieChart>
             </ResponsiveContainer>
             <div className="flex flex-wrap justify-center gap-2 mt-2">
                <span className="flex items-center gap-1 text-[9px] text-gray-500"><div className="w-1.5 h-1.5 bg-green-500 rounded-sm"></div> Cash</span>
                <span className="flex items-center gap-1 text-[9px] text-gray-500"><div className="w-1.5 h-1.5 bg-blue-500 rounded-sm"></div> Online/UPI</span>
             </div>
           </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-2 gap-4 mb-4">
         {/* Top Defaulters */}
         <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm h-72 flex flex-col">
            <h3 className="text-xs font-bold text-gray-800 mb-3 flex items-center gap-1.5">
             <AlertTriangle className="w-4 h-4 text-red-500" /> Top Defaulters
            </h3>
            <div className="flex-1 overflow-auto hide-scroll">
               <table className="w-full text-left text-[10px]">
                 <thead className="text-gray-400 border-b border-gray-100 uppercase sticky top-0 bg-white">
                   <tr>
                     <th className="font-semibold py-2">Student Name</th>
                     <th className="font-semibold py-2">Adm. No</th>
                     <th className="font-semibold py-2">Class</th>
                     <th className="font-semibold py-2 text-right">Total Due</th>
                     <th className="font-semibold py-2 text-center">Action</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-gray-50 text-gray-600">
                   {[
                     {name: 'Zain Khan', adm: 'YUGADM - 205', class: 'Class I - A', due: '₹104,500.00'},
                     {name: 'Sneha Bhatia', adm: 'YUGADM - 180', class: 'Class II - A', due: '₹104,220.00'},
                     {name: 'Rudra Chauhan', adm: 'YUGADM - 285', class: 'Class I - A', due: '₹103,000.00'},
                     {name: 'Rohan Pandey', adm: 'YUGADM - 212', class: 'Class I - A', due: '₹102,200.00'},
                     {name: 'Ali Bansal', adm: 'YUGADM - 237', class: 'Class I - A', due: '₹102,200.00'},
                     {name: 'Sai Pillai', adm: 'YUGADM - 247', class: 'Class I - A', due: '₹102,000.00'},
                   ].map((s, i) => (
                     <tr key={i} className="hover:bg-gray-50/50">
                       <td className="py-2.5 font-medium text-gray-800">{s.name}</td>
                       <td className="py-2.5">{s.adm}</td>
                       <td className="py-2.5">{s.class}</td>
                       <td className="py-2.5 text-right font-semibold text-red-500">{s.due}</td>
                       <td className="py-2.5 flex justify-center">
                         <button className="text-blue-500 hover:bg-blue-50 p-1 rounded"><FileText className="w-3.5 h-3.5" /></button>
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
            </div>
         </div>

         {/* Due vs Paid by Class */}
         <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm h-72 flex flex-col">
            <h3 className="text-xs font-bold text-gray-800 mb-3 flex items-center gap-1.5">
             <IndianRupee className="w-4 h-4 text-blue-500" /> Due vs Paid by Class
            </h3>
            <div className="flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart layout="vertical" data={dueVsPaidData} margin={{top: 0, right: 10, left: -20, bottom: 0}}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f3f4f6" />
                  <XAxis type="number" tick={{fontSize: 9, fill: '#9ca3af'}} axisLine={false} tickLine={false} />
                  <YAxis type="category" dataKey="name" tick={{fontSize: 9, fill: '#6b7280'}} axisLine={false} tickLine={false} />
                  <RechartsTooltip cursor={{fill: '#f9fafb'}} contentStyle={{fontSize: '11px', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                  <Bar dataKey="paid" fill="#10b981" radius={[0, 2, 2, 0]} barSize={6} name="Paid" />
                  <Bar dataKey="due" fill="#ef4444" radius={[0, 2, 2, 0]} barSize={6} name="Due" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-4 mt-2">
               <span className="flex items-center gap-1 text-[10px] text-gray-500 font-medium"><div className="w-2 h-2 bg-green-500 rounded-sm"></div> Paid</span>
               <span className="flex items-center gap-1 text-[10px] text-gray-500 font-medium"><div className="w-2 h-2 bg-red-500 rounded-sm"></div> Due</span>
            </div>
         </div>
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-4 gap-4">
        {/* Recent */}
        <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm h-60 overflow-hidden flex flex-col">
           <h3 className="text-xs font-bold text-gray-800 mb-3 flex items-center gap-1.5">
             <Clock className="w-4 h-4 text-gray-400" /> Recent
           </h3>
           <div className="flex-1 overflow-y-auto hide-scroll space-y-3">
             {[
               {name: 'Vidhi Rao', type: 'Cash - ₹10,000.00', icon: 'bg-green-100 text-green-600'},
               {name: 'Chirag Desai', type: 'Cash - ₹10,000.00', icon: 'bg-blue-100 text-blue-600'},
               {name: 'Radhika Thakur', type: 'Cash - ₹5,000.00', icon: 'bg-purple-100 text-purple-600'},
               {name: 'Ali Raza', type: 'Cash - ₹4,000.00', icon: 'bg-orange-100 text-orange-600'},
             ].map((r, i) => (
               <div key={i} className="flex items-center gap-3">
                 <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-[10px] ${r.icon}`}>{r.name.charAt(0)}</div>
                 <div>
                   <p className="text-[11px] font-bold text-gray-800">{r.name}</p>
                   <p className="text-[9px] text-gray-500">{r.type}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>

        {/* Upcoming */}
        <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm h-60 flex flex-col">
           <h3 className="text-xs font-bold text-gray-800 mb-3 flex items-center gap-1.5">
             <div className="w-2 h-2 bg-green-500 rounded-sm"></div> Upcoming
           </h3>
           <div className="flex-1 flex items-center justify-center">
             <p className="text-xs text-gray-400 font-medium">No upcoming dues in the next 14 days.</p>
           </div>
        </div>

        {/* Today's Cashier */}
        <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm h-60">
           <h3 className="text-xs font-bold text-gray-800 mb-4 flex items-center gap-1.5">
             <Users className="w-4 h-4 text-blue-500" /> Today's Cashier
           </h3>
           <div className="flex justify-between items-center mb-2">
             <p className="text-xs text-gray-600 font-medium">school admin</p>
             <p className="text-xs font-bold text-green-600">₹129,000.00</p>
           </div>
           <div className="flex items-center gap-1 text-[10px] text-gray-500 bg-gray-50 p-2 rounded border border-gray-100">
             <FileText className="w-3 h-3" /> 2 Receipts Processed
           </div>
        </div>

        {/* Operations */}
        <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm h-60">
           <h3 className="text-xs font-bold text-gray-800 mb-4 flex items-center gap-1.5">
             <SlidersHorizontal className="w-4 h-4 text-gray-500" /> Operations
           </h3>
           <div className="space-y-3">
             <div className="flex justify-between items-center text-xs">
               <span className="flex items-center gap-2 text-gray-600"><div className="w-4 h-4 bg-orange-100 text-orange-500 rounded flex items-center justify-center text-[10px] font-bold">G</div> Fee Groups</span>
               <span className="font-bold text-gray-800">18</span>
             </div>
             <div className="flex justify-between items-center text-xs">
               <span className="flex items-center gap-2 text-gray-600"><div className="w-4 h-4 bg-blue-100 text-blue-500 rounded flex items-center justify-center text-[10px] font-bold">T</div> Fee Types</span>
               <span className="font-bold text-gray-800">50</span>
             </div>
             <div className="flex justify-between items-center text-xs">
               <span className="flex items-center gap-2 text-gray-600"><div className="w-4 h-4 bg-green-100 text-green-500 rounded flex items-center justify-center text-[10px] font-bold">%</div> Discounts</span>
               <span className="font-bold text-gray-800">2</span>
             </div>
             <div className="flex justify-between items-center text-xs mt-4 pt-3 border-t border-gray-100">
               <span className="flex items-center gap-2 text-orange-500 font-medium"><div className="w-2 h-2 bg-orange-500 rounded-full"></div> Pending Online</span>
               <span className="font-bold text-gray-800">0</span>
             </div>
           </div>
        </div>
      </div>
      
      <QuickSetupModal isOpen={isQuickSetupOpen} onClose={() => setIsQuickSetupOpen(false)} />
    </div>
  );
};

export default FinanceDashboard;
