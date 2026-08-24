import React, { useState } from 'react';
import { 
  Search, LayoutDashboard, Layers, Plus, 
  SlidersHorizontal, Copy, BarChart2, Trash2, ArrowDown
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ManageOnlineExams() {
  const navigate = useNavigate();

  const [papers, setPapers] = useState([
    { id: 1, title: 'l', kind: 'QUIZ', class: 'Class III (A)', subject: 'Chemistry', start: '23 Aug, 2026 09:50 PM', duration: '30 mins', status: 'Upcoming', draft: true },
    { id: 2, title: 'hg', kind: 'EXAM', class: 'KG (A)', subject: 'English', start: '16 Aug, 2026 05:48 PM', duration: '30 mins', status: 'Completed', draft: true },
    { id: 3, title: 'aaaa', kind: 'QUIZ', class: 'Class VII (A)', subject: 'English', start: '16 Aug, 2026 02:46 PM', duration: '30 mins', status: 'Completed', draft: true },
    { id: 4, title: 'Demo: All Question Types (Exam)', kind: 'EXAM', class: 'Nursery (B)', subject: 'English', start: '31 Jul, 2026 01:29 PM', duration: '45 mins', status: 'Active', draft: false },
    { id: 5, title: 'Demo: Quick Quiz', kind: 'QUIZ', class: 'Nursery (A)', subject: 'English', start: '31 Jul, 2026 01:29 PM', duration: '10 mins', status: 'Active', draft: false },
    { id: 6, title: 'Demo: Practice Set (Adaptive)', kind: 'PRACTICE', class: 'Nursery (A)', subject: 'English', start: '31 Jul, 2026 01:29 PM', duration: 'Untimed', status: 'Always open', draft: false },
  ]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this session?")) {
      setPapers(papers.filter(p => p.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans pb-10">
      
      {/* Header */}
      <div className="bg-white px-6 py-4 flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-200">
        <h1 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          Manage Online Exams <span className="text-slate-400 font-normal">— this session</span>
        </h1>
        <div className="flex items-center gap-3 mt-4 md:mt-0">
          <button 
            onClick={() => navigate('/osm-module/dashboard')}
            className="px-4 py-2 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 font-bold text-xs rounded shadow-sm flex items-center gap-2 transition-colors cursor-pointer"
          >
            <LayoutDashboard className="w-3.5 h-3.5" /> Dashboard
          </button>
          <button className="px-4 py-2 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 font-bold text-xs rounded shadow-sm flex items-center gap-2 transition-colors cursor-pointer">
            <Layers className="w-3.5 h-3.5" /> View all sessions
          </button>
          <button 
            onClick={() => navigate('/osm-module/sessions/new')}
            className="px-4 py-2 bg-[#6f42c1] hover:bg-[#5a32a3] text-white font-bold text-xs rounded shadow-sm flex items-center gap-2 transition-colors border-none cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" /> New paper
          </button>
        </div>
      </div>

      <div className="p-6 max-w-[1400px] mx-auto space-y-4">
        
        {/* Search & Filters Area */}
        <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-4 space-y-4">
          <div className="flex flex-col lg:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input 
                type="text" 
                placeholder="Search by paper title..." 
                className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded text-sm focus:outline-none focus:border-[#6f42c1]"
              />
            </div>
            <select className="lg:w-48 px-3 py-2 border border-slate-300 rounded text-sm bg-white focus:outline-none focus:border-[#6f42c1] text-slate-700">
              <option>All Classes</option>
            </select>
            <select className="lg:w-64 px-3 py-2 border border-slate-300 rounded text-sm bg-white focus:outline-none focus:border-[#6f42c1] text-slate-700">
              <option>Pick a Class first@else All Sections</option>
            </select>
            <select className="lg:w-48 px-3 py-2 border border-slate-300 rounded text-sm bg-white focus:outline-none focus:border-[#6f42c1] text-slate-700">
              <option>All Subjects</option>
            </select>
            <button className="px-6 py-2 bg-[#6f42c1] hover:bg-[#5a32a3] text-white font-bold text-sm rounded shadow-sm flex items-center gap-2 justify-center transition-colors cursor-pointer border-none">
              <Search className="w-4 h-4" /> Search
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-2">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold text-slate-500 tracking-wider">KIND</span>
              <div className="flex gap-1">
                <span className="px-3 py-1 bg-[#6f42c1] text-white rounded-full text-[11px] font-bold shadow-sm cursor-pointer">All</span>
                <span className="px-3 py-1 text-slate-500 hover:bg-slate-100 rounded-full text-[11px] font-bold cursor-pointer transition-colors">Exams</span>
                <span className="px-3 py-1 text-slate-500 hover:bg-slate-100 rounded-full text-[11px] font-bold cursor-pointer transition-colors">Quizzes</span>
                <span className="px-3 py-1 text-slate-500 hover:bg-slate-100 rounded-full text-[11px] font-bold cursor-pointer transition-colors">Practice</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold text-slate-500 tracking-wider">STATE</span>
              <div className="flex gap-1">
                <span className="px-3 py-1 bg-[#6f42c1] text-white rounded-full text-[11px] font-bold shadow-sm cursor-pointer">Any</span>
                <span className="px-3 py-1 text-slate-500 hover:bg-slate-100 rounded-full text-[11px] font-bold cursor-pointer transition-colors">Published</span>
                <span className="px-3 py-1 text-slate-500 hover:bg-slate-100 rounded-full text-[11px] font-bold cursor-pointer transition-colors">Draft</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold text-slate-500 tracking-wider">WINDOW</span>
              <div className="flex gap-1">
                <span className="px-3 py-1 bg-[#6f42c1] text-white rounded-full text-[11px] font-bold shadow-sm cursor-pointer">Any</span>
                <span className="px-3 py-1 text-slate-500 hover:bg-slate-100 rounded-full text-[11px] font-bold cursor-pointer transition-colors">Upcoming</span>
                <span className="px-3 py-1 text-slate-500 hover:bg-slate-100 rounded-full text-[11px] font-bold cursor-pointer transition-colors">Open now</span>
                <span className="px-3 py-1 text-slate-500 hover:bg-slate-100 rounded-full text-[11px] font-bold cursor-pointer transition-colors">Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Data Table Container */}
        <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
          
          <div className="px-5 py-3 border-b border-slate-200 flex justify-between items-center bg-white">
            <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
              <Layers className="w-4 h-4 text-[#6f42c1]" /> 6 papers
            </div>
            <div className="flex items-center gap-4 text-[11px] text-slate-500 font-bold">
              <span>Sort</span>
              <span className="flex items-center gap-1 text-[#6f42c1] cursor-pointer hover:underline">Start time <ArrowDown className="w-3 h-3" /></span>
              <span className="cursor-pointer hover:text-slate-700">Title</span>
              <span className="cursor-pointer hover:text-slate-700">Created</span>
              <span className="cursor-pointer hover:text-slate-700">Duration</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <thead>
                <tr className="bg-[#f3f0ff] border-b border-slate-200 text-[10px] font-bold text-[#6f42c1] uppercase tracking-wider">
                  <th className="py-3 px-4 border-r border-slate-200/50 w-12 text-center">#</th>
                  <th className="py-3 px-4 border-r border-slate-200/50">TITLE</th>
                  <th className="py-3 px-4 border-r border-slate-200/50">KIND</th>
                  <th className="py-3 px-4 border-r border-slate-200/50">CLASS & SECTION</th>
                  <th className="py-3 px-4 border-r border-slate-200/50">SUBJECT</th>
                  <th className="py-3 px-4 border-r border-slate-200/50">START TIME</th>
                  <th className="py-3 px-4 border-r border-slate-200/50">DURATION</th>
                  <th className="py-3 px-4 border-r border-slate-200/50 text-center">STATUS</th>
                  <th className="py-3 px-4 text-center">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="text-xs text-slate-700">
                {papers.map((p, index) => (
                  <tr key={p.id} className="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 border-r border-slate-100 text-center text-slate-400">{index + 1}</td>
                    <td className="py-4 px-4 border-r border-slate-100 font-medium text-slate-800">{p.title}</td>
                    <td className="py-4 px-4 border-r border-slate-100">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold shadow-sm ${
                        p.kind === 'QUIZ' ? 'bg-orange-100 text-orange-600' :
                        p.kind === 'EXAM' ? 'bg-blue-100 text-blue-600' :
                        'bg-purple-100 text-purple-600'
                      }`}>
                        {p.kind}
                      </span>
                    </td>
                    <td className="py-4 px-4 border-r border-slate-100">{p.class}</td>
                    <td className="py-4 px-4 border-r border-slate-100">{p.subject}</td>
                    <td className="py-4 px-4 border-r border-slate-100">{p.start}</td>
                    <td className="py-4 px-4 border-r border-slate-100">{p.duration}</td>
                    <td className="py-4 px-4 border-r border-slate-100 text-center">
                      <div className="flex items-center justify-center gap-1.5 text-[10px] font-bold">
                        {p.status === 'Upcoming' && <span className="text-orange-400">Upcoming</span>}
                        {p.status === 'Completed' && <span className="text-[#28a745]">Completed</span>}
                        {p.status === 'Active' && <span className="text-blue-500">Active</span>}
                        {p.status === 'Always open' && <span className="text-[#6f42c1]">Always open</span>}
                        
                        {p.draft && <span className="text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded ml-1">Draft</span>}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex items-center justify-center gap-3 text-slate-400">
                        <button 
                          onClick={() => navigate('/osm-module/sessions/details')}
                          className="hover:text-[#6f42c1] transition-colors bg-transparent border-none cursor-pointer"
                          title="Manage Details"
                        >
                          <SlidersHorizontal className="w-3.5 h-3.5" />
                        </button>
                        <button 
                          onClick={() => alert(`Copied paper: ${p.title}`)}
                          className="hover:text-[#6f42c1] transition-colors bg-transparent border-none cursor-pointer"
                          title="Copy Paper"
                        >
                          <Copy className="w-3.5 h-3.5" />
                        </button>
                        <button 
                          onClick={() => alert(`Opening analytics for: ${p.title}`)}
                          className="hover:text-[#6f42c1] transition-colors bg-transparent border-none cursor-pointer"
                          title="View Analytics"
                        >
                          <BarChart2 className="w-3.5 h-3.5" />
                        </button>
                        <button 
                          onClick={() => handleDelete(p.id)}
                          className="hover:text-red-500 transition-colors bg-transparent border-none cursor-pointer"
                          title="Delete Paper"
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

        </div>

      </div>
    </div>
  );
}
