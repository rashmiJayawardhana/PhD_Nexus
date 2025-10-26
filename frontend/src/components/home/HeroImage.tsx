// src/components/home/HeroImage.tsx
export const HeroImage = () => (
  <div className="relative">
    <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-3xl blur-2xl opacity-20" />
    <img
      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=700&fit=crop"
      alt="Healthcare professional"
      className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
    />
  </div>
);