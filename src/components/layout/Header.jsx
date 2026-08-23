import { 
  Menu, 
  ChevronDown, 
  CalendarDays, 
  Globe, 
  Search, 
  Plus, 
  Bell, 
  Settings, 
  Grid
} from "lucide-react";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-white h-14 border-b flex items-center justify-between px-4 sticky top-0 z-10">
      {/* Left side */}
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="p-1 hover:bg-gray-100 rounded-md text-gray-500">
          <Menu className="w-5 h-5" />
        </button>
        
        <div className="flex items-center gap-3">
          <span className="font-semibold text-gray-700 tracking-wide">ACS School</span>
          
          <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full text-xs text-gray-600 border">
            <Globe className="w-3.5 h-3.5" />
            Command Center
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Session & Language */}
        <div className="flex items-center gap-4 border-r pr-4 text-sm text-gray-600">
          <button className="flex items-center gap-1.5 hover:text-gray-900">
            <CalendarDays className="w-4 h-4 text-gray-400" />
            26-27
            <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
          </button>
          
          <button className="flex items-center gap-1.5 hover:text-gray-900">
            <Globe className="w-4 h-4 text-gray-400" />
            English
            <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
          </button>
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-3 text-gray-500">
          <button className="p-1.5 hover:bg-gray-100 rounded-full"><Search className="w-4 h-4" /></button>
          <button className="p-1.5 hover:bg-gray-100 rounded-full"><Plus className="w-4 h-4" /></button>
          
          <button className="p-1.5 hover:bg-gray-100 rounded-full relative">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
          </button>
          
          <button className="p-1.5 hover:bg-gray-100 rounded-full text-blue-600 bg-blue-50/50">
            <Settings className="w-4 h-4" />
          </button>
          
          <button className="p-1.5 hover:bg-gray-100 rounded-full"><Grid className="w-4 h-4" /></button>
        </div>

        {/* User Avatar */}
        <div className="w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center text-white font-medium text-xs shadow-sm cursor-pointer border-2 border-white">
          SA
        </div>
      </div>
    </header>
  );
};

export default Header;
