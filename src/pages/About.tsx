import { motion } from 'framer-motion';
import { TerminalHeader } from '../components/TerminalHeader';
import { Typewriter } from '../components/Typewriter';
import { Calendar, MapPin, Code, Zap } from 'lucide-react';

export const About = () => {
  const timeline = [
    {
      year: 'Sep 2024 – Present',
      title: 'Software Engineer',
      company: 'Mercado Libre',
      description:
        'Led the migration of a legacy Java-based WebView to a modern JS/TS architecture. Designed an internal platform for abuse prevention policies and contributed to the Browser Assessment Hub for centralized abuse detection.',
      icon: Code,
    },
    {
      year: 'Jan 2023 – Sep 2024',
      title: 'Software Engineer',
      company: 'AstroPay',
      description:
        'Investigated and resolved production incidents across microservices using Datadog and Kibana. Implemented integrations with Prisma and Mercado Pago APIs within distributed payment microservices (gateway, withdrawal, purchase).',
      icon: Code,
    },
    {
      year: 'Jan 2022 – Jan 2023',
      title: 'Frontend Engineer',
      company: 'AstroPay',
      description:
        'Increased user access and engagement by 40% by implementing tracking tools like Amplitude and Smartlook to improve UX and generate actionable product insights.',
      icon: Code,
    },
    {
      year: '2021 – 2022',
      title: 'Frontend Developer',
      company: 'Osana Salud',
      description:
        'Built a healthcare dashboard for DOSUBA and contributed to a peer-to-peer telemedicine platform for the Universidad de Buenos Aires featuring video calls, screen sharing, and media streaming.',
      icon: Code,
    },
    {
      year: '2020 – 2021',
      title: 'Software Developer',
      company: 'NEORIS',
      description:
        'Developed banking workflows involving transactions and biometric authentication for payroll account unlock processes.',
      icon: Code,
    },
    {
      year: '2019 – 2024',
      title: 'Systems Engineering',
      company: 'Universidad CAECE',
      description:
        'Bachelor\'s degree in Systems Engineering with focus on software development and cloud computing.',
      icon: Calendar,
    },
  ];

  const philosophyPoints = [
    {
      icon: Zap,
      title: 'Observability First',
      description: 'If you can\'t measure it, you can\'t improve it. Good systems are built to be monitored and debugged.',
    },
    {
      icon: Code,
      title: 'Reliable by Design',
      description: 'Build for resilience from the start. Distributed systems fail — your code should handle that gracefully.',
    },
    {
      icon: MapPin,
      title: 'Ship & Iterate',
      description: 'Production is where the truth lives. Ship early, observe, learn, and continuously improve.',
    },
  ];

  return (
    <div className="min-h-screen bg-bg-page">
      {/* Terminal Header */}
      <TerminalHeader
        command="cat about.txt"
        description="Displaying professional background and technical philosophy"
      />

      {/* Bio Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Bio Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="bg-bg-surface border border-neutral-700 rounded-xl p-8 shadow-card">
                <div className="font-mono text-lg mb-6">
                  <span className="text-accent-500">$</span>
                  <span className="text-primary-500"> cat</span>
                  <span className="text-neutral-400"> bio.txt</span>
                </div>
                <div className="space-y-4 text-neutral-200 leading-relaxed">
                  <Typewriter
                    text="Hi, I'm Ninna — Software Engineer from Buenos Aires, Argentina."
                    delay={30}
                    className="text-primary-500 font-semibold block mb-4"
                  />
                  <p>
                    I'm a DevOps-oriented Software Engineer with experience building scalable fintech
                    platforms and production microservices. My journey started in frontend development—
                    crafting interfaces with React, Vue, and TypeScript.
                  </p>
                  <p>
                    Over time, I evolved into full-stack and DevOps roles, working on production systems
                    at companies like Mercado Libre and AstroPay. I've led architecture migrations, integrated
                    external payment APIs, and resolved production incidents using observability tools like
                    Datadog and Kibana.
                  </p>
                  <p>
                    I'm also AWS Certified Cloud Practitioner and currently working toward the AWS Developer
                    Associate certification, deepening my expertise in cloud-native architectures.
                  </p>
                  <p className="text-primary-500 font-medium">
                    I believe great engineering is about building systems that are observable, resilient,
                    and maintainable — not just systems that work.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="bg-bg-elevated border border-neutral-700 rounded-xl p-6">
                <h3 className="font-mono text-primary-500 font-semibold mb-4 text-lg">
                  Quick Stats
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Experience</span>
                    <span className="text-primary-500 font-mono">5+ years</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Cloud</span>
                    <span className="text-primary-500 font-mono">AWS Certified</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Companies</span>
                    <span className="text-primary-500 font-mono">4+ (fintech focus)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Technologies</span>
                    <span className="text-primary-500 font-mono">18+ in production</span>
                  </div>
                </div>
              </div>

              <div className="bg-bg-elevated border border-neutral-700 rounded-xl p-6">
                <h3 className="font-mono text-primary-500 font-semibold mb-4 text-lg">
                  Specializations
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Microservices Architecture', 'Payment Systems', 'Observability & Debugging', 'Full-Stack Development', 'Cloud (AWS)', 'Frontend Engineering'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-neutral-800 text-neutral-200 text-sm rounded-md border border-neutral-700 hover:border-primary-500/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-4">
              Career Timeline
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              From frontend to full-stack and DevOps — building at scale in the fintech industry
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-700 to-transparent" />

            <div className="space-y-12">
              {timeline.map((item, index) => {
                const IconComponent = item.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center border-4 border-bg-page shadow-glow z-10">
                      <IconComponent size={16} className="text-bg-surface" />
                    </div>

                    {/* Content */}
                    <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className="bg-bg-elevated border border-neutral-700 rounded-lg p-6 hover:border-primary-500/50 transition-colors shadow-card">
                        <div className="font-mono text-accent-500 text-sm mb-2">{item.year}</div>
                        <h3 className="font-semibold text-xl text-neutral-200 mb-1">{item.title}</h3>
                        <div className="text-primary-500 font-medium mb-3">{item.company}</div>
                        <p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-4">
              Tech Philosophy
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Core principles that guide my approach to software engineering and DevOps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {philosophyPoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-bg-elevated border border-neutral-700 rounded-xl p-8 text-center hover:border-primary-500/50 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500/20 transition-colors">
                    <IconComponent size={32} className="text-primary-500" />
                  </div>
                  <h3 className="font-semibold text-xl text-neutral-200 mb-4">{point.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{point.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
