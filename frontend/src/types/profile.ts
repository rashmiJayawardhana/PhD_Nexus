// types/profile.ts
export interface ProfileContact {
  email: string;
  linkedin: string;
  twitter: string;
}

export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  image: string;
  contact: ProfileContact;
  institution: string;
  yearsActive: string;
}

// Profile Components
export interface ProfileImageProps {
  image: string;
  name: string;
  isAdmin: boolean;
}

export interface ProfileInfoProps {
  profile: Profile;
}

export interface SocialLinksProps {
  contacts: ProfileContact;
}

export interface ProfileHeroProps {
  profile: Profile;
  isAdmin: boolean;
  onAboutClick: () => void;
}
