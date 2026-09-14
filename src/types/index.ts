export interface CoursePreview {
  id: string;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: string;
}

export interface UserState {
  isAuthenticated: boolean;
  user?: {
    id: string;
    email: string;
    name: string;
  };
}
