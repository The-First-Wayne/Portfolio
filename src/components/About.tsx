const education = [
  {
    period:  '2022 — 2026',
    degree:  'B.Tech, Information Technology',
    school:  'MCKV Institute of Engineering, MAKAUT',
    detail:  'CGPA 8.63 · 8th Semester',
    current: true,
  },
  {
    period:  'Class XII',
    degree:  'ISC Board',
    school:  'Vision International School, Uttarpara',
    detail:  '68.25%',
    current: false,
  },
  {
    period:  'Class X',
    degree:  'ICSE Board',
    school:  'Vision International School, Uttarpara',
    detail:  '85.80%',
    current: false,
  },
]

const stats = [
  { value: '8.63', label: 'CGPA'              },
  { value: '2+',   label: 'Projects shipped'  },
  { value: '5',    label: 'Certifications'    },
  { value: '2026', label: 'Graduation year'   },
]

export function About() {
  return (
    <section
      id="about"
      className="py-40 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
    >
      <div className="asymmetric-grid gap-gutter items-start">
        {/* Left — heading */}
        <div className="col-span-12 md:col-span-5 reveal">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest block mb-6">
            About Me
          </span>
          <h2
            className="font-display-lg-mobile md:text-[64px] md:leading-[68px] font-extrabold tracking-tighter mb-8"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Building the <br />
            <span className="kinetic-text">intelligent web.</span>
          </h2>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-px bg-outline-variant/20 mt-12">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="bg-background p-6 group hover:bg-surface-container transition-colors duration-300"
              >
                <div
                  className="text-[40px] leading-none text-primary mb-2 font-extrabold"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {value}
                </div>
                <div className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — bio + education timeline */}
        <div
          className="col-span-12 md:col-start-7 md:col-span-6 reveal"
          style={{ transitionDelay: '150ms' }}
        >
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
            I'm Anish Gayen — a final-year B.Tech IT student at MCKV Institute of
            Engineering, passionate about building AI-driven systems that solve
            real-world problems.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant/70 mb-16">
            My work lives at the intersection of backend engineering, large language
            models, and data infrastructure. I aspire to join a reputed organisation
            where I can apply my skills at scale, keep learning, and deliver
            measurable impact.
          </p>

          {/* Education timeline */}
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary block mb-8">
              Education
            </span>
            <div className="space-y-px">
              {education.map(({ period, degree, school, detail, current }) => (
                <div
                  key={degree}
                  className="group relative flex gap-6 p-6 bg-background hover:bg-surface-container transition-colors duration-300 overflow-hidden"
                >
                  {/* Left accent */}
                  <div className={`w-[2px] shrink-0 self-stretch ${current ? 'bg-primary' : 'bg-outline-variant/30'}`} />

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <p
                          className="font-headline-md text-[18px] leading-tight font-semibold text-on-surface mb-1"
                          style={{ fontFamily: 'Syne, sans-serif' }}
                        >
                          {degree}
                        </p>
                        <p className="font-body-md text-body-md text-on-surface-variant/80">{school}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="font-label-sm text-label-sm text-primary uppercase tracking-widest">{period}</p>
                        <p className="font-label-sm text-[10px] text-on-surface-variant/60 uppercase tracking-widest mt-1">{detail}</p>
                      </div>
                    </div>
                    {current && (
                      <div className="flex items-center gap-2 mt-3">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
                        </span>
                        <span className="font-label-sm text-[10px] text-primary/70 uppercase tracking-widest">Currently enrolled</span>
                      </div>
                    )}
                  </div>

                  <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-primary/30 group-hover:w-full transition-all duration-700" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
