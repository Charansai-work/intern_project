import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/lib/auth-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Briefcase, GraduationCap, Building2 } from "lucide-react";

const Login = () => {
  const [selectedRole, setSelectedRole] = useState<"admin" | "student" | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedRole || !name) return;
    login(selectedRole, name);
    navigate(selectedRole === "admin" ? "/admin" : "/student");
  };

  return (
    <div className="flex min-h-screen">
      {/* Left panel */}
      <div className="hidden w-1/2 items-center justify-center gradient-hero p-12 lg:flex">
        <div className="max-w-md text-center">
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl gradient-primary shadow-glow">
            <Briefcase className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold text-primary-foreground">InternHub</h1>
          <p className="mt-4 text-lg text-primary-foreground/70">
            Your all-in-one platform for managing remote internships, tracking progress, and providing meaningful evaluations.
          </p>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex flex-1 items-center justify-center px-6 py-12 bg-background">
        <div className="w-full max-w-md">
          <div className="mb-8 lg:hidden flex items-center gap-2.5 justify-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
              <Briefcase className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground">InternHub</span>
          </div>

          <h2 className="text-2xl font-bold text-foreground">Welcome back</h2>
          <p className="mt-2 text-sm text-muted-foreground">Choose your role and sign in to continue.</p>

          {/* Role Selection */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setSelectedRole("admin")}
              className={`flex flex-col items-center gap-2 rounded-xl border-2 p-5 transition-all duration-200 ${
                selectedRole === "admin"
                  ? "border-primary bg-accent shadow-glow"
                  : "border-border bg-card hover:border-primary/30"
              }`}
            >
              <Building2 className={`h-7 w-7 ${selectedRole === "admin" ? "text-primary" : "text-muted-foreground"}`} />
              <span className={`text-sm font-semibold ${selectedRole === "admin" ? "text-accent-foreground" : "text-card-foreground"}`}>
                Admin
              </span>
              <span className="text-xs text-muted-foreground">Employer</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedRole("student")}
              className={`flex flex-col items-center gap-2 rounded-xl border-2 p-5 transition-all duration-200 ${
                selectedRole === "student"
                  ? "border-primary bg-accent shadow-glow"
                  : "border-border bg-card hover:border-primary/30"
              }`}
            >
              <GraduationCap className={`h-7 w-7 ${selectedRole === "student" ? "text-primary" : "text-muted-foreground"}`} />
              <span className={`text-sm font-semibold ${selectedRole === "student" ? "text-accent-foreground" : "text-card-foreground"}`}>
                Student
              </span>
              <span className="text-xs text-muted-foreground">Intern</span>
            </button>
          </div>

          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <Button type="submit" className="w-full gradient-primary border-0 text-primary-foreground" size="lg" disabled={!selectedRole || !name}>
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
