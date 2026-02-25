import DashboardLayout from "@/components/DashboardLayout";
import { feedbacks } from "@/lib/data";
import { Star } from "lucide-react";

const StudentFeedback = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Feedback</h1>
        <p className="text-muted-foreground mt-1">View evaluations and feedback from your mentors.</p>
      </div>

      {feedbacks.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card py-16 shadow-card">
          <p className="text-muted-foreground">No feedback yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {feedbacks.map((fb) => (
            <div key={fb.id} className="rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:shadow-md">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-sm font-semibold text-card-foreground">From: {fb.from}</p>
                  <p className="text-xs text-muted-foreground">{fb.date}</p>
                </div>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < fb.rating ? "fill-warning text-warning" : "text-border"}`} />
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{fb.message}</p>
            </div>
          ))}
        </div>
      )}
    </DashboardLayout>
  );
};

export default StudentFeedback;
