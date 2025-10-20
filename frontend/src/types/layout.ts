//  types/layout.ts
export interface NavigationProps {
  showAbout: boolean;
  onNavigate: (section: string) => void;
  onAboutClick?: () => void;
}