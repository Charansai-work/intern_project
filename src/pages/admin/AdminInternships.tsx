import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { internships as initialInternships, Internship } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Users, Clock } from "lucide-react";

const AdminInternships = () => {
  const [internships, setInternships] = useState<Internship[]>(initialInternships);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ title: "", company: "", description: "", duration: "", skills: "" });

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const newInternship: Internship = {
      id: String(Date.now()),
      title: form.title,
      company: form.company,
      description: form.description,
      skills: form.skills.split(",").map((s) => s.trim()),
      duration: form.duration,
      status: "open",
      applicants: 0,
      postedDate: new Date().toISOString().slice(0, 10),
    };
    setInternships([newInternship, ...internships]);
    setForm({ title: "", company: "", description: "", duration: "", skills: "" });
    setOpen(false);
  };

  return (
    <DashboardLayout>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Internships</h1>
          <p className="text-muted-foreground mt-1">Manage your internship opportunities.</p>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="gradient-primary border-0 text-primary-foreground">
              <Plus className="mr-2 h-4 w-4" /> New Internship
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Internship</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAdd} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label>Title</Label>
                <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
              </div>
              <div className="space-y-2">
                <Label>Company</Label>
                <Input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} required />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Duration</Label>
                  <Input value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} placeholder="e.g. 3 months" required />
                </div>
                <div className="space-y-2">
                  <Label>Skills (comma-separated)</Label>
                  <Input value={form.skills} onChange={(e) => setForm({ ...form, skills: e.target.value })} placeholder="React, TypeScript" required />
                </div>
              </div>
              <Button type="submit" className="w-full gradient-primary border-0 text-primary-foreground">Create</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {internships.map((internship) => (
          <div key={internship.id} className="rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:shadow-lg hover:-translate-y-0.5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold text-card-foreground">{internship.title}</h3>
                <p className="text-sm text-muted-foreground">{internship.company}</p>
              </div>
              <Badge variant={internship.status === "open" ? "default" : "secondary"}>
                {internship.status}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{internship.description}</p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {internship.skills.map((s) => (
                <span key={s} className="rounded-md bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground">{s}</span>
              ))}
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{internship.duration}</span>
              <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" />{internship.applicants} applicants</span>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default AdminInternships;
