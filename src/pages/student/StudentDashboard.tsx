import DashboardLayout from "@/components/DashboardLayout";
import StatCard from "@/components/StatCard";
import { tasks, feedbacks } from "@/lib/data";
import { ListTodo, CheckCircle2, Clock, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const statusStyles: Record<string, string> = {
  completed: "bg-success/10 text-success border-success/20",
  in_progress: "bg-warning/10 text-warning border-warning/20",
  todo: "bg-muted text-muted-foreground border-border",
};

const StudentDashboard = () => {
  const completed = tasks.filter((t) => t.status === "completed").length;
  const inProgress = tasks.filter((t) => t.status === "in_progress").length;

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Student Dashboard</h1>
        <p className="text-muted-foreground mt-1">Track your internship progress.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatCard title="Total Tasks" value={tasks.length} icon={ListTodo} />
        <StatCard title="Completed" value={completed} icon={CheckCircle2} trend="up" trendValue="+2 this week" />
        <StatCard title="In Progress" value={inProgress} icon={Clock} />
        <StatCard title="Feedback" value={feedbacks.length} icon={MessageSquare} />
      </div>

      {/* Recent Tasks */}
      <div className="rounded-xl border border-border bg-card shadow-card">
        <div className="border-b border-border px-6 py-4">
          <h2 className="text-lg font-semibold text-card-foreground">Recent Tasks</h2>
        </div>
        <div className="divide-y divide-border">
          {tasks.slice(0, 4).map((task) => (
            <div key={task.id} className="flex items-center justify-between px-6 py-4 transition-colors hover:bg-secondary/30">
              <div>
                <p className="text-sm font-medium text-card-foreground">{task.title}</p>
                <p className="text-xs text-muted-foreground mt-0.5">Due: {task.dueDate}</p>
              </div>
              <Badge className={`border ${statusStyles[task.status]} capitalize`} variant="outline">
                {task.status.replace("_", " ")}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
