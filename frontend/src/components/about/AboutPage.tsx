// components/about/AboutPage.tsx
import { type FC } from 'react';
import CollapsibleContent from './CollapsibleContent';
import AboutSection from './AboutSection';
import type { AboutPageProps } from '../../types/about';

const AboutPage: FC<AboutPageProps> = ({ profile, onBack }) => {
  const aboutData = {
    greeting: {
      english: "nice to meet you!",
      chinese: "初次见面！",
      spanish: "¡encantada!",
      japanese: "初めまして！",
      korean: "만나서 반가워요!"
    },
    intro: `Nice to meet you! I'm ${profile.name}.`,
    details: {
      title: `${profile.name} (b. 1990)`,
      subtitle: "Self Portraits, 2020",
      description: "Photographic Collage",
      technique: "Shot with tripod and timer"
    },
    whoAmI: {
      main: "I am an experience designer and researcher based in Singapore, and occasional photographer. I am inspired by people, cultures, innovation and good food, especially mala.",
      expandable: "My favourite food, mala, aka málàtànggūo (麻辣烫锅)"
    },
    uxStrengths: [
      {
        title: "qualitative research",
        subtitle: "group facilitation",
        description: "I rely on empathy, sensitivity and embracing the power of collaboration to connect the dots between people and ideas."
      },
      {
        title: "content strategy",
        description: "executed by advocating authenticity and real value to people in words, images, and videos."
      },
      {
        title: "UX for marketing",
        description: "In knowing our users, empathising and envisioning the optimal (and also the unideal) journeys via touch points and forming practical solutions to elevate their everyday experiences."
      }
    ],
    background: [
      {
        text: "I graduated from the National University of Singapore majoring in Chemical and Biomolecular Engineering in 2019."
      },
      {
        text: "Pre-UX, I conducted research for AI and Management with Dr David de Cremer at NUS Business School, as well as Glass Analysis for AGC (Asahi Glass Company) in Japan. Pretty different, huh!",
        expandable: "#throwback to my time with AGC, 2018"
      },
      {
        text: "In school, I was an active member of the NUS Students' Engineering Club - first as Publications Director, then as Vice-President for External Relations, dealing with areas in branding as well as student and vendor engagement. I am a soprano and alumni of NUS Resonance, an A Cappella Club."
      },
      {
        text: "I studied high school in Perth, Australia, and was an exchange student to Kobe College in Hyogo, Japan as well as Hanyang University, South Korea.",
        expandable: "Snippet of my high school exchange experience"
      }
    ],
    mantra: {
      main: "While my work is deeply related to the human experience, I am programmed computer-like, and am strategic with optimising work and play, in order to grow and have fun along the way. I design for both our needs today, and our goals tomorrow.",
      motto: "My motto in life is to 'try everything' and 'challenge yourself'. In trying new things, I learn to embrace failure — it's fun and it teaches you things! My biggest competitor and cheerleader is myself."
    },
    hobbies: {
      main: "I love exploring to new places, learning about cultures and engaging in artistic endeavours. I am fluent in English, Mandarin Chinese, Japanese and Korean, & believe language is a key to a culture and its people.",
      languages: "My goal with my languages is to achieve fluency of free expression",
      activities: "In my free time, I am doing one of the following things: cooking and baking (thanks covid), brazilian jiu-jitsu, longboarding, ice-skating, skateboarding, playing my ukulele, reading, watercolour painting, singing, editing videos, or capturing moments on film.",
      filmDiary: "Sneak peek to my film diary"
    },
    personality: {
      creative: "#mycreativetype is a Visionary.",
      mbti: "Some also know me as an ENFP, and at work I am best described as a Maverick."
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="fixed top-6 left-6 z-50 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition flex items-center gap-2"
      >
        ← Back to Portfolio
      </button>

      {/* Hero Greeting */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-light text-amber-400">{aboutData.greeting.english}</h1>
            <h1 className="text-4xl md:text-6xl font-light text-amber-400">{aboutData.greeting.chinese}</h1>
            <h1 className="text-4xl md:text-6xl font-light text-amber-400">{aboutData.greeting.spanish}</h1>
            <h1 className="text-4xl md:text-6xl font-light text-amber-400">{aboutData.greeting.japanese}</h1>
            <h1 className="text-4xl md:text-6xl font-light text-amber-400">{aboutData.greeting.korean}</h1>
          </div>
        </div>
      </section>

      {/* About Me Content */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-4xl">👋</span>
            <h2 className="text-4xl font-bold text-white">About Me</h2>
          </div>

          <p className="text-2xl text-white mb-12">{aboutData.intro}</p>

          {/* Photo Grid */}
          <div className="grid grid-cols-3 gap-4 mb-12 max-w-2xl">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <div key={i} className="aspect-square bg-slate-800 rounded-lg overflow-hidden">
                <img
                  src={profile.image}
                  alt={`Portrait ${i}`}
                  className={`w-full h-full object-cover ${i % 3 === 0 ? 'grayscale' : ''}`}
                />
              </div>
            ))}
          </div>

          {/* Photo Details */}
          <div className="bg-slate-800 rounded-xl p-6 mb-12 max-w-2xl">
            <p className="text-white font-semibold">{aboutData.details.title}</p>
            <p className="text-slate-400 italic mb-2">{aboutData.details.subtitle}</p>
            <p className="text-slate-400">{aboutData.details.description}</p>
            <p className="text-slate-400 italic">{aboutData.details.technique}</p>
            <CollapsibleContent trigger="Let me introduce myself...">
              <p className="text-slate-300">More details about my journey...</p>
            </CollapsibleContent>
          </div>

          {/* Who am I? */}
          <AboutSection title="Who am I?" color="amber">
            <div className="bg-amber-900/30 rounded-xl p-6 mb-4 border-l-4 border-amber-600">
              <p className="text-white leading-relaxed">{aboutData.whoAmI.main}</p>
            </div>
            <CollapsibleContent trigger={aboutData.whoAmI.expandable}>
              <p className="text-slate-300">Mala is my absolute favorite comfort food!</p>
            </CollapsibleContent>
          </AboutSection>

          {/* My UX Strengths */}
          <AboutSection title="My UX Strengths" color="indigo">
            <div className="space-y-4">
              {aboutData.uxStrengths.map((strength, idx) => (
                <div key={idx} className="bg-slate-800 rounded-xl p-6 border-l-4 border-indigo-600">
                  <p className="text-white mb-2">
                    Direct interactions in <span className="font-bold">{strength.title}</span>
                    {strength.subtitle && <> and <span className="font-bold">{strength.subtitle}</span></>}.
                    {strength.description && <> {strength.description}</>}
                  </p>
                </div>
              ))}
            </div>
          </AboutSection>

          {/* My Background */}
          <AboutSection title="My background" color="purple">
            <div className="space-y-4">
              {aboutData.background.map((item, idx) => (
                <div key={idx}>
                  <div className="bg-slate-800 rounded-xl p-6 border-l-4 border-purple-600">
                    <p className="text-white leading-relaxed">{item.text}</p>
                  </div>
                  {item.expandable && (
                    <div className="mt-2 ml-6">
                      <CollapsibleContent trigger={item.expandable}>
                        <p className="text-slate-300">Additional details about this experience...</p>
                      </CollapsibleContent>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </AboutSection>

          {/* Mantra */}
          <AboutSection title="Mantra" color="green">
            <div className="bg-slate-800 rounded-xl p-6 mb-4 border-l-4 border-green-600">
              <p className="text-white leading-relaxed mb-4">{aboutData.mantra.main}</p>
            </div>
            <div className="bg-amber-900/30 rounded-xl p-6 border-l-4 border-amber-600">
              <p className="text-white leading-relaxed flex items-start gap-3">
                <span className="text-2xl">🔥</span>
                <span>{aboutData.mantra.motto}</span>
              </p>
            </div>
            <p className="text-slate-500 text-sm mt-4 italic">
              #globalcitizen #sustainablefutures #adaptimproviseovercome #failfastfailoften
            </p>
          </AboutSection>

          {/* Hobbies and Interests */}
          <AboutSection title="Hobbies and Interests" color="pink">
            <div className="space-y-4">
              <div className="bg-slate-800 rounded-xl p-6 border-l-4 border-pink-600">
                <p className="text-white leading-relaxed">{aboutData.hobbies.main}</p>
              </div>
              <div className="ml-6">
                <CollapsibleContent trigger={aboutData.hobbies.languages}>
                  <p className="text-slate-300">Language learning is a lifelong passion!</p>
                </CollapsibleContent>
              </div>
              <div className="bg-slate-800 rounded-xl p-6 border-l-4 border-pink-600">
                <p className="text-white leading-relaxed">{aboutData.hobbies.activities}</p>
              </div>
              <div className="ml-6">
                <CollapsibleContent trigger={aboutData.hobbies.filmDiary}>
                  <p className="text-slate-300">Check out my film photography collection...</p>
                </CollapsibleContent>
              </div>
            </div>
          </AboutSection>

          {/* Personality */}
          <div className="bg-amber-900/30 rounded-xl p-6 border-l-4 border-amber-600 mb-8">
            <p className="text-white leading-relaxed mb-2">{aboutData.personality.creative}</p>
            <p className="text-white leading-relaxed">{aboutData.personality.mbti}</p>
          </div>

          {/* Contact */}
          <div className="text-center py-12">
            <p className="text-white mb-4">
              Let's connect!{' '}
              <a href={`mailto:${profile.contact.email}`} className="text-indigo-400 hover:text-indigo-300 underline">
                E-mail
              </a>{' '}
              me or drop a message on{' '}
              <a href={`https://${profile.contact.linkedin}`} className="text-indigo-400 hover:text-indigo-300 underline">
                LinkedIn
              </a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;