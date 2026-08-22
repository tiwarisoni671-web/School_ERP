import { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  Search, 
  LayoutDashboard, 
  Compass, 
  Headset, 
  Wallet, 
  Calculator, 
  Users, 
  BookOpen, 
  Monitor, 
  TrendingUp, 
  FileText, 
  ClipboardList, 
  MonitorPlay, 
  UserCog, 
  Calendar, 
  BookMarked,
  ChevronLeft,
  ChevronDown,
  PenTool,
  QrCode,
  Fingerprint,
  ClipboardCheck,
  BarChart2,
  ShieldCheck,
  LayoutGrid,
  Video,
  Award,
  IdCard,
  Megaphone,
  Library,
  Warehouse,
  Bus,
  Network,
  Building,
  HelpCircle,
  Package,
  Cctv,
  PieChart,
  Settings,
  HardDrive,
  MessageCircle,
  MessageSquare,
  User,
  ChevronsRight
} from "lucide-react";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState("Finance & Fees");

  const toggleMenu = (name) => {
    setOpenMenu(prev => (prev === name ? null : name));
  };

  const mainNav = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/" },
    { name: "Lead Management", icon: TrendingUp, path: "/leads/dashboard" },
    { name: "Competency-Based (CBC)", icon: Network, path: "/cbc/dashboard" },
    { name: "ERP Navigator", icon: Compass, path: "/erp-navigator" },
    { name: "Contact Support", icon: Headset, path: "/contact-support" },
  ];

  const managementNav = [
    { 
      name: "Finance & Fees", 
      icon: Wallet, 
      path: "#",
      children: [
        { name: "Fees Dashboard", path: "/finance/dashboard" },
        { name: "Collect Fees", path: "/finance/collect" },
        { name: "Search Due Fees", path: "/finance/search-due-fees" },
        { name: "All Transactions", path: "/finance/transactions" },
        { name: "Online Transactions", path: "/finance/online-transactions" },
        { name: "Fee Challans", path: "/finance/challans" },
        { name: "Assign Fees", path: "/finance/assign" },
        { name: "Fees Carry Forward", path: "/finance/carry-forward" },

        { name: "Fee Groups", path: "/finance/groups" },
        { name: "Fees Discount", path: "/finance/discount" },
        { name: "Fee Types", path: "/finance/types" },
        { name: "Generate Due Slip", path: "/finance/generate-slip" },
        { name: "Due Slip History", path: "/finance/slip-history" },
        { name: "Fee Data Audit", path: "/finance/audit" },
      ]
    },
    { 
      name: "Accounts", 
      icon: Calculator, 
      path: "#",
      children: [
        { name: "Accounts Dashboard", path: "/accounts/dashboard" },
        { name: "Income", path: "/accounts/income" },
        { name: "Expense", path: "/accounts/expense" },
        { name: "Income Heads", path: "/accounts/income-heads" },
        { name: "Expense Heads", path: "/accounts/expense-heads" },
        { name: "Bank Accounts", path: "/accounts/bank-accounts" },
      ]
    },
    { 
      name: "Student Information", 
      icon: Users, 
      path: "#",
      children: [
        { name: "Student Dashboard", path: "/students/dashboard" },
        { name: "Student Admission", path: "/students/admission" },
        { name: "Student List", path: "/students/list" },
        { name: "Search by Photo", path: "/students/search-photo" },
        { name: "Parents & Guardians", path: "/students/parents" },
        { name: "Student Attendance", path: "/students/attendance" },
        { name: "Behavior Records", path: "/students/behavior" },
        { name: "Student Houses", path: "/students/houses" },
        { name: "Student Categories", path: "/students/categories" },
        { name: "TC & Exit", path: "/students/tc" },
        { name: "Health Records", path: "/students/health" },
      ]
    },
    { 
      name: "Academics", 
      icon: BookOpen, 
      path: "#",
      children: [
        { name: "Academic Dashboard", path: "/academics/dashboard" },
        { name: "Academic Sessions", path: "/academics/sessions" },
        { name: "Classes", path: "/academics/classes" },
        { name: "Sections", path: "/academics/sections" },
        { name: "Subjects", path: "/academics/subjects" },
        { name: "Assign Subjects", path: "/academics/assign-subjects" },
        { name: "Assign Electives", path: "/academics/assign-electives" },
        { name: "Assign Class Teacher", path: "/academics/assign-class-teacher" },
        { name: "Manage Periods", path: "/academics/manage-periods" },
        { name: "Class Timetable", path: "/academics/timetable" },
        { name: "Promote Students", path: "/academics/promote" },
      ]
    },
    { 
      name: "Front Office", 
      icon: Monitor, 
      path: "#",
      children: [
        { name: "Front Office Dashboard", path: "/front-office/dashboard" },
        { name: "Admission Enquiries", path: "/front-office/admission-enquiries" },
        { name: "Visitor Book", path: "/front-office/visitor-book" },
        { name: "Complaints", path: "/front-office/complaints" },
        { name: "Postal Records", path: "/front-office/postal-records" },
        { name: "Gate Passes", path: "/front-office/gate-passes" },
        { name: "Gate Terminal", path: "/front-office/gate-passes/terminal" },
        { name: "Campus Workers", path: "/front-office/campus-workers" },
      ]
    },
    { 
      name: "Lead Management", 
      icon: TrendingUp, 
      path: "#",
      children: [
        { name: "Lead Dashboard", path: "/leads/dashboard" },
        { name: "Lead Pipeline Board", path: "/leads/pipeline" },
        { name: "Lead Sources & Stages", path: "/leads/sources-stages" },
      ]
    },
    { 
      name: "Offline Examinations", 
      icon: FileText, 
      path: "#",
      children: [
        { name: "Exam Dashboard", path: "/offline-exams/dashboard" },
        { name: "Manage Offline Exams", path: "/offline-exams/manage" },
        { name: "Exam Types", path: "/offline-exams/types" },
        { name: "Schedule & Marks Setup", path: "/offline-exams/schedule-marks" },
        { name: "Enter Marks", path: "/offline-exams/enter-marks" },
        { name: "Cocurricular Areas", path: "/offline-exams/cocurricular-areas" },
        { name: "Cocurricular Grades", path: "/offline-exams/cocurricular-grades" },
        { name: "Manage Grades", path: "/offline-exams/manage-grades" },
        { name: "Report Card Setups", path: "/offline-exams/report-card-setups" },
        { name: "Generate Marksheet", path: "/offline-exams/generate-marksheet" },
        { name: "Upload Marksheet", path: "/offline-exams/upload-marksheet" },
        { name: "Manage Uploads", path: "/offline-exams/manage-uploads" },
        { name: "Teacher Remarks", path: "/offline-exams/teacher-remarks" },
        { name: "Datesheet", path: "/offline-exams/datesheet" },
      ]
    },
    { 
      name: "CBC Academics", 
      icon: ClipboardList, 
      path: "#",
      children: [
        { name: "CBC Dashboard", path: "/cbc-academics/dashboard" },
        { name: "Strands & Outcomes", path: "/cbc-academics/strands-outcomes" },
        { name: "CBC Assessments", path: "/cbc-academics/assessments" },
        { name: "Core Competencies", path: "/cbc-academics/core-competencies" },
        { name: "Pathways & Tracks", path: "/cbc-academics/pathways-tracks" },
        { name: "CBC Reports", path: "/cbc-academics/reports" },
      ]
    },
    { 
      name: "Online Examinations", 
      icon: MonitorPlay, 
      path: "#",
      children: [
        { name: "Online Exam Dashboard", path: "/online-exams/dashboard" },
        { name: "Manage Online Exams", path: "/online-exams/manage" },
        { name: "Question Bank", path: "/online-exams/question-bank" },
        { name: "Chapters & Topics", path: "/online-exams/chapters-topics" },
      ]
    },
    { 
      name: "Human Resource", 
      icon: UserCog, 
      path: "#",
      children: [
        { name: "HR Dashboard", path: "/hr/dashboard" },
        { name: "Staff Directory", path: "/hr/staff-directory" },
        { name: "Staff Attendance", path: "/hr/staff-attendance" },
        { name: "Payroll", path: "/hr/payroll" },
        { name: "Set Salary", path: "/hr/set-salary" },
        { name: "Approve Leave", path: "/hr/approve-leave" },
        { name: "Leave Types", path: "/hr/leave-types" },
        { name: "Departments", path: "/hr/departments" },
        { name: "Designations", path: "/hr/designations" },
        { name: "Staff ID Card", path: "/hr/staff-id-card" },
        { name: "HR Settings", path: "/hr/settings" },
        { name: "Manage Staff Loans", path: "/hr/manage-loans" },
        { name: "Salary Templates", path: "/hr/salary-templates" },
        { name: "Appraisal Cycles", path: "/hr/appraisal-cycles" },
        { name: "Appraisal Criteria", path: "/hr/appraisal-criteria" },
        { name: "Appraisals", path: "/hr/appraisals" },
      ]
    },
    { 
      name: "PTM Meetings", 
      icon: Calendar, 
      path: "#",
      children: [
        { name: "PTM Dashboard", path: "/ptm/dashboard" },
        { name: "PTM Schedule Meetings", path: "/ptm/schedule" },
        { name: "PTM Guide", path: "/ptm/guide" },
        { name: "PTM Attendance & Remarks", path: "/ptm/attendance-remarks" },
        { name: "PTM Follow-ups", path: "/ptm/follow-ups" },
        { name: "PTM Reports", path: "/ptm/reports" },
      ]
    },
    { 
      name: "Lesson Planner", 
      icon: BookMarked, 
      path: "#",
      children: [
        { name: "Lesson Planner Dashboard", path: "/lesson-planner/dashboard" },
        { name: "Lesson Plans", path: "/lesson-planner/plans" },
        { name: "Lesson Planner Guide", path: "/lesson-planner/guide" },
        { name: "Lesson Plan Review", path: "/lesson-planner/review" },
        { name: "Lesson Plan Approvals", path: "/lesson-planner/approvals" },
        { name: "Lesson Plan Coverage", path: "/lesson-planner/coverage" },
        { name: "Lesson Plan Reports", path: "/lesson-planner/reports" },
        { name: "Lesson Planner Settings", path: "/lesson-planner/settings" },
      ]
    },
    { 
      name: "OSM Module", 
      icon: PenTool, 
      path: "#",
      children: [
        { name: "OSM Dashboard", path: "/osm-module/dashboard" },
        { name: "OSM Sessions", path: "/osm-module/sessions" },
        { name: "OSM Evaluate", path: "/osm-module/evaluate" },
        { name: "OSM Reports", path: "/osm-module/reports" },
        { name: "OSM Guide", path: "/osm-module/guide" },
        { name: "OSM Moderation", path: "/osm-module/moderation" },
      ]
    },
    { 
      name: "QR Code Attendance", 
      icon: QrCode, 
      path: "#",
      children: [
        { name: "QR Attendance", path: "/qr-attendance/attendance" },
        { name: "QR Attendance Setting", path: "/qr-attendance/setting" },
        { name: "QR Attendance Report", path: "/qr-attendance/report" },
        { name: "QR Scan Audit", path: "/qr-attendance/scan-audit" },
      ]
    },
    { 
      name: "Biometric Devices", 
      icon: Fingerprint, 
      path: "#",
      children: [
        { name: "All Devices", path: "/biometric/all-devices" },
        { name: "Attendance Logs", path: "/biometric/attendance-logs" },
        { name: "Face Monitoring", path: "/biometric/face-monitoring" },
        { name: "Agent Logs", path: "/biometric/agent-logs" },
      ]
    },
    { 
      name: "Assessment", 
      icon: ClipboardCheck, 
      path: "#",
      children: [
        { name: "Assessment Dashboard", path: "/assessment/dashboard" },
        { name: "Assessments", path: "/assessment/list" },
        { name: "Assessment Guide", path: "/assessment/guide" },
        { name: "Assessment Reports", path: "/assessment/reports" },
      ]
    },
    { 
      name: "Surveys & Feedback", 
      icon: BarChart2, 
      path: "#",
      children: [
        { name: "Survey Dashboard", path: "/surveys/dashboard" },
        { name: "All Surveys", path: "/surveys/all" },
        { name: "My Surveys", path: "/surveys/my-surveys" },
        { name: "Feedback Triage", path: "/surveys/feedback-triage" },
        { name: "Survey Guide", path: "/surveys/guide" },
      ]
    },
    { 
      name: "Compliance & Governance", 
      icon: ShieldCheck, 
      path: "#",
      children: [
        { name: "Compliance Overview", path: "/compliance/overview" },
        { name: "School Profile", path: "/compliance/school-profile" },
        { name: "Compliance Packs", path: "/compliance/packs" },
        { name: "Field Settings", path: "/compliance/field-settings" },
        { name: "Document Vault", path: "/compliance/document-vault" },
        { name: "Compliance Checklist", path: "/compliance/checklist" },
        { name: "Data Records", path: "/compliance/data-records" },
        { name: "Data Validator", path: "/compliance/data-validator" },
        { name: "Government Reports", path: "/compliance/government-reports" },
        { name: "Inspections", path: "/compliance/inspections" },
        { name: "Compliance Calendar", path: "/compliance/calendar" },
      ]
    },
  ];

  const modulesNav = [
    { name: "Apps Center", icon: LayoutGrid, path: "/apps-center" },
    { 
      name: "Live Classes", 
      icon: Video, 
      path: "#",
      children: [
        { name: "Manage Live Classes", path: "/live-classes/manage" },
        { name: "Live Class Settings", path: "/live-classes/settings" },
      ]
    },
    { 
      name: "Study Center", 
      icon: BookOpen, 
      path: "#",
      children: [
        { name: "Dashboard", path: "/study-center/dashboard" },
        { name: "Classwork & Logbook", path: "/study-center/classwork-logbook" },
        { name: "Manage Syllabus", path: "/study-center/manage-syllabus" },
        { name: "Manage Resources", path: "/study-center/manage-resources" },
        { name: "Homework & Assignments", path: "/study-center/homework-assignments" },
      ]
    },
    { 
      name: "Certificates", 
      icon: Award, 
      path: "#",
      children: [
        { name: "Certificate Templates", path: "/certificates/templates" },
        { name: "Certificates & Document", path: "/certificates/documents" },
      ]
    },
    { 
      name: "ID Cards", 
      icon: IdCard, 
      path: "#",
      children: [
        { name: "Student ID Cards", path: "/id-cards/student" },
        { name: "Staff ID Cards", path: "/id-cards/staff" },
        { name: "Card Designs", path: "/id-cards/designs" },
      ]
    },
    { 
      name: "Communicate", 
      icon: Megaphone, 
      path: "#",
      children: [
        { name: "Notice Board", path: "/communicate/notice-board" },
        { name: "Events & Holidays", path: "/communicate/events-holidays" },
        { name: "Compose Broadcast", path: "/communicate/compose-broadcast" },
        { name: "Broadcast History", path: "/communicate/broadcast-history" },
        { name: "Image Gallery", path: "/communicate/image-gallery" },
      ]
    },
    { 
      name: "Library", 
      icon: Library, 
      path: "#",
      children: [
        { name: "Library Dashboard", path: "/library/dashboard" },
        { name: "Issue/Return Book", path: "/library/issue-return" },
        { name: "Manage Books", path: "/library/manage" },
        { name: "Book Categories", path: "/library/categories" },
      ]
    },
    { 
      name: "Inventory", 
      icon: Warehouse, 
      path: "#",
      children: [
        { name: "Inventory Dashboard", path: "/inventory/dashboard" },
        { name: "Issue Item", path: "/inventory/issue-item" },
        { name: "Add Stock", path: "/inventory/add-stock" },
        { name: "Item List", path: "/inventory/item-list" },
        { name: "Item Categories", path: "/inventory/item-categories" },
        { name: "Suppliers", path: "/inventory/suppliers" },
        { name: "Point of Sale", path: "/inventory/point-of-sale" },
        { name: "Sales History", path: "/inventory/sales-history" },
        { name: "Purchase Orders", path: "/inventory/purchase-orders" },
        { name: "Goods Receipts", path: "/inventory/goods-receipts" },
        { name: "Supplier Payments", path: "/inventory/supplier-payments" },
      ]
    },
    { 
      name: "Transport", 
      icon: Bus, 
      path: "#",
      children: [
        { name: "Transport Dashboard", path: "/transport/dashboard" },
        { name: "Live Operations", path: "/transport/live-operations" },
        { name: "Manage Vehicles", path: "/transport/manage-vehicles" },
        { name: "Manage Routes", path: "/transport/manage-routes" },
        { name: "Live Vehicle Tracking", path: "/transport/live-tracking" },
        { name: "Drivers", path: "/transport/drivers" },
      ]
    },
    { 
      name: "Hostel", 
      icon: Building, 
      path: "#",
      children: [
        { name: "Hostel Dashboard", path: "/hostel/dashboard" },
        { name: "Student Allocation", path: "/hostel/student-allocation" },
        { name: "Manage Rooms", path: "/hostel/manage-rooms" },
        { name: "Room Types", path: "/hostel/room-types" },
        { name: "Manage Hostels", path: "/hostel/manage-hostels" },
      ]
    },
    { 
      name: "Help Center", 
      icon: HelpCircle, 
      path: "#",
      children: [
        { name: "Manage Categories", path: "/help-center/categories" },
        { name: "Browse Articles", path: "/help-center/articles" },
        { name: "AI Chatbot", path: "/help-center/ai-chatbot" },
      ]
    },
    { 
      name: "Asset Management", 
      icon: Package, 
      path: "#",
      children: [
        { name: "Asset Dashboard", path: "/asset-management/dashboard" },
        { name: "Asset Register", path: "/asset-management/register" },
        { name: "Asset Categories", path: "/asset-management/categories" },
        { name: "Asset Assignments", path: "/asset-management/assignments" },
        { name: "Asset Depreciation", path: "/asset-management/depreciation" },
        { name: "Asset Maintenance", path: "/asset-management/maintenance" },
        { name: "Asset Disposals", path: "/asset-management/disposals" },
        { name: "Asset Audits", path: "/asset-management/audits" },
        { name: "Asset Reports", path: "/asset-management/reports" },
      ]
    },
    { 
      name: "Engagement", 
      icon: Megaphone, 
      path: "#",
      children: [
        { name: "Creatives", path: "/engagement/creatives" },
        { name: "Birthday Manager", path: "/engagement/birthday-manager" },
        { name: "Festival Greetings", path: "/engagement/festival-greetings" },
        { name: "Auto-send Settings", path: "/engagement/auto-send-settings" },
      ]
    },
    { 
      name: "CCTV", 
      icon: Cctv, 
      path: "#",
      children: [
        { name: "Camera Wall", path: "/cctv/camera-wall" },
        { name: "CCTV Cameras", path: "/cctv/cameras" },
        { name: "CCTV Access Log", path: "/cctv/access-log" },
      ]
    },
    { name: "Reports & Analytics", icon: PieChart, path: "/reports" },
  ];

  const systemNav = [
    { 
      name: "Settings & Billing", 
      icon: Settings, 
      path: "#",
      children: [
        { name: "School Settings", path: "/settings/school-settings" },
        { name: "Custom Fields", path: "/settings/custom-fields" },
        { name: "Roles & Permissions", path: "/settings/roles-permissions" },
        { name: "Payment Gateway", path: "/settings/payment-gateway" },
        { name: "Notification Settings", path: "/settings/notification-settings" },
        { name: "Admission Settings", path: "/settings/admission-settings" },
        { name: "Admission Form Fields", path: "/settings/admission-form-fields" },
        { name: "Audit Trail", path: "/settings/audit-trail" },
        { name: "Subscription", path: "/settings/subscription" },
        { name: "Subscription History", path: "/settings/subscription-history" },
        { name: "Module Settings", path: "/settings/module-settings" },
        { name: "Content Safety", path: "/settings/content-safety" },
      ]
    },
    { name: "Backup Management", icon: HardDrive, path: "/backup" },
  ];

  const communicationNav = [
    { name: "Comms Wallet", icon: Wallet, path: "/comms-wallet" },
    { name: "Chat Moderation", icon: MessageSquare, path: "/chat-moderation" },
    { name: "Messages", icon: MessageCircle, path: "/messages" },
  ];

  const accountNav = [
    { name: "My Profile", icon: User, path: "/profile" },
  ];

  const renderNavSection = (title, items) => (
    <div className="mb-4">
      <h3 className="px-4 text-[11px] font-semibold text-gray-500 mb-2 tracking-wider">{title}</h3>
      <ul className="space-y-0.5">
        {items.map((item) => (
          <li key={item.name}>
            {item.children ? (
              <div>
                <button 
                  onClick={() => toggleMenu(item.name)}
                  className={`w-full flex items-center justify-between px-4 py-2 text-sm transition-colors border-l-2 ${
                    openMenu === item.name ? 'border-orange-500 text-white bg-gray-800/30' : 'border-transparent text-gray-300 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="w-4 h-4" />
                    {item.name}
                  </div>
                  {openMenu === item.name ? (
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  ) : (
                    <ChevronLeft className="w-4 h-4 text-gray-500" />
                  )}
                </button>
                {/* Dropdown Items */}
                {openMenu === item.name && (
                  <ul className="mt-1 mb-2 bg-[#313743] py-1 border-l-2 border-orange-500 ml-0.5">
                    {item.children.map((child) => (
                      <li key={child.name}>
                        <NavLink
                          to={child.path}
                          className={({ isActive }) => 
                            `flex items-center gap-3 pl-11 pr-4 py-2 text-[13px] hover:text-white transition-colors ${
                              isActive ? 'text-white bg-white/5' : 'text-gray-400'
                            }`
                          }
                        >
                          <ChevronsRight className="w-3 h-3 opacity-50" />
                          {child.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <NavLink 
                to={item.path}
                className={({ isActive }) => 
                  `flex items-center justify-between px-4 py-2 text-sm hover:text-white transition-colors border-l-2 ${
                    isActive && item.name === 'Assessment' ? 'border-orange-500 text-white bg-gray-800/30' : 'border-transparent text-gray-300'
                  }`
                }
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </div>
                <ChevronLeft className="w-4 h-4 text-gray-500" />
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <aside className="w-64 bg-[#2b303b] text-gray-300 h-screen flex flex-col overflow-y-auto flex-shrink-0">
      {/* Logo Area */}
      <div className="flex items-center gap-3 px-4 py-4 border-b border-gray-700/50">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-400 to-yellow-500 flex items-center justify-center text-white font-bold text-xs relative overflow-hidden">
           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#2b303b] rounded-full"></div>
        </div>
        <span className="text-white font-semibold tracking-wide">ACS School</span>
      </div>

      {/* Search Menu */}
      <div className="px-4 py-4">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search Menu..." 
            className="w-full bg-[#3b414f] text-sm text-white placeholder-gray-400 rounded-md py-1.5 pl-3 pr-8 focus:outline-none focus:ring-1 focus:ring-gray-500"
          />
          <Search className="absolute right-2 top-1.5 w-4 h-4 text-gray-400" />
        </div>
      </div>

      {/* Navigation Sections */}
      <div className="flex-1 py-2 pb-8">
        {/* Main Navigation (Special render without chevrons) */}
        <div className="mb-4">
          <h3 className="px-4 text-[11px] font-semibold text-gray-500 mb-2 tracking-wider">MAIN NAVIGATION</h3>
          <ul className="space-y-0.5">
            {mainNav.map((item) => (
              <li key={item.name}>
                <NavLink 
                  to={item.path}
                  className={({ isActive }) => 
                    `flex items-center gap-3 px-4 py-2 text-sm hover:text-white transition-colors border-l-2 ${
                      isActive && item.path !== "/erp-navigator" && item.path !== "/contact-support" ? 'border-orange-500 text-white bg-gray-800/30' : 'border-transparent text-gray-300'
                    }`
                  }
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {renderNavSection("MANAGEMENT", managementNav)}
        {renderNavSection("MODULES", modulesNav)}
        {renderNavSection("SYSTEM", systemNav)}
        {renderNavSection("COMMUNICATION", communicationNav)}
        {renderNavSection("ACCOUNT", accountNav)}
      </div>
    </aside>
  );
};

export default Sidebar;
