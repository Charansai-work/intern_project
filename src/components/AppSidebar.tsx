import { useAuth } from "@/lib/auth-context";
import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Briefcase,
  Users,
  ClipboardCheck,
  MessageSquare,
  LogOut,
  GraduationCap,
  ListTodo,
  Star,
} from "lucide-react";

const AppSidebar = () => {
  const { role, userName, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const adminLinks = [
    { label: "Dashboard", icon: LayoutDashboard, path: "/admin" },
    { label: "Internships", icon: Briefcase, path: "/admin/internships" },
    { label: "Interns", icon: Users, path: "/admin/interns" },
    { label: "Evaluations", icon: ClipboardCheck, path: "/admin/evaluations" },
  ];

  const studentLinks = [
    { label: "Dashboard", icon: LayoutDashboard, path: "/student" },
    { label: "Internships", icon: GraduationCap, path: "/student/internships" },
    { label: "My Tasks", icon: ListTodo, path: "/student/tasks" },
    { label: "Feedback", icon: MessageSquare, path: "/student/feedback" },
  ];

  const links = role === "admin" ? adminLinks : studentLinks;

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-border bg-card">
      <div className="flex items-center gap-3 border-b border-border px-6 py-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary">
          <Briefcase className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-sm font-bold text-card-foreground">InternHub</h2>
          <p className="text-xs text-muted-foreground capitalize">{role} Portal</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <button
              key={link.path}
              onClick={() => navigate(link.path)}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
              }`}
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </button>
          );
        })}
      </nav>

      <div className="border-t border-border p-4">
        <div className="mb-3 flex items-center gap-3 px-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
            {userName.split(" ").map(n => n[0]).join("").slice(0, 2)}
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-card-foreground">{userName}</p>
            <p className="text-xs text-muted-foreground capitalize">{role}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </button>
      </div>
    </aside>
  );
};

export default AppSidebar;
