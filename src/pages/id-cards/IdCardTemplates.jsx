import React, { useState, useMemo } from 'react';
import { Search, FileEdit, PenTool, LayoutTemplate, User, Users, GraduationCap, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DUMMY_TEMPLATES = [
  { id: 1, title: 'Classic Portrait ID Card', type: 'Id Card', image: 'https://placehold.co/400x600/ffffff/5542f6?text=ID+Card\nPortrait' },
  { id: 2, title: 'Modern Portrait ID Card', type: 'Id Card', image: 'https://placehold.co/400x600/ffffff/5542f6?text=ID+Card\nModern' },
  { id: 3, title: 'Vibrant Portrait ID Card', type: 'Id Card', image: 'https://placehold.co/400x600/ffffff/ea4335?text=ID+Card\nVibrant' },
  { id: 4, title: 'Professional Landscape ID Card', type: 'Id Card', image: 'https://placehold.co/600x400/ffffff/1a73e8?text=ID+Card\nLandscape' },
  { id: 5, title: 'Golden Crest (Canvas)', type: 'Id Card', image: 'https://placehold.co/400x600/ffffff/fbbc04?text=Golden+Crest' },
  { id: 6, title: 'Azure Classic (Canvas)', type: 'Id Card', image: 'https://placehold.co/400x600/ffffff/4285f4?text=Azure+Classic' },
  { id: 7, title: 'Emerald Band (Canvas)', type: 'Id Card', image: 'https://placehold.co/400x600/ffffff/34a853?text=Emerald+Band' },
  { id: 8, title: 'Minimal Slate (Canvas)', type: 'Id Card', image: 'https://placehold.co/400x600/ffffff/5f6368?text=Minimal+Slate' },
  { id: 9, title: 'Academic Excellence Award', type: 'Academic', image: 'https://placehold.co/600x400/ffffff/333333?text=Academic+Award' },
  { id: 10, title: 'Mid-term Admit Card', type: 'Admit Card', image: 'https://placehold.co/400x600/ffffff/333333?text=Admit+Card' },
  { id: 11, title: 'Student Bonafide', type: 'Bonafide', image: 'https://placehold.co/600x400/ffffff/333333?text=Bonafide' },
  { id: 12, title: 'Participation Certificate', type: 'Certificate', image: 'https://placehold.co/600x400/ffffff/333333?text=Certificate' },
];

const TABS = [
  { id: 'All', label: 'All' },
  { id: 'Academic', label: 'Academic' },
  { id: 'Admit Card', label: 'Admit Card' },
  { id: 'Bonafide', label: 'Bonafide' },
  { id: 'Certificate', label: 'Certificate' },
  { id: 'Id Card', label: 'Id Card' },
];

export default function IdCardTemplates() {
  const navigate = useNavigate();
  const [templates] = useState(DUMMY_TEMPLATES);
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter logic
  const filteredTemplates = useMemo(() => {
    return templates.filter(t => {
      const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTab = activeTab === 'All' || t.type === activeTab;
      return matchesSearch && matchesTab;
    });
  }, [templates, activeTab, searchQuery]);

  // Tab counts
  const getTabCount = (tabId) => {
    if (tabId === 'All') return 111; // Dummy total to match screenshot
    if (tabId === 'Id Card') return 10;
    if (tabId === 'Admit Card') return 3;
    if (tabId === 'Bonafide') return 9;
    return 1;
  };

  return (
    <div className="bg-[#f4f7fc] min-h-screen font-sans p-6 pb-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="flex items-center">
          <button onClick={() => navigate(-1)} className="mr-3 text-gray-500 hover:text-gray-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-[24px] font-semibold text-gray-800">Template Gallery</h1>
            <p className="text-gray-500 text-sm mt-1">Pick a pre-built design, or start fresh</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center px-4 py-2 border border-gray-300 bg-white text-gray-700 rounded-md text-sm font-bold hover:bg-gray-50 transition-colors">
            <FileEdit className="w-4 h-4 mr-2" />
            Start from Scratch
          </button>
          <button className="flex items-center px-4 py-2 bg-[#5542f6] text-white rounded-md text-sm font-bold hover:bg-[#4a3ae0] transition-colors shadow-sm">
            <PenTool className="w-4 h-4 mr-2" />
            Canvas Designer
          </button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3 mb-6 flex flex-col md:flex-row items-center gap-4 overflow-x-auto overflow-y-hidden scrollbar-hide">
        
        {/* Search */}
        <div className="relative w-full md:w-64 flex-shrink-0">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#5542f6] focus:border-[#5542f6]"
          />
        </div>

        {/* Tabs */}
        <div className="flex items-center space-x-2 flex-1 whitespace-nowrap overflow-x-auto scrollbar-hide pb-1">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            const count = getTabCount(tab.id);

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-3 py-1.5 rounded-full text-sm transition-colors border ${
                  isActive
                    ? 'bg-transparent text-gray-800 border-gray-300 font-bold'
                    : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                }`}
              >
                {tab.label}
                <span 
                  className={`ml-2 px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                    isActive ? 'bg-gray-200 text-gray-800' : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid */}
      {filteredTemplates.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredTemplates.map((template) => (
            <div key={template.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group">
              {/* Image Preview */}
              <div className="h-64 border-b border-gray-100 p-4 bg-gray-50 flex items-center justify-center relative">
                <img 
                  src={template.image} 
                  alt={template.title} 
                  className="max-h-full max-w-full object-contain drop-shadow-md border border-gray-200 bg-white" 
                />
              </div>

              {/* Footer Details */}
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-sm font-bold text-gray-800 line-clamp-2 pr-2" title={template.title}>
                    {template.title}
                  </h3>
                  <span className="inline-block text-xs font-medium text-gray-500 flex-shrink-0">
                    {template.type}
                  </span>
                </div>
                
                <button 
                  className="mt-auto w-full py-2.5 bg-[#f0efff] text-[#5542f6] font-bold text-sm rounded-md border border-transparent hover:border-[#5542f6]/30 transition-colors"
                >
                  Use this template
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-lg border border-gray-200 shadow-sm">
          <p className="text-gray-500 text-lg">No templates found.</p>
        </div>
      )}
    </div>
  );
}
