import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Book, Users, UserCheck, CreditCard, 
  HardHat, AlertCircle, Mail, Plus, Search, ChevronRight,
  TrendingUp, Activity, User, Globe, FileText, FileSpreadsheet,
  FileIcon, Copy, Settings2, Eye, Edit, Trash2, Layers
} from 'lucide-react';

const AdmissionEnquiries = () => {
  const navigate = useNavigate();

  const subNav = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/front-office/dashboard' },
    { name: 'Guide', icon: Book, path: '#' },
    { name: 'Admission Enquiries', icon: Users, path: '/front-office/admission-enquiries', active: true },
    { name: 'Visitor Book', icon: UserCheck, path: '/front-office/visitor-book' },
    { name: 'Gate Passes', icon: CreditCard, path: '/front-office/gate-passes' },
    { name: 'Campus Workers', icon: HardHat, path: '/front-office/campus-workers' },
    { name: 'Complaints', icon: AlertCircle, path: '/front-office/complaints' },
    { name: 'Postal Records', icon: Mail, path: '/front-office/postal-records' },
  ];

  const [enquiries, setEnquiries] = useState([
    { id: 1, name: 'stgunwrmki', parentName: 'stgunwrnki', phone: '+1-927-460-2825', date: '11 Aug, 2026', nextFollowUp: '-', paymentInfo: 'N/A', status: 'Followed-up', statusColor: 'bg-[#17a2b8]' },
    { id: 2, name: 'sxwwonoooj', parentName: 'sxwwonoooj', phone: '+1-170-586-7156', date: '11 Aug, 2026', nextFollowUp: '-', paymentInfo: 'N/A', status: 'Pending', statusColor: 'bg-[#ffc107] text-gray-800' },
    { id: 3, name: 'him', parentName: 'ramesh', phone: '121212121212', date: '10 Aug, 2026', nextFollowUp: '-', paymentInfo: 'N/A', status: 'Followed-up', statusColor: 'bg-[#17a2b8]' },
    { id: 4, name: 'Joan', parentName: 'Jones', phone: '231880055231', date: '06 Aug, 2026', nextFollowUp: '-', paymentInfo: 'N/A', status: 'Lost', statusColor: 'bg-[#dc3545]' },
    { id: 5, name: 'ytt', parentName: 'ttt', phone: '6263056779', date: '05 May, 2026', nextFollowUp: '14 May, 2026', paymentInfo: 'N/A', status: 'Followed-up', statusColor: 'bg-[#17a2b8]' },
  ]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this enquiry?')) {
      setEnquiries(enquiries.filter(e => e.id !== id));
    }
  };

  const handleEdit = (id) => {
    alert(`Editing enquiry ID: ${id}`);
  };

  return (
    <div className="flex flex-col h-full bg-[#f4f6f8] overflow-y-auto">
      
      {/* Header */}
      <div className="px-8 pt-6 pb-2 bg-white">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-[#1a1a2e]">Front Office Management</h1>
            <p className="text-[13px] text-gray-500 mt-1">Digitize reception activities, manage admission enquiries, and track visitor logs.</p>
          </div>
          <button 
            onClick={() => navigate('/front-office/admission-enquiries/add')}
            className="bg-[#5F52FF] text-white px-4 py-2 rounded-md text-[13px] font-bold hover:bg-[#4E41E6] shadow-sm flex items-center gap-2"
          >
            <Plus className="w-4 h-4" /> Add New Enquiry
          </button>
        </div>
        
        {/* Sub Nav */}
        <div className="flex items-center gap-6 mt-6 overflow-x-auto border-b border-gray-200 pb-px">
          {subNav.map((item, index) => {
            const Icon = item.icon;
            return (
              <button 
                key={index}
                onClick={() => item.path !== '#' && navigate(item.path)}
                className={`flex items-center gap-2 pb-3 text-[12px] font-bold whitespace-nowrap border-b-2 transition-colors ${
                  item.active 
                    ? 'border-[#5F52FF] text-[#5F52FF]' 
                    : 'border-transparent text-gray-500 hover:text-gray-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" /> {item.name}
              </button>
            )
          })}
        </div>
      </div>

      <div className="p-8 w-full">
        
        <div className="flex justify-end mb-4">
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-[13px] font-bold hover:bg-gray-50 shadow-sm flex items-center gap-2">
            <Layers className="w-4 h-4" /> View all sessions
          </button>
        </div>

        {/* Enquiries Table Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          
          <div className="p-4 border-b border-gray-200 bg-[#F8F7FF]">
            <h2 className="text-[14px] font-bold text-[#5F52FF] flex items-center gap-2">
              <Users className="w-4 h-4" /> All Enquiries — this session
            </h2>
          </div>

          <div className="p-4 border-b border-gray-100 flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-[12px] text-gray-600">
                Show 
                <select className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-[#5F52FF]">
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <button className="border border-gray-300 bg-white text-gray-600 px-3 py-1.5 rounded hover:bg-gray-50 text-[12px] font-bold flex items-center gap-1.5 shadow-sm" title="Copy">
                  <Copy className="w-3.5 h-3.5" />
                </button>
                <button className="border border-gray-300 bg-white text-gray-600 px-3 py-1.5 rounded hover:bg-gray-50 text-[12px] font-bold flex items-center gap-1.5 shadow-sm">
                  CSV
                </button>
                <button className="border border-gray-300 bg-white text-gray-600 px-3 py-1.5 rounded hover:bg-gray-50 text-[12px] font-bold flex items-center gap-1.5 shadow-sm">
                  Excel
                </button>
                <button className="border border-gray-300 bg-white text-gray-600 px-3 py-1.5 rounded hover:bg-gray-50 text-[12px] font-bold flex items-center gap-1.5 shadow-sm">
                  PDF
                </button>
                <button className="border border-gray-300 bg-white text-gray-600 px-3 py-1.5 rounded hover:bg-gray-50 text-[12px] font-bold flex items-center gap-1.5 shadow-sm">
                  <FileIcon className="w-3.5 h-3.5" />
                </button>
                <button className="border border-gray-300 bg-white text-gray-600 px-3 py-1.5 rounded hover:bg-gray-50 text-[12px] font-bold flex items-center gap-1.5 shadow-sm">
                  <Settings2 className="w-3.5 h-3.5" /> Columns
                </button>
              </div>
            </div>

            <div className="relative max-w-sm w-full md:w-auto">
              <input 
                type="text" 
                placeholder="Search enquiries..." 
                className="w-full md:w-64 border border-gray-300 rounded-md pl-3 pr-4 py-1.5 text-[13px] focus:outline-none focus:border-[#5F52FF]"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[1000px]">
              <thead>
                <tr className="bg-[#f8f9fa] border-b border-gray-200 text-[#5F52FF]">
                  <th className="py-3 px-4 text-[11px] font-bold uppercase tracking-wider text-center w-12 border-r border-gray-100">#</th>
                  <th className="py-3 px-4 text-[11px] font-bold uppercase tracking-wider border-r border-gray-100">STUDENT NAME</th>
                  <th className="py-3 px-4 text-[11px] font-bold uppercase tracking-wider border-r border-gray-100">PARENT NAME</th>
                  <th className="py-3 px-4 text-[11px] font-bold uppercase tracking-wider border-r border-gray-100">PHONE</th>
                  <th className="py-3 px-4 text-[11px] font-bold uppercase tracking-wider border-r border-gray-100">ENQUIRY DATE</th>
                  <th className="py-3 px-4 text-[11px] font-bold uppercase tracking-wider border-r border-gray-100">FOLLOW-UP</th>
                  <th className="py-3 px-4 text-[11px] font-bold uppercase tracking-wider text-center border-r border-gray-100">PAYMENT INFO</th>
                  <th className="py-3 px-4 text-[11px] font-bold uppercase tracking-wider text-center border-r border-gray-100">STATUS</th>
                  <th className="py-3 px-4 text-[11px] font-bold uppercase tracking-wider text-center">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {enquiries.map((enq, index) => (
                  <tr key={enq.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 text-[13px] text-gray-500 text-center border-r border-gray-100">{index + 1}</td>
                    <td className="py-4 px-4 text-[13px] font-medium text-gray-800 border-r border-gray-100">{enq.name}</td>
                    <td className="py-4 px-4 text-[13px] text-gray-600 border-r border-gray-100">{enq.parentName}</td>
                    <td className="py-4 px-4 text-[13px] text-gray-600 border-r border-gray-100">{enq.phone}</td>
                    <td className="py-4 px-4 text-[13px] text-gray-600 border-r border-gray-100">{enq.date}</td>
                    <td className="py-4 px-4 text-[13px] text-gray-600 border-r border-gray-100">{enq.nextFollowUp}</td>
                    <td className="py-4 px-4 text-center border-r border-gray-100">
                      <span className="bg-gray-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">
                        {enq.paymentInfo}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center border-r border-gray-100">
                      <span className={`${enq.statusColor} text-white text-[11px] font-bold px-2 py-1 rounded shadow-sm`}>
                        {enq.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex justify-center items-center gap-1.5">
                        <button 
                          onClick={() => navigate(`/front-office/admission-enquiries/view/${enq.id}`)}
                          className="bg-[#17a2b8] hover:bg-[#138496] text-white p-1.5 rounded shadow-sm transition-colors" title="View Details"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        <button 
                          onClick={() => handleEdit(enq.id)}
                          className="bg-[#fd7e14] hover:bg-[#e86f0b] text-white p-1.5 rounded shadow-sm transition-colors" title="Edit"
                        >
                          <Edit className="w-3.5 h-3.5" />
                        </button>
                        <button 
                          onClick={() => handleDelete(enq.id)}
                          className="bg-[#dc3545] hover:bg-[#c82333] text-white p-1.5 rounded shadow-sm transition-colors" title="Delete"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 border-t border-gray-100 flex items-center justify-between bg-[#F8F7FF]">
            <span className="text-[12px] text-gray-500 font-medium">Showing 1-5 of 5</span>
            <div className="flex items-center gap-2">
              <button className="w-6 h-6 flex items-center justify-center text-gray-400 cursor-not-allowed">
                <ChevronRight className="w-4 h-4 rotate-180" />
              </button>
              <button className="w-7 h-7 flex items-center justify-center bg-[#5F52FF] text-white rounded text-[12px] font-bold shadow-sm">1</button>
              <button className="w-6 h-6 flex items-center justify-center text-gray-400 cursor-not-allowed">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AdmissionEnquiries;
