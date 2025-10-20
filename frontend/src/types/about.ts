// types/about.ts
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import type { Profile } from "./profile";

// About Components
export type AboutColor = 'amber' | 'indigo' | 'purple' | 'green' | 'pink';

export interface AboutSectionProps {
  title: string;
  children: ReactNode;
  color?: AboutColor;
  icon?: LucideIcon;
}

export interface CollapsibleContentProps {
  trigger: string;
  children: ReactNode;
}

export interface AboutPageProps {
  profile: Profile;
  onBack: () => void;
}