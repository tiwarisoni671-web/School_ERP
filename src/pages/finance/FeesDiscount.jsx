import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Info, Settings, Search, Plus, Edit2, Trash2, 
  FileText, Printer, Columns, ChevronDown, List, Grid,
  Percent, HelpCircle, AlertTriangle, Tag
} from 'lucide-react';

const FeesDiscount = () => {
  return (
    <div className="p-4 max-w-[1600px] mx-auto bg-gray-50 min-h-screen text-gray-800 pb-20">
      {/* Banner */}
      <div className="bg-[#009b9f] text-white p-2.5 rounded-lg text-xs flex items-center gap-2 mb-4 shadow-sm">
        <Info className="w-5 h-5 flex-shrink-0" />
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
        <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 transition-colors">
          <Settings className="w-3.5 h-3.5" /> Quick Setup
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-6 border-b border-gray-200 mb-6 overflow-x-auto text-xs font-semibold text-gray-600">
        <Link to="/finance" className="pb-2 px-1 whitespace-nowrap hover:text-blue-600 transition-colors">Dashboard</Link>
        <Link to="/finance/guide" className="pb-2 px-1 whitespace-nowrap hover:text-blue-600 transition-colors">Guide</Link>
        <Link to="/finance/collect" className="pb-2 px-1 whitespace-nowrap hover:text-blue-600 transition-colors">Collect Fees</Link>
        <Link to="/finance/due-fees" className="pb-2 px-1 whitespace-nowrap hover:text-blue-600 transition-colors">Search Due Fees</Link>
        <Link to="/finance/transactions" className="pb-2 px-1 whitespace-nowrap hover:text-blue-600 transition-colors">All Transactions</Link>
        <Link to="/finance/online-transactions" className="pb-2 px-1 whitespace-nowrap hover:text-blue-600 transition-colors">Online Transactions</Link>
        <Link to="/finance/challans" className="pb-2 px-1 whitespace-nowrap hover:text-blue-600 transition-colors">Fee Challans</Link>
        <Link to="/finance/assign" className="pb-2 px-1 whitespace-nowrap hover:text-blue-600 transition-colors">Assign Fees</Link>
        <Link to="/finance/carry-forward" className="pb-2 px-1 whitespace-nowrap hover:text-blue-600 transition-colors">Fees Carry Forward</Link>
        <Link to="/finance/groups" className="pb-2 px-1 whitespace-nowrap hover:text-blue-600 transition-colors">Fee Groups</Link>
        <button className="text-gray-900 border-b-[3px] border-gray-900 pb-2 px-1 whitespace-nowrap flex items-center gap-1">
          <span className="text-lg leading-none font-black">%</span> Fees Discount
        </button>
        <button className="pb-2 px-1 whitespace-nowrap hover:text-blue-600 transition-colors flex items-center gap-1"><Tag className="w-3.5 h-3.5" /> Fee Types</button>
        <button className="pb-2 px-1 whitespace-nowrap hover:text-blue-600 transition-colors text-gray-400 ml-auto flex items-center gap-1">
          ••• More Menu ▾
        </button>
      </div>

      <div className="flex justify-end mb-4">
        <Link to="/finance/discount/add" className="flex items-center gap-1.5 bg-[#5b5bcf] hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-semibold transition-colors shadow-sm">
          <Plus className="w-4 h-4" /> Add New Discount
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Left Column (Table) */}
        <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-[17px] font-bold text-[#5b5bcf] flex items-center gap-2">
              <span className="text-xl leading-none font-black">%</span> Fees Discounts
            </h2>
            <div className="flex bg-gray-100 rounded-md p-0.5">
              <button className="p-1.5 bg-white shadow-sm rounded-sm text-gray-700"><List className="w-4 h-4" /></button>
              <button className="p-1.5 text-gray-500 hover:text-gray-700"><Grid className="w-4 h-4" /></button>
            </div>
          </div>

          <div className="p-4 border-b border-gray-200">
            <div className="flex justify-between items-center flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Show</span>
                <select className="border border-gray-300 rounded text-xs px-2 py-1.5 text-gray-700 focus:outline-none focus:border-blue-500">
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                </select>
                <div className="flex bg-white rounded border border-gray-300 overflow-hidden ml-2">
                  <button className="px-2.5 py-1.5 text-gray-600 hover:bg-gray-50 border-r border-gray-300 transition-colors" title="Copy">
                    <FileText className="w-4 h-4" />
                  </button>
                  <button className="px-3 py-1.5 text-[11px] font-medium text-gray-600 hover:bg-gray-50 border-r border-gray-300 transition-colors" title="CSV">
                    CSV
                  </button>
                  <button className="px-3 py-1.5 text-[11px] font-medium text-gray-600 hover:bg-gray-50 border-r border-gray-300 transition-colors" title="Excel">
                    Excel
                  </button>
                  <button className="px-3 py-1.5 text-[11px] font-medium text-gray-600 hover:bg-gray-50 border-r border-gray-300 transition-colors" title="PDF">
                    PDF
                  </button>
                  <button className="px-2.5 py-1.5 text-gray-600 hover:bg-gray-50 border-r border-gray-300 transition-colors" title="Print">
                    <Printer className="w-4 h-4" />
                  </button>
                  <button className="flex items-center gap-1 px-3 py-1.5 text-[11px] font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                    <Columns className="w-3.5 h-3.5" /> Columns <ChevronDown className="w-3 h-3" />
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search discounts..." 
                  className="border border-gray-300 rounded-md pl-3 pr-8 py-1.5 text-sm w-64 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f8f9fc] text-[10px] font-bold text-[#5b5bcf] uppercase tracking-wider border-b border-gray-200">
                  <th className="p-4 border-r border-gray-100 w-16 text-center">#</th>
                  <th className="p-4 border-r border-gray-100">NAME</th>
                  <th className="p-4 border-r border-gray-100">CODE</th>
                  <th className="p-4 border-r border-gray-100">TYPE</th>
                  <th className="p-4 border-r border-gray-100">AMOUNT / PERCENTAGE</th>
                  <th className="p-4 text-center w-32">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="p-4 border-r border-gray-100 text-center text-gray-500">1</td>
                  <td className="p-4 border-r border-gray-100 font-medium text-gray-700">Demo</td>
                  <td className="p-4 border-r border-gray-100">
                    <span className="bg-gray-100 text-gray-600 border border-gray-200 px-2 py-1 rounded text-xs font-semibold uppercase">DEMO</span>
                  </td>
                  <td className="p-4 border-r border-gray-100">
                    <span className="bg-blue-50 text-blue-600 border border-blue-100 px-2.5 py-0.5 rounded-full text-[11px] font-semibold">Percentage</span>
                  </td>
                  <td className="p-4 border-r border-gray-100 font-bold text-gray-800">200.00%</td>
                  <td className="p-4 text-center align-middle">
                    <div className="flex justify-center items-center gap-3 text-gray-400">
                      <button className="hover:text-blue-600 transition-colors"><Edit2 className="w-4 h-4" /></button>
                      <button className="hover:text-red-600 transition-colors"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="p-4 border-r border-gray-100 text-center text-gray-500">2</td>
                  <td className="p-4 border-r border-gray-100 font-medium text-gray-700">Sibling Discount</td>
                  <td className="p-4 border-r border-gray-100">
                    <span className="bg-gray-100 text-gray-600 border border-gray-200 px-2 py-1 rounded text-xs font-semibold uppercase">SIBLING20</span>
                  </td>
                  <td className="p-4 border-r border-gray-100">
                    <span className="bg-blue-50 text-blue-600 border border-blue-100 px-2.5 py-0.5 rounded-full text-[11px] font-semibold">Percentage</span>
                  </td>
                  <td className="p-4 border-r border-gray-100 font-bold text-gray-800">20.00%</td>
                  <td className="p-4 text-center align-middle">
                    <div className="flex justify-center items-center gap-3 text-gray-400">
                      <button className="hover:text-blue-600 transition-colors"><Edit2 className="w-4 h-4" /></button>
                      <button className="hover:text-red-600 transition-colors"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 flex justify-between items-center text-sm text-gray-500">
            <div>Showing 1-2 of 2</div>
            <div className="flex items-center gap-1">
              <button className="px-2.5 py-1 border border-gray-200 rounded text-gray-400 hover:text-gray-600 hover:bg-gray-50">&lt;</button>
              <button className="px-3 py-1 bg-blue-600 text-white rounded font-medium">1</button>
              <button className="px-2.5 py-1 border border-gray-200 rounded text-gray-400 hover:text-gray-600 hover:bg-gray-50">&gt;</button>
            </div>
          </div>
        </div>

        {/* Right Column (Info Card) */}
        <div className="w-full lg:w-[35%]">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-purple-100 text-purple-600 p-1 rounded-full">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-gray-800 text-[15px]">How Fee Discounts work</h3>
              </div>
              
              <ul className="space-y-5 mb-6">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    <strong>Create the rule</strong> — define the discount here, e.g. a "Sibling Discount" of 10% or a "Staff Concession" of ₹500 fixed.
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    <strong>Assign it</strong> — go to <Link to="/finance/assign" className="font-semibold text-gray-800 hover:text-blue-600">Assign Fees</Link> and link this discount code to specific students.
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    <strong>Auto calculation</strong> — when you collect fees, the system deducts it from the total bill automatically.
                  </p>
                </li>
              </ul>
              
              <div className="bg-[#fff9e6] border border-[#f0e3ad] p-4 rounded-md flex gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-[12px] text-yellow-800 leading-relaxed">
                  <strong>Percentage (%)</strong> discounts scale with the total fee, while <strong>Fixed</strong> discounts deduct an exact flat amount regardless of fee size.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FeesDiscount;
