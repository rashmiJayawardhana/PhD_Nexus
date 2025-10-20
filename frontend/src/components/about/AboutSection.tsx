// components/about/AboutSection.tsx
import type { AboutSectionProps } from "@/types/about";

const AboutSection = ({ title, children, color = 'amber' }: AboutSectionProps) => {
  const colorClasses: Record<string, string> = {
    amber: 'bg-amber-400',
    indigo: 'bg-indigo-400',
    purple: 'bg-purple-400',
    green: 'bg-green-400',
    pink: 'bg-pink-400'
  };

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <span className={`w-2 h-2 ${colorClasses[color]} rounded-full`} />
        {title}
      </h3>
      {children}
    </div>
  );
};

export default AboutSection;