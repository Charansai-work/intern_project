import DashboardLayout from "@/components/DashboardLayout";
import StatCard from "@/components/StatCard";
import { internships, interns, tasks } from "@/lib/data";
import { Briefcase, Users, ListTodo, TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const AdminDashboard = () => {
  const openInternships = internships.filter((i) => i.status === "open").length;
  const completedTasks = tasks.filter((t) => t.status === "completed").length;

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
        <p className="text-muted-foreground mt-1">Overview of your internship programs.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatCard title="Total Internships" value={internships.length} icon={Briefcase} trend="up" trendValue="+2 this month" />
        <StatCard title="Active Interns" value={interns.length} icon={Users} trend="up" trendValue="+3 this week" />
        <StatCard title="Tasks Completed" value={completedTasks} subtitle={`of ${tasks.length} total`} icon={ListTodo} />
        <StatCard title="Avg. Progress" value="51%" icon={TrendingUp} trend="up" trendValue="+8%" />
      </div>

      {/* Recent Interns */}
      <div className="rounded-xl border border-border bg-card shadow-card">
        <div className="border-b border-border px-6 py-4">
          <h2 className="text-lg font-semibold text-card-foreground">Intern Progress</h2>
        </div>
        <div className="divide-y divide-border">
          {interns.map((intern) => {
            const internship = internships.find((i) => i.id === intern.internshipId);
            return (
              <div key={intern.id} className="flex items-center gap-4 px-6 py-4 transition-colors hover:bg-secondary/50">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground flex-shrink-0">
                  {intern.avatar}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-card-foreground">{intern.name}</p>
                    <Badge variant="secondary" className="text-xs">{internship?.title}</Badge>
                  </div>
                  <div className="mt-2 flex items-center gap-3">
                    <Progress value={intern.progress} className="h-2 flex-1" />
                    <span className="text-xs font-medium text-muted-foreground w-10 text-right">{intern.progress}%</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{intern.tasksCompleted}/{intern.totalTasks} tasks completed</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
