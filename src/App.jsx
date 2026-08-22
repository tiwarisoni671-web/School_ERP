import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import FinanceDashboard from "./pages/finance/FinanceDashboard";
import CollectFees from "./pages/finance/CollectFees";
import StudentFeeCollection from "./pages/finance/StudentFeeCollection";
import SearchDueFees from "./pages/finance/SearchDueFees";
import AllTransactions from "./pages/finance/AllTransactions";
import FeeReceipt from "./pages/finance/FeeReceipt";
import OnlineTransactions from "./pages/finance/OnlineTransactions";
import FeeChallans from "./pages/finance/FeeChallans";
import GenerateFeeChallan from "./pages/finance/GenerateFeeChallan";
import ChallanDetails from "./pages/finance/ChallanDetails";
import PrintChallan from "./pages/finance/PrintChallan";
import AssignFees from "./pages/finance/AssignFees";
import FeesCarryForward from "./pages/finance/FeesCarryForward";
import FeeGroups from "./pages/finance/FeeGroups";
import AddNewFeeGroup from "./pages/finance/AddNewFeeGroup";
import FeesDiscount from "./pages/finance/FeesDiscount";
import AddNewFeeDiscount from "./pages/finance/AddNewFeeDiscount";
import FeeTypes from "./pages/finance/FeeTypes";
import AddNewFeeType from "./pages/finance/AddNewFeeType";
import GenerateDueSlip from "./pages/finance/GenerateDueSlip";
import DueSlipHistory from "./pages/finance/DueSlipHistory";
import FeeDataAudit from "./pages/finance/FeeDataAudit";

// Accounts Module
import AccountsDashboard from "./pages/accounts/AccountsDashboard";
import Income from "./pages/accounts/Income";
import AddNewIncome from "./pages/accounts/AddNewIncome";
import Expense from "./pages/accounts/Expense";
import AddNewExpense from "./pages/accounts/AddNewExpense";
import IncomeHeads from "./pages/accounts/IncomeHeads";
import AddNewIncomeHead from "./pages/accounts/AddNewIncomeHead";
import ExpenseHeads from "./pages/accounts/ExpenseHeads";
import AddNewExpenseHead from "./pages/accounts/AddNewExpenseHead";
import BankAccounts from "./pages/accounts/BankAccounts";
import StudentDashboard from "./pages/students/StudentDashboard";
import SearchByPhoto from "./pages/students/SearchByPhoto";
import StudentAdmission from "./pages/students/StudentAdmission";
import CustomFields from "./pages/students/CustomFields";
import AddNewCustomField from "./pages/students/AddNewCustomField";
import StudentList from "./pages/students/StudentList";
import ParentsList from "./pages/students/ParentsList";
import AddParent from "./pages/students/AddParent";
import StudentAttendance from "./pages/students/StudentAttendance";
import BulkAttendanceUpload from "./pages/students/BulkAttendanceUpload";
import BehaviorRecords from "./pages/students/BehaviorRecords";
import AddBehaviorRecord from "./pages/students/AddBehaviorRecord";
import StudentHouses from "./pages/students/StudentHouses";
import AddStudentHouse from "./pages/students/AddStudentHouse";
import StudentCategories from "./pages/students/StudentCategories";
import AddStudentCategory from "./pages/students/AddStudentCategory";
import TCAndExit from "./pages/students/TCAndExit";
import StudentHealthRecords from "./pages/students/StudentHealthRecords";
import HealthDashboard from "./pages/students/HealthDashboard";

// Academics Module
import AcademicDashboard from "./pages/academics/AcademicDashboard";
import AddNewClass from "./pages/academics/AddNewClass";
import AcademicSessions from "./pages/academics/AcademicSessions";
import YearEndRollover from "./pages/academics/YearEndRollover";
import AddNewSession from "./pages/academics/AddNewSession";
import AcademicClasses from "./pages/academics/AcademicClasses";
import AcademicSections from "./pages/academics/AcademicSections";
import AddNewSection from "./pages/academics/AddNewSection";
import AcademicSubjects from "./pages/academics/AcademicSubjects";
import AddNewSubject from "./pages/academics/AddNewSubject";
import AssignSubjects from "./pages/academics/AssignSubjects";
import AssignElectives from "./pages/academics/AssignElectives";
import AssignTeacher from "./pages/academics/AssignTeacher";
import ManagePeriods from "./pages/academics/ManagePeriods";
import Timetable from "./pages/academics/Timetable";
import Promote from "./pages/academics/Promote";
import FrontOfficeDashboard from "./pages/front-office/FrontOfficeDashboard";
import AdmissionEnquiries from "./pages/front-office/AdmissionEnquiries";
import AddNewEnquiry from "./pages/front-office/AddNewEnquiry";
import EnquiryDetails from "./pages/front-office/EnquiryDetails";
import VisitorBook from "./pages/front-office/VisitorBook";
import AddVisitorEntry from "./pages/front-office/AddVisitorEntry";
import VisitorDetails from "./pages/front-office/VisitorDetails";
import Complaints from "./pages/front-office/Complaints";
import AddComplaint from "./pages/front-office/AddComplaint";
import ComplaintDetails from "./pages/front-office/ComplaintDetails";
import PostalRecords from "./pages/front-office/PostalRecords";
import AddPostalRecord from "./pages/front-office/AddPostalRecord";
import GatePasses from "./pages/front-office/GatePasses";
import GateTerminal from "./pages/front-office/GateTerminal";
import IssueGatePass from "./pages/front-office/IssueGatePass";
import GatePassDetails from "./pages/front-office/GatePassDetails";
import CampusWorkers from "./pages/front-office/CampusWorkers";
import RegisterCampusWorker from "./pages/front-office/RegisterCampusWorker";
import CampusWorkerDetails from "./pages/front-office/CampusWorkerDetails";
import CampusWorkerInOutLog from "./pages/front-office/CampusWorkerInOutLog";
import LeadDashboard from "./pages/leads/LeadDashboard";
import PipelineBoard from "./pages/leads/PipelineBoard";
import SourcesAndStages from "./pages/leads/SourcesAndStages";
import CbcDashboard from "./pages/cbc/CbcDashboard";
import StrandsAndOutcomes from "./pages/cbc/StrandsAndOutcomes";
import CbcAssessments from "./pages/cbc/CbcAssessments";
import AppsCenter from "./pages/AppsCenter";
import Messages from "./pages/Messages";
import ChatModeration from "./pages/ChatModeration";
import CommsWallet from "./pages/CommsWallet";
import ManageLiveClasses from "./pages/live-classes/ManageLiveClasses";

function App() {
  return (
    <Routes>
      <Route path="/front-office/gate-passes/terminal" element={<GateTerminal />} />
      
      {/* CBC Routes (Pure Outlet) */}
      <Route path="/cbc/dashboard" element={<CbcDashboard />} />
      <Route path="/cbc/strands-outcomes" element={<StrandsAndOutcomes />} />
      <Route path="/cbc/assessments" element={<CbcAssessments />} />

      <Route path="/" element={<MainLayout />}>
        {/* Dashboard will be rendered inside the Outlet of MainLayout */}
        <Route index element={<Dashboard />} />
        <Route path="/apps-center" element={<AppsCenter />} />
        <Route path="/apps-centera" element={<AppsCenter />} />
        <Route path="/live-classes/manage" element={<ManageLiveClasses />} />
        
        {/* specific routes */}
        <Route path="/finance/dashboard" element={<FinanceDashboard />} />
        <Route path="/finance/collect" element={<CollectFees />} />
        <Route path="/finance/collect/:id" element={<StudentFeeCollection />} />
        <Route path="/finance/search-due-fees" element={<SearchDueFees />} />
        <Route path="/finance/transactions" element={<AllTransactions />} />
        <Route path="/finance/receipt/:id" element={<FeeReceipt />} />
        <Route path="/finance/online-transactions" element={<OnlineTransactions />} />
        <Route path="/finance/challans" element={<FeeChallans />} />
        <Route path="/finance/generate-challan" element={<GenerateFeeChallan />} />
        <Route path="/finance/challan/:id" element={<ChallanDetails />} />
        <Route path="/finance/print-challan/:id" element={<PrintChallan />} />
        <Route path="/finance/assign" element={<AssignFees />} />
        <Route path="/finance/carry-forward" element={<FeesCarryForward />} />
        <Route path="/finance/groups" element={<FeeGroups />} />
        <Route path="/finance/groups/add" element={<AddNewFeeGroup />} />
        <Route path="/finance/discount" element={<FeesDiscount />} />
        <Route path="/finance/discount/add" element={<AddNewFeeDiscount />} />
        <Route path="/finance/types" element={<FeeTypes />} />
        <Route path="/finance/types/add" element={<AddNewFeeType />} />
        <Route path="/finance/generate-slip" element={<GenerateDueSlip />} />
        <Route path="/finance/slip-history" element={<DueSlipHistory />} />
        <Route path="/finance/audit" element={<FeeDataAudit />} />

        {/* Accounts module routes */}
        <Route path="/accounts/dashboard" element={<AccountsDashboard />} />
        <Route path="/accounts/income" element={<Income />} />
        <Route path="/accounts/income/add" element={<AddNewIncome />} />
        <Route path="/accounts/expense" element={<Expense />} />
        <Route path="/accounts/expense/add" element={<AddNewExpense />} />
        <Route path="/accounts/income-heads" element={<IncomeHeads />} />
        <Route path="/accounts/income-heads/add" element={<AddNewIncomeHead />} />
        <Route path="/accounts/expense-heads" element={<ExpenseHeads />} />
        <Route path="/accounts/expense-heads/add" element={<AddNewExpenseHead />} />
        <Route path="/accounts/bank-accounts" element={<BankAccounts />} />

        {/* Student Module */}
        <Route path="/students/dashboard" element={<StudentDashboard />} />
        <Route path="/students/list" element={<StudentList />} />
        <Route path="/students/search-photo" element={<SearchByPhoto />} />
        <Route path="/students/admission" element={<StudentAdmission />} />
        <Route path="/students/custom-fields" element={<CustomFields />} />
        <Route path="/students/custom-fields/add" element={<AddNewCustomField />} />
        <Route path="/students/parents" element={<ParentsList />} />
        <Route path="/students/parents/add" element={<AddParent />} />
        <Route path="/students/attendance" element={<StudentAttendance />} />
        <Route path="/students/attendance/import" element={<BulkAttendanceUpload />} />
        <Route path="/students/behavior" element={<BehaviorRecords />} />
        <Route path="/students/behavior/add" element={<AddBehaviorRecord />} />
        <Route path="/students/houses" element={<StudentHouses />} />
        <Route path="/students/houses/add" element={<AddStudentHouse />} />
        <Route path="/students/categories" element={<StudentCategories />} />
        <Route path="/students/categories/add" element={<AddStudentCategory />} />
        <Route path="/students/tc" element={<TCAndExit />} />
        <Route path="/students/health" element={<StudentHealthRecords />} />
        <Route path="/students/health/:id" element={<HealthDashboard />} />

        {/* Academics Module */}
        <Route path="/academics/dashboard" element={<AcademicDashboard />} />
        <Route path="/academics/classes" element={<AcademicClasses />} />
        <Route path="/academics/classes/add" element={<AddNewClass />} />
        <Route path="/academics/sections" element={<AcademicSections />} />
        <Route path="/academics/sections/add" element={<AddNewSection />} />
        <Route path="/academics/subjects" element={<AcademicSubjects />} />
        <Route path="/academics/subjects/add" element={<AddNewSubject />} />
        <Route path="/academics/assign-subjects" element={<AssignSubjects />} />
        <Route path="/academics/assign-electives" element={<AssignElectives />} />
        <Route path="/academics/assign-class-teacher" element={<AssignTeacher />} />
        <Route path="/academics/manage-periods" element={<ManagePeriods />} />
        <Route path="/academics/timetable" element={<Timetable />} />
        <Route path="/academics/promote" element={<Promote />} />

        {/* Front Office Routes */}
        <Route path="/front-office/dashboard" element={<FrontOfficeDashboard />} />
        <Route path="/front-office/admission-enquiries" element={<AdmissionEnquiries />} />
        <Route path="/front-office/admission-enquiries/add" element={<AddNewEnquiry />} />
        <Route path="/front-office/admission-enquiries/view/:id" element={<EnquiryDetails />} />
        <Route path="/front-office/visitor-book" element={<VisitorBook />} />
        <Route path="/front-office/visitor-book/add" element={<AddVisitorEntry />} />
        <Route path="/front-office/visitor-book/edit/:id" element={<AddVisitorEntry />} />
        <Route path="/front-office/visitor-book/view/:id" element={<VisitorDetails />} />
        <Route path="/front-office/complaints" element={<Complaints />} />
        <Route path="/front-office/complaints/add" element={<AddComplaint />} />
        <Route path="/front-office/complaints/edit/:id" element={<AddComplaint />} />
        <Route path="/front-office/complaints/view/:id" element={<ComplaintDetails />} />
        <Route path="/front-office/postal-records" element={<PostalRecords />} />
        <Route path="/front-office/postal-records/add" element={<AddPostalRecord />} />
        <Route path="/front-office/postal-records/edit/:id" element={<AddPostalRecord />} />
        <Route path="/front-office/gate-passes" element={<GatePasses />} />
        <Route path="/front-office/gate-passes/issue" element={<IssueGatePass />} />
        <Route path="/front-office/gate-passes/view/:id" element={<GatePassDetails />} />
        <Route path="/front-office/campus-workers" element={<CampusWorkers />} />
        <Route path="/front-office/campus-workers/add" element={<RegisterCampusWorker />} />
        <Route path="/front-office/campus-workers/edit/:id" element={<RegisterCampusWorker />} />
        <Route path="/front-office/campus-workers/view/:id" element={<CampusWorkerDetails />} />
        <Route path="/front-office/campus-workers/logs" element={<CampusWorkerInOutLog />} />
        
        {/* Leads */}
        <Route path="/leads/dashboard" element={<LeadDashboard />} />
        <Route path="/leads/pipeline" element={<PipelineBoard />} />
        <Route path="/leads/sources-stages" element={<SourcesAndStages />} />
        
        {/* Communication Routes */}
        <Route path="/messages" element={<Messages />} />
        <Route path="/chat-moderation" element={<ChatModeration />} />
        <Route path="/comms-wallet" element={<CommsWallet />} />
        
        {/* Placeholder routes for other menu items to avoid 404s */}
        <Route path="/academics/sessions" element={<AcademicSessions />} />
        <Route path="/academics/sessions/add" element={<AddNewSession />} />
        <Route path="/academics/rollover" element={<YearEndRollover />} />

        {/* Placeholder routes for other menu items to avoid 404s */}
        <Route path="*" element={
          <div className="flex items-center justify-center h-full text-gray-400 text-2xl font-semibold">
            Hello
          </div>
        } />
      </Route>
    </Routes>
  );
}

export default App;
