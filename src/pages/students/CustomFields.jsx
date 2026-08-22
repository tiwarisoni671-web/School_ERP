import React, { useState } from 'react';
import { Plus, Menu, Edit2, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const CustomFields = () => {
  const [fields, setFields] = useState([
    { id: 1, name: 'Jiban Sarkar', belongsTo: 'Staff Form', belongsToColor: 'bg-emerald-50 text-emerald-600', type: 'Number', required: 'Optional' },
    { id: 2, name: 'Staff Custom field', belongsTo: 'Staff Form', belongsToColor: 'bg-emerald-50 text-emerald-600', type: 'Text', required: 'Optional' },
    { id: 3, name: 'TEST1', belongsTo: 'Student Admission Form', belongsToColor: 'bg-blue-50 text-blue-600', type: 'Dropdown', typeSub: 'Options: A, B, C', required: 'Optional' },
    { id: 4, name: 'Extra Field', belongsTo: 'Student Admission Form', belongsToColor: 'bg-blue-50 text-blue-600', type: 'Text', required: 'Optional' },
  ]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this field?")) {
      setFields(fields.filter(field => field.id !== id));
    }
  };

  const handleEdit = (field) => {
    // Basic prompt for mockup purposes
    const newName = window.prompt("Edit field name:", field.name);
    if (newName && newName.trim() !== "") {
      setFields(fields.map(f => f.id === field.id ? { ...f, name: newName } : f));
    }
  };

  return (
    <div className="p-6 h-full flex flex-col bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Custom Fields</h1>
          <p className="text-sm text-gray-500 mt-1">Extra fields for admission & staff forms</p>
        </div>
        <Link 
          to="/students/custom-fields/add"
          className="flex items-center gap-2 px-4 py-2 bg-[#5F52FF] text-white rounded-md hover:bg-[#4E41E6] transition-colors text-sm font-medium shadow-sm"
        >
          <Plus className="w-4 h-4" />
          Add New Field
        </Link>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden flex flex-col">
        {/* Table Header / Toolbar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          <div className="flex items-center gap-2 text-[#5F52FF] font-semibold text-sm">
            <Menu className="w-4 h-4" />
            All Custom Fields
          </div>
          <div className="text-xs text-gray-500 font-medium">
            {fields.length} fields
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-[#5F52FF] font-bold">
                <th className="px-5 py-3 font-semibold text-center border-r border-gray-200 w-12">#</th>
                <th className="px-5 py-3 font-semibold border-r border-gray-200">Name</th>
                <th className="px-5 py-3 font-semibold border-r border-gray-200">Belongs To</th>
                <th className="px-5 py-3 font-semibold border-r border-gray-200">Type</th>
                <th className="px-5 py-3 font-semibold border-r border-gray-200">Required</th>
                <th className="px-5 py-3 font-semibold text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              {fields.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-5 py-8 text-center text-gray-500">
                    No custom fields found.
                  </td>
                </tr>
              ) : (
                fields.map((field) => (
                  <tr key={field.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-4 text-center border-r border-gray-100 text-gray-500">{field.id}</td>
                    <td className="px-5 py-4 border-r border-gray-100 font-medium text-gray-800">{field.name}</td>
                    <td className="px-5 py-4 border-r border-gray-100">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${field.belongsToColor}`}>
                        {field.belongsTo}
                      </span>
                    </td>
                    <td className="px-5 py-4 border-r border-gray-100">
                      <div>{field.type}</div>
                      {field.typeSub && <div className="text-xs text-gray-400 mt-0.5">{field.typeSub}</div>}
                    </td>
                    <td className="px-5 py-4 border-r border-gray-100">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-500 border border-gray-200">
                        {field.required}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center justify-center gap-3">
                        <button onClick={() => handleEdit(field)} className="text-gray-400 hover:text-[#5F52FF] transition-colors">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button onClick={() => handleDelete(field.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomFields;
