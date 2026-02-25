import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { tasks as initialTasks, Task } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, Clock } from "lucide-react";

const statusConfig = {
  todo: { icon: Circle, label: "To Do", style: "bg-muted text-muted-foreground border-border" },
  in_progress: { icon: Clock, label: "In Progress", style: "bg-warning/10 text-warning border-warning/20" },
  completed: { icon: CheckCircle2, label: "Completed", style: "bg-success/10 text-success border-success/20" },
};

const StudentTasks = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const updateStatus = (id: string, status: Task["status"]) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status } : t)));
  };

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">My Tasks</h1>
        <p className="text-muted-foreground mt-1">Manage and track your assigned tasks.</p>
      </div>

      <div className="space-y-3">
        {tasks.map((task) => {
          const config = statusConfig[task.status];
          const Icon = config.icon;
          return (
            <div key={task.id} className="rounded-xl border border-border bg-card p-5 shadow-card transition-all hover:shadow-md">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <Icon className={`h-5 w-5 mt-0.5 flex-shrink-0 ${task.status === "completed" ? "text-success" : task.status === "in_progress" ? "text-warning" : "text-muted-foreground"}`} />
                  <div>
                    <p className={`text-sm font-medium ${task.status === "completed" ? "line-through text-muted-foreground" : "text-card-foreground"}`}>{task.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{task.description}</p>
                    <p className="text-xs text-muted-foreground mt-2">Due: {task.dueDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={`border ${config.style} capitalize`} variant="outline">{config.label}</Badge>
                  {task.status === "todo" && (
                    <Button size="sm" variant="outline" onClick={() => updateStatus(task.id, "in_progress")}>Start</Button>
                  )}
                  {task.status === "in_progress" && (
                    <Button size="sm" variant="outline" onClick={() => updateStatus(task.id, "completed")}>Complete</Button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </DashboardLayout>
  );
};

export default StudentTasks;
