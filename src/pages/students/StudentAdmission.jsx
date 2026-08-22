import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Settings, HelpCircle, Upload, GraduationCap, User, Users, HeartPulse, FileText, Calendar, ShieldCheck, ChevronRight, Info, X, PlusCircle, EyeOff, Hash, Monitor, Wallet, FolderPlus, PlusSquare } from 'lucide-react';

const StudentAdmission = () => {
  const [activeTab, setActiveTab] = useState('academic');
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);
  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);
  const fileInputRef = useRef(null);

  const tabs = [
    { id: 'academic', label: '1. Academic', icon: GraduationCap },
    { id: 'personal', label: '2. Personal Info', icon: User },
    { id: 'parents', label: '3. Parents', icon: Users },
    { id: 'health', label: '4. Health & Bank', icon: HeartPulse },
    { id: 'documents', label: '5. Documents', icon: FileText },
  ];

  const handleBulkUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      alert(`File selected: ${file.name}\nReady for bulk upload processing.`);
      // Reset input so the same file can be selected again if needed
      e.target.value = null;
    }
  };

  return (
    <div className="p-6 h-full flex flex-col bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Student Admission</h1>
        <div className="flex gap-3 relative">
          <div className="relative">
            <button 
              onClick={() => setIsCustomizeOpen(!isCustomizeOpen)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 transition-colors text-sm font-medium shadow-sm"
            >
              <Settings className="w-4 h-4" />
              Customize Form
            </button>
            
            {/* Customize Form Dropdown */}
            {isCustomizeOpen && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-10 py-2">
                <div className="text-center px-4 py-1 text-xs text-gray-500 font-medium border-b border-gray-100 mb-2">
                  Tailor this admission form
                </div>
                <Link to="/students/custom-fields" className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-start gap-3">
                  <PlusCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">Add / Edit Fields</div>
                    <div className="text-xs text-gray-500">Create your own extra fields (text, dropdown...)</div>
                  </div>
                </Link>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-start gap-3">
                  <EyeOff className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">Show / Hide Fields</div>
                    <div className="text-xs text-gray-500">Turn built-in fields on or off</div>
                  </div>
                </button>
              </div>
            )}
          </div>

          <button 
            onClick={() => setIsGuideModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 transition-colors text-sm font-medium shadow-sm"
          >
            <HelpCircle className="w-4 h-4" />
            How to Guide
          </button>
          <button 
            onClick={handleBulkUploadClick}
            className="flex items-center gap-2 px-4 py-2 bg-[#5F52FF] text-white rounded-md hover:bg-[#4E41E6] transition-colors text-sm font-medium shadow-sm"
          >
            <Upload className="w-4 h-4" />
            Bulk Upload
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept="*/*" // Accepts all file types
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex gap-6 flex-1 min-h-0">
        
        {/* Sidebar Tabs */}
        <div className="w-64 flex-shrink-0 flex flex-col gap-3">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-md text-sm font-semibold transition-colors text-left border ${
                  isActive
                    ? 'bg-[#5F52FF] text-white border-[#5F52FF] shadow-md'
                    : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Form Content */}
        <div className="flex-1 bg-white rounded-lg border border-gray-200 shadow-sm overflow-y-auto relative">
          
          {/* Top border decor */}
          <div className="absolute top-0 left-0 w-48 h-1.5 bg-[#5F52FF] opacity-80" style={{ background: 'repeating-linear-gradient(45deg, #5F52FF, #5F52FF 10px, #7A70FF 10px, #7A70FF 20px)'}}></div>

          {activeTab === 'academic' && (
            <div className="p-8 mt-2">
              <div className="flex items-center gap-3 text-[#5F52FF] mb-6">
                <GraduationCap className="w-5 h-5" />
                <h2 className="font-bold uppercase text-sm tracking-wide">Academic Details</h2>
              </div>

              {/* Form Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-5 mb-10">
                
                {/* Admission No */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Admission No <span className="text-red-500">*</span>
                  </label>
                  <div className="flex rounded-md shadow-sm">
                    <input type="text" className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#5F52FF] focus:border-[#5F52FF]" />
                    <button className="px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-white text-gray-600 text-sm hover:bg-gray-50 flex items-center gap-1 font-medium">
                       ✨ Auto
                    </button>
                  </div>
                </div>

                {/* Roll Number */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Roll Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex rounded-md shadow-sm">
                    <input type="text" className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#5F52FF] focus:border-[#5F52FF]" />
                    <button className="px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-white text-gray-600 text-sm hover:bg-gray-50 flex items-center gap-1 font-medium">
                       ✨ Auto
                    </button>
                  </div>
                </div>

                {/* Admission Date */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Admission Date
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <input type="text" defaultValue="21-08-2026" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#5F52FF] focus:border-[#5F52FF]" />
                    <Calendar className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
                  </div>
                </div>

                {/* Class */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Class <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#5F52FF] focus:border-[#5F52FF] appearance-none bg-white shadow-sm">
                    <option>Select Class</option>
                    <option>Class 1</option>
                    <option>Class 2</option>
                  </select>
                </div>

                {/* Section */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Section <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#5F52FF] focus:border-[#5F52FF] appearance-none bg-white text-gray-500 shadow-sm">
                    <option>-- Select Class First --</option>
                  </select>
                </div>

                {/* Biometric ID */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Biometric ID
                  </label>
                  <input type="text" placeholder="Device User ID" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#5F52FF] focus:border-[#5F52FF] placeholder-gray-400 shadow-sm" />
                </div>
              </div>

              {/* Previous School Details Section */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-gray-500 bg-gray-50 p-3 rounded-md mb-5 text-sm font-semibold border border-gray-100">
                  <ShieldCheck className="w-5 h-5 text-gray-400" />
                  Previous School Details
                </div>

                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Previous School Name & Details
                    </label>
                    <textarea 
                      rows="3" 
                      placeholder="Enter previous school name, address, and any relevant details"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#5F52FF] focus:border-[#5F52FF] placeholder-gray-400 resize-none shadow-sm"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Opening Due Balance (If Any)
                    </label>
                    <input 
                      type="number" 
                      defaultValue="0"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#5F52FF] focus:border-[#5F52FF] mb-1.5 shadow-sm" 
                    />
                    <p className="text-xs text-gray-500 flex items-start gap-1.5">
                      <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-gray-400 text-white text-[10px] mt-0.5 font-bold flex-shrink-0">!</span>
                      Outstanding balance from previous school. Will appear as "Opening Due Balance" in the student's fee ledger.
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex justify-end pt-6">
                <button className="flex items-center gap-2 bg-[#5F52FF] text-white px-6 py-2.5 rounded-md hover:bg-[#4E41E6] transition-colors text-sm font-semibold shadow-md">
                  Next Step
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          )}

          {/* Placeholders for other tabs */}
          {activeTab !== 'academic' && (
            <div className="p-12 flex flex-col items-center justify-center text-gray-500 h-full">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Settings className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">{tabs.find(t => t.id === activeTab)?.label} Information</h3>
              <p className="text-sm text-center max-w-sm">This section will contain fields related to {tabs.find(t => t.id === activeTab)?.label.toLowerCase()}. It is currently under development.</p>
            </div>
          )}

        </div>
      </div>

      {/* Getting Started Guide Modal */}
      {isGuideModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-md shadow-xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="bg-[#5F52FF] text-white px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2 font-semibold">
                <Info className="w-5 h-5" />
                Getting Started Guide
              </div>
              <button onClick={() => setIsGuideModalOpen(false)} className="text-white hover:text-gray-200">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto">
              <p className="text-sm text-gray-700 mb-6">
                Follow these steps to complete the student admission process. Fields marked with a red asterisk (<span className="text-red-500">*</span>) are mandatory.
              </p>
              
              <div className="space-y-6">
                
                <div className="flex gap-3">
                  <User className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm">Student Details:</h3>
                    <p className="text-xs text-gray-600">Fill in the student's personal and academic information in the first tab.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Hash className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm">Admission Number:</h3>
                    <p className="text-xs text-gray-600">Click <strong>Auto</strong> to take the next number in your sequence, or type your own — either way it is checked for you as you type. The admission number also generates the student's login, so it must be unique. You can set your school's format and prefix under <a href="#" className="text-orange-500 hover:underline">Settings → System & Formats</a>.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Monitor className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm">Class & Section:</h3>
                    <p className="text-xs text-gray-600">You must select a class to load its sections. If a class or section is missing, you can manage them <a href="#" className="text-orange-500 hover:underline">here</a>.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Users className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm">Parent/Guardian Account:</h3>
                    <ul className="text-xs text-gray-600 list-disc list-inside">
                      <li>Choose <strong>'Create New Parent'</strong> for new admissions. A login will be created automatically.</li>
                      <li>Choose <strong>'Link to Existing Parent'</strong> if admitting a sibling to link them to the same parent account.</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Wallet className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm">Assign Fees:</h3>
                    <p className="text-xs text-gray-600">Optionally, you can assign pre-defined fee groups during admission. You can manage fee groups <a href="#" className="text-orange-500 hover:underline">here</a>.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <FolderPlus className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm">Upload Documents:</h3>
                    <p className="text-xs text-gray-600">Attach relevant documents like Birth Certificates. You can add multiple files by clicking the "+ Add More" button.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <PlusSquare className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm">Additional Details:</h3>
                    <p className="text-xs text-gray-600">If you have created custom fields for students, you can fill them in under the 'Additional Details' tab. You can manage custom fields <a href="#" className="text-orange-500 hover:underline">here</a>.</p>
                  </div>
                </div>

              </div>
              
              <div className="mt-8 border-t border-gray-200 pt-4">
                <p className="text-sm text-gray-700">
                  Once all required information is filled, click the <strong>"Admit Student"</strong> button at the bottom of the form to save the record.
                </p>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="bg-gray-50 px-4 py-3 border-t border-gray-200 flex justify-end">
              <button 
                onClick={() => setIsGuideModalOpen(false)}
                className="bg-gray-500 text-white px-4 py-1.5 rounded-md hover:bg-gray-600 transition-colors text-sm font-medium"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default StudentAdmission;
