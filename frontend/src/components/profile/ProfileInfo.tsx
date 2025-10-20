// components/profile/ProfileInfo.tsx
import type { ProfileInfoProps } from "@/types/profile";

const ProfileInfo = ({ profile }: ProfileInfoProps) => {
  return (
    <>
      <div className="inline-block">
        <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2"> {/* Original gradient text */}
          {profile.name}
        </h1>
        <div className="h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full" /> {/* Original underline */}
      </div>
      
      <p className="text-xl lg:text-2xl text-slate-600 font-light">
        {profile.title}
      </p>
      
      <p className="text-lg text-slate-500 italic">
        {profile.subtitle}
      </p>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-indigo-100"> {/* Original backdrop + shadow */}
        <p className="text-slate-700 leading-relaxed"> {/* Original leading */}
          {profile.bio}
        </p>
      </div>
    </>
  );
};

export default ProfileInfo;