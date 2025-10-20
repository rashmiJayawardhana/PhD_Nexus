// components/profile/ProfileHero.tsx
import AnimatedBackground from '../common/AnimatedBackground'; // Already there
import ProfileImage from './ProfileImage';
import ProfileInfo from './ProfileInfo';
import SocialLinks from './SocialLinks';
import Button from '../common/Button';
import { ArrowUpRight, Briefcase, Award } from 'lucide-react';
import type { ProfileHeroProps } from '@/types/profile';

const ProfileHero = ({ profile, isAdmin, onAboutClick }: ProfileHeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"> {/* Original overflow-hidden */}
      <AnimatedBackground /> {/* Ensures blobs */}
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ProfileImage 
            image={profile.image}
            name={profile.name}
            isAdmin={isAdmin}
          />
          
          <div className="text-center lg:text-left space-y-6">
            <ProfileInfo profile={profile} />
            
            <SocialLinks contacts={profile.contact} />
            
            {/* Enhanced with inline icons + transitions */}
            <div className="flex gap-6 text-sm text-slate-600 justify-center lg:justify-start transition-all">
              <div className="hover:text-indigo-600 transition-colors"> {/* Added hover */}
                <Briefcase className="w-4 h-4 inline mr-2" />
                {profile.institution}
              </div>
              <div className="hover:text-indigo-600 transition-colors">
                <Award className="w-4 h-4 inline mr-2" />
                {profile.yearsActive}
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <Button
                onClick={onAboutClick}
                size="lg"
                icon={ArrowUpRight}
                iconPosition="right"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-105 shadow-lg hover:shadow-xl transition-all"
              >
                <span>👋</span>
                About Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileHero;