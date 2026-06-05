import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiGo,
  SiPhp,
  SiMysql,
  SiSupabase,
  SiGit,
  SiGithub,
  SiPostman,
  SiTailwindcss,
} from 'react-icons/si';
import { FaMagic, FaMousePointer, FaRegGem, FaRobot } from 'react-icons/fa';
import { SkeletonBlock } from '../components/Skeleton';

function TechnicalSkills() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const skillGroups = [
    {
      title: 'Frontend',
      items: [
        { name: 'React', icon: SiReact, color: 'text-cyan-400' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
        { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-300' },
        { name: 'HTML5', icon: SiHtml5, color: 'text-orange-400' },
        { name: 'CSS3', icon: SiCss, color: 'text-sky-400' },
        { name: 'Tailwind', icon: SiTailwindcss, color: 'text-sky-400' },
      ],
    },
    {
      title: 'Backend & Database',
      items: [
        { name: 'Go (Golang)', icon: SiGo, color: 'text-cyan-300' },
        { name: 'PHP', icon: SiPhp, color: 'text-indigo-300' },
        { name: 'MySQL', icon: SiMysql, color: 'text-blue-300' },
        { name: 'Supabase', icon: SiSupabase, color: 'text-emerald-400' },
      ],
    },
    {
      title: 'Tools & AI-Powered Development',
      items: [
        { name: 'Git', icon: SiGit, color: 'text-orange-400' },
        { name: 'GitHub', icon: SiGithub, color: 'text-zinc-100' },
        { name: 'Postman', icon: SiPostman, color: 'text-orange-300' },
        { name: 'Cursor', icon: FaMousePointer, color: 'text-sky-300' },
        { name: 'Lovable', icon: FaMagic, color: 'text-pink-300' },
        { name: 'Claude', icon: FaRobot, color: 'text-violet-300' },
        { name: 'Gemini', icon: FaRegGem, color: 'text-purple-300' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Header />
      <main className="mx-auto mt-6 w-full max-w-6xl px-4 pb-10 sm:px-6">
        <section className="rounded-2xl border border-zinc-800 bg-[#111217] p-5 shadow-lg shadow-black/40 sm:p-8">
          <h1 className="text-3xl font-bold text-sky-400 sm:text-4xl">Technical Skills</h1>
          <div className="mt-6 space-y-6">
            {loading ? (
              <>
                {[1, 2, 3].map((group) => (
                  <div key={group}>
                    <SkeletonBlock className="mb-3 h-6 w-52" />
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <div key={index} className="rounded-2xl border border-zinc-700 bg-zinc-900/90 p-4">
                          <SkeletonBlock className="mx-auto h-10 w-10 rounded-full" />
                          <SkeletonBlock className="mx-auto mt-3 h-4 w-20" />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>
                {skillGroups.map((group) => (
                  <div key={group.title}>
                    <h2 className="mb-3 text-lg font-semibold text-zinc-200 sm:text-xl">
                      {group.title}
                    </h2>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                      {group.items.map((skill) => {
                        const Icon = skill.icon;
                        return (
                          <div
                            key={skill.name}
                            data-interactive="true"
                            className="rounded-2xl border border-zinc-700 bg-zinc-900/90 p-4 text-center hover:border-sky-500/40"
                          >
                            <Icon className={`mx-auto text-4xl ${skill.color}`} />
                            <p className="mt-3 text-sm font-medium text-zinc-200 sm:text-base">
                              {skill.name}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default TechnicalSkills;
