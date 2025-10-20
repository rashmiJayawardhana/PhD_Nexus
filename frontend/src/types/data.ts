// types/data.ts
import type { Archive } from "./archive";
import type { Book } from "./book";
import type { Profile } from "./profile";
import type { Project } from "./project";
import type { Testimonial } from "./testimonial";

export interface AppData {
  profile: Profile;
  projects: Project[];
  testimonials: Testimonial[];
  books: Book[];
  archives: Archive[];
}