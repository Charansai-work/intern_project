import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { internships } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const StudentInternships = () => {
  const [applied, setApplied] = useState<Set<string>>(new Set());

  const handleApply = (id: string) => {
    setApplied((prev) => new Set(prev).add(id));
    toast.success("Application submitted successfully!");
  };

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Browse Internships</h1>
        <p className="text-muted-foreground mt-1">Find and apply for remote internship opportunities.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {internships.map((internship) => (
          <div key={internship.id} className="rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:shadow-lg hover:-translate-y-0.5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold text-card-foreground">{internship.title}</h3>
                <p className="text-sm text-muted-foreground">{internship.company}</p>
              </div>
              <Badge variant={internship.status === "open" ? "default" : "secondary"}>{internship.status}</Badge>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{internship.description}</p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {internship.skills.map((s) => (
                <span key={s} className="rounded-md bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground">{s}</span>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{internship.duration}</span>
                <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" />{internship.applicants} applicants</span>
              </div>
              {internship.status === "open" && (
                applied.has(internship.id) ? (
                  <span className="flex items-center gap-1 text-xs font-medium text-success"><CheckCircle2 className="h-3.5 w-3.5" />Applied</span>
                ) : (
                  <Button size="sm" onClick={() => handleApply(internship.id)}>Apply</Button>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default StudentInternships;
