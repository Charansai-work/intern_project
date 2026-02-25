import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/lib/auth-context";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminInternships from "./pages/admin/AdminInternships";
import AdminInterns from "./pages/admin/AdminInterns";
import AdminEvaluations from "./pages/admin/AdminEvaluations";
import StudentDashboard from "./pages/student/StudentDashboard";
import StudentInternships from "./pages/student/StudentInternships";
import StudentTasks from "./pages/student/StudentTasks";
import StudentFeedback from "./pages/student/StudentFeedback";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/internships" element={<AdminInternships />} />
            <Route path="/admin/interns" element={<AdminInterns />} />
            <Route path="/admin/evaluations" element={<AdminEvaluations />} />
            <Route path="/student" element={<StudentDashboard />} />
            <Route path="/student/internships" element={<StudentInternships />} />
            <Route path="/student/tasks" element={<StudentTasks />} />
            <Route path="/student/feedback" element={<StudentFeedback />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
