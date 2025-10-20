// components/profile/ProfileImage.tsx
import type { ProfileImageProps } from '@/types/profile';
import { Edit } from 'lucide-react';

const ProfileImage = ({ image, name, isAdmin }: ProfileImageProps) => {
  return (
    <div className="flex justify-center lg:justify-end">
      <div className="relative group"> {/* Original group for hovers */}
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-300" /> {/* Original blur/hover */}
        <img
          src={image}
          alt={name}
          className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-white shadow-2xl group-hover:shadow-3xl transition-shadow" 
        />
        {isAdmin && (
          <button className="absolute bottom-4 right-4 bg-white rounded-full p-3 shadow-lg hover:bg-indigo-50 transition-all duration-300 hover:scale-105"> {/* Added scale hover */}
            <Edit className="w-5 h-5 text-indigo-600" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileImage;