import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { feedbacks as initialFeedbacks, interns, Feedback } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Star } from "lucide-react";
import { useAuth } from "@/lib/auth-context";

const AdminEvaluations = () => {
  const { userName } = useAuth();
  const [feedbacks, setFeedbacks] = useState<Feedback[]>(initialFeedbacks);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ to: "", message: "", rating: "5" });

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const fb: Feedback = {
      id: String(Date.now()),
      from: userName,
      to: form.to,
      message: form.message,
      rating: Number(form.rating),
      date: new Date().toISOString().slice(0, 10),
      internshipId: "1",
    };
    setFeedbacks([fb, ...feedbacks]);
    setForm({ to: "", message: "", rating: "5" });
    setOpen(false);
  };

  return (
    <DashboardLayout>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Evaluations</h1>
          <p className="text-muted-foreground mt-1">Provide feedback and evaluate intern performance.</p>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="gradient-primary border-0 text-primary-foreground">
              <Plus className="mr-2 h-4 w-4" /> New Evaluation
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Write Evaluation</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAdd} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label>Intern</Label>
                <Select value={form.to} onValueChange={(v) => setForm({ ...form, to: v })}>
                  <SelectTrigger><SelectValue placeholder="Select intern" /></SelectTrigger>
                  <SelectContent>
                    {interns.map((i) => (
                      <SelectItem key={i.id} value={i.name}>{i.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Feedback</Label>
                <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} required />
              </div>
              <div className="space-y-2">
                <Label>Rating</Label>
                <Select value={form.rating} onValueChange={(v) => setForm({ ...form, rating: v })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {[5, 4, 3, 2, 1].map((r) => (
                      <SelectItem key={r} value={String(r)}>{r} Stars</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full gradient-primary border-0 text-primary-foreground" disabled={!form.to}>Submit</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-4">
        {feedbacks.map((fb) => (
          <div key={fb.id} className="rounded-xl border border-border bg-card p-6 shadow-card">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-sm font-medium text-card-foreground">{fb.from} → {fb.to}</p>
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
    </DashboardLayout>
  );
};

export default AdminEvaluations;
