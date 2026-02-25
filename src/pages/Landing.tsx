import { useNavigate } from "react-router-dom";
import { Briefcase, Users, ClipboardCheck, ArrowRight, CheckCircle2, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Briefcase,
    title: "Internship Management",
    description: "Post opportunities, manage applications, and organize remote internship programs effortlessly.",
  },
  {
    icon: ClipboardCheck,
    title: "Task Tracking",
    description: "Assign tasks, monitor progress, and keep interns on track with clear milestones.",
  },
  {
    icon: Users,
    title: "Mentor Feedback",
    description: "Provide real-time evaluations and constructive feedback to guide intern growth.",
  },
];

const benefits = [
  "Real-time progress tracking",
  "Structured evaluation system",
  "Seamless remote collaboration",
  "Comprehensive reporting",
];

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <header className="fixed top-0 z-50 w-full border-b border-border glass">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
              <Briefcase className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground">InternHub</span>
          </div>
          <Button onClick={() => navigate("/login")} size="sm">
            Get Started <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-card mb-6 animate-fade-up">
            <Zap className="h-3 w-3 text-primary" />
            Remote Internship Platform
          </div>
          <h1 className="mx-auto max-w-3xl text-5xl font-extrabold leading-tight text-foreground animate-fade-up md:text-6xl" style={{ animationDelay: "0.1s" }}>
            Manage Remote Internships{" "}
            <span className="bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
              Effortlessly
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.2s" }}>
            A comprehensive platform for task tracking, progress reports, and mentor feedback — facilitating seamless remote internship experiences.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" onClick={() => navigate("/login")} className="gradient-primary border-0 text-primary-foreground shadow-glow">
              Start as Admin <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/login")}>
              Join as Student
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-foreground">Everything You Need</h2>
            <p className="mt-3 text-muted-foreground">Powerful tools to manage every aspect of remote internships.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="mb-4 inline-flex rounded-xl bg-accent p-3">
                  <f.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-secondary/50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Built for Remote Teams</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Whether you're an employer managing multiple interns or a student looking to grow your career, InternHub provides the tools you need.
              </p>
              <ul className="mt-8 space-y-4">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <Shield className="h-8 w-8 text-primary mb-3" />
                <p className="text-2xl font-bold text-card-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Active Internships</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card mt-6">
                <Users className="h-8 w-8 text-info mb-3" />
                <p className="text-2xl font-bold text-card-foreground">2,000+</p>
                <p className="text-sm text-muted-foreground">Students Placed</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <Zap className="h-8 w-8 text-warning mb-3" />
                <p className="text-2xl font-bold text-card-foreground">98%</p>
                <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card mt-6">
                <ClipboardCheck className="h-8 w-8 text-success mb-3" />
                <p className="text-2xl font-bold text-card-foreground">10K+</p>
                <p className="text-sm text-muted-foreground">Tasks Completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm text-muted-foreground">© 2026 InternHub. Built for remote internship management.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
