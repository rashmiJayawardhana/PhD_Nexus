// components/profile/SocialLinks.tsx
import type { SocialLinksProps } from '@/types/profile';
import { Mail, Linkedin, Twitter, type LucideIcon } from 'lucide-react';

interface Link {
  icon: LucideIcon;
  href: string;
  label: string;
  external?: boolean;
}

const SocialLinks = ({ contacts }: SocialLinksProps) => {
  const links: Link[] = [
    { 
      icon: Mail, 
      href: `mailto:${contacts.email}`,
      label: 'Email'
    },
    { 
      icon: Linkedin, 
      href: `https://${contacts.linkedin}`,
      label: 'LinkedIn',
      external: true
    },
    { 
      icon: Twitter, 
      href: `https://twitter.com/${contacts.twitter}`,
      label: 'Twitter',
      external: true
    }
  ];

  return (
    <div className="flex gap-4 justify-center lg:justify-start">
      {links.map((link) => {
        const IconComponent = link.icon;
        return (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300" 
            aria-label={link.label}
          >
            <IconComponent className="w-6 h-6 text-indigo-600" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;