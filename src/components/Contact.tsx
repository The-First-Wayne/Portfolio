import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm]           = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, wire this to EmailJS / Formspree / backend
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="py-28 md:py-40 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
    >
      <div className="asymmetric-grid gap-gutter">
        {/* Left — heading */}
        <div className="col-span-12 md:col-span-5 reveal">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest block mb-6">
            Get in touch
          </span>
          <h2
            className="font-display-lg-mobile md:text-[64px] md:leading-[68px] font-extrabold tracking-tighter mb-8"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Let's build <br />
            <span className="kinetic-text">something great.</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-sm">
            Open to internships, full-time roles, and collaborative projects.
            I typically respond within 24 hours.
          </p>

          {/* Contact meta */}
          <div className="mt-12 space-y-4">
            {[
              { icon: 'alternate_email', label: 'anishvis007@gmail.com',  href: 'mailto:anishvis007@gmail.com' },
              { icon: 'phone',           label: '+91 9007692859',          href: 'tel:+919007692859' },
              { icon: 'location_on',     label: 'Kolkata, West Bengal',    href: '#' },
            ].map(({ icon, label, href }) => (
              <a
                key={icon}
                href={href}
                className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors duration-300 group"
              >
                <span className="material-symbols-outlined text-primary text-base">{icon}</span>
                <span className="font-body-md text-body-md group-hover:translate-x-1 transition-transform duration-300 inline-block">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div
          className="col-span-12 md:col-start-7 md:col-span-6 reveal"
          style={{ transitionDelay: '150ms' }}
        >
          {submitted ? (
            <div className="glass-surface p-10 sm:p-16 flex flex-col items-center justify-center text-center h-full min-h-[320px] sm:min-h-[400px]">
              <span className="material-symbols-outlined text-primary text-6xl mb-6">check_circle</span>
              <h3
                className="font-headline-md text-headline-md mb-3"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                Message received.
              </h3>
              <p className="font-body-md text-on-surface-variant">
                Anish will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { name: 'name',  label: 'Your Name',    type: 'text',  placeholder: 'Jane Smith' },
                  { name: 'email', label: 'Email Address', type: 'email', placeholder: 'jane@company.com' },
                ].map(({ name, label, type, placeholder }) => (
                  <div key={name} className="flex flex-col gap-2">
                    <label
                      htmlFor={name}
                      className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant"
                    >
                      {label}
                    </label>
                    <input
                      id={name}
                      name={name}
                      type={type}
                      required
                      value={form[name as keyof typeof form]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      className="bg-surface-container border border-outline-variant/30 focus:border-primary px-5 py-4 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/40 outline-none transition-colors duration-300"
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the role or project…"
                  className="bg-surface-container border border-outline-variant/30 focus:border-primary px-5 py-4 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/40 outline-none transition-colors duration-300 resize-none"
                />
              </div>

              <Button type="submit" className="w-full sm:w-auto glow-hover">
                <span className="flex items-center gap-2">
                  Send Message
                  <span className="material-symbols-outlined text-sm">send</span>
                </span>
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
