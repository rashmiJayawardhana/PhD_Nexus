// src/components/home/InfoCards.tsx
export const InfoCards = () => {
  const cards = [
    { icon: "⚠️", bg: "bg-teal-100", text: "Occupational\nExposure Risks" },
    { icon: "📋", bg: "bg-blue-100", text: "Safety Guidelines &\nPrecautions" },
    { icon: "🎓", bg: "bg-purple-100", text: "Educational\nIntervention" }
  ];

  return (
    <div className="grid grid-cols-3 gap-4 pt-8">
      {cards.map((card, idx) => (
        <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg text-center">
          <div className={`w-12 h-12 ${card.bg} rounded-lg flex items-center justify-center mx-auto mb-2`}>
            <span className="text-2xl">{card.icon}</span>
          </div>
          <p className="text-xs font-medium text-slate-700 whitespace-pre-line">{card.text}</p>
        </div>
      ))}
    </div>
  );
};