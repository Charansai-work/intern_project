export interface Internship {
  id: string;
  title: string;
  company: string;
  description: string;
  skills: string[];
  duration: string;
  status: "open" | "closed";
  applicants: number;
  postedDate: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: "todo" | "in_progress" | "completed";
  dueDate: string;
  internshipId: string;
  assignedTo: string;
}

export interface Feedback {
  id: string;
  from: string;
  to: string;
  message: string;
  rating: number;
  date: string;
  internshipId: string;
}

export interface Intern {
  id: string;
  name: string;
  email: string;
  avatar: string;
  internshipId: string;
  progress: number;
  tasksCompleted: number;
  totalTasks: number;
}

export const internships: Internship[] = [
  {
    id: "1",
    title: "Frontend Developer Intern",
    company: "TechCorp",
    description: "Work on React-based web applications with a modern design system.",
    skills: ["React", "TypeScript", "Tailwind CSS"],
    duration: "3 months",
    status: "open",
    applicants: 12,
    postedDate: "2026-02-10",
  },
  {
    id: "2",
    title: "Data Analytics Intern",
    company: "DataFlow Inc.",
    description: "Analyze large datasets and create insightful dashboards.",
    skills: ["Python", "SQL", "Tableau"],
    duration: "6 months",
    status: "open",
    applicants: 8,
    postedDate: "2026-02-15",
  },
  {
    id: "3",
    title: "UX Research Intern",
    company: "DesignLab",
    description: "Conduct user research and usability testing for digital products.",
    skills: ["Figma", "User Research", "Prototyping"],
    duration: "4 months",
    status: "closed",
    applicants: 20,
    postedDate: "2026-01-20",
  },
  {
    id: "4",
    title: "Backend Engineer Intern",
    company: "CloudStack",
    description: "Build scalable APIs and microservices infrastructure.",
    skills: ["Node.js", "PostgreSQL", "Docker"],
    duration: "3 months",
    status: "open",
    applicants: 15,
    postedDate: "2026-02-18",
  },
];

export const tasks: Task[] = [
  { id: "t1", title: "Set up development environment", description: "Install all necessary tools and dependencies", status: "completed", dueDate: "2026-02-20", internshipId: "1", assignedTo: "Alice" },
  { id: "t2", title: "Build login page", description: "Create responsive login page with form validation", status: "completed", dueDate: "2026-02-22", internshipId: "1", assignedTo: "Alice" },
  { id: "t3", title: "Implement dashboard UI", description: "Design and implement the main dashboard interface", status: "in_progress", dueDate: "2026-02-28", internshipId: "1", assignedTo: "Alice" },
  { id: "t4", title: "API integration", description: "Connect frontend with backend REST APIs", status: "todo", dueDate: "2026-03-05", internshipId: "1", assignedTo: "Alice" },
  { id: "t5", title: "Write unit tests", description: "Add comprehensive test coverage for components", status: "todo", dueDate: "2026-03-10", internshipId: "1", assignedTo: "Alice" },
];

export const feedbacks: Feedback[] = [
  { id: "f1", from: "Dr. Smith", to: "Alice", message: "Excellent progress on the login page. Clean code and great attention to UX details.", rating: 5, date: "2026-02-23", internshipId: "1" },
  { id: "f2", from: "Dr. Smith", to: "Alice", message: "Good start on the dashboard. Consider adding more accessibility features.", rating: 4, date: "2026-02-25", internshipId: "1" },
];

export const interns: Intern[] = [
  { id: "i1", name: "Alice Johnson", email: "alice@email.com", avatar: "AJ", internshipId: "1", progress: 45, tasksCompleted: 2, totalTasks: 5 },
  { id: "i2", name: "Bob Chen", email: "bob@email.com", avatar: "BC", internshipId: "2", progress: 30, tasksCompleted: 1, totalTasks: 4 },
  { id: "i3", name: "Carol Davis", email: "carol@email.com", avatar: "CD", internshipId: "4", progress: 60, tasksCompleted: 3, totalTasks: 5 },
  { id: "i4", name: "David Kim", email: "david@email.com", avatar: "DK", internshipId: "1", progress: 70, tasksCompleted: 4, totalTasks: 5 },
];
