import React, { useState, useEffect } from 'react';
import { Mail, Clock, MapPin, Send, CheckCircle2, ChevronDown, AlertCircle } from 'lucide-react';
import { CONTACT_CONTENT } from '../data/content';
import { CONTROLLERS } from '../data/controllers';
import { useTheme } from '../context/ThemeContext';

export const Contact: React.FC = () => {
  const { setIsHome } = useTheme();

  useEffect(() => {
    setIsHome(false);
  }, [setIsHome]);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'General question',
    controllerId: '',
    message: '',
    consent: false,
    honeypot: '', // anti-spam bot field
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your full name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please include a message for the team.';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Message must be at least 15 characters.';
    }
    if (!formData.consent) {
      newErrors.consent = 'You must acknowledge the inquiry terms.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Honeypot check
    if (formData.honeypot) return;

    if (validate()) {
      setIsSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        topic: 'General question',
        controllerId: '',
        message: '',
        consent: false,
        honeypot: '',
      });
      setErrors({});
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      {/* 1. Contact Hero */}
      <section className="space-y-3">
        <div className="w-12 h-1 bg-[var(--theme-accent)] rounded-full mb-3" />
        <span className="text-xs font-bold uppercase tracking-widest text-[var(--theme-accent)]">
          {CONTACT_CONTENT.hero.badge}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {CONTACT_CONTENT.hero.headline}
        </h1>
        <p className="text-sm sm:text-base text-[#b8b8bd] max-w-2xl">
          {CONTACT_CONTENT.hero.subtitle}
        </p>
      </section>

      {/* 2. Two-Column Layout (Left Form, Right Info) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Contact Form */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#141416] border border-[#26262a] shadow-xl">
          {isSubmitted ? (
            <div className="p-8 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
              <h3 className="text-xl font-bold text-white">Message sent successfully</h3>
              <p className="text-sm text-[#b8b8bd] max-w-sm mx-auto">
                Thank you for contacting Padverse. Our engineering team will review your inquiry and reply within 1-2 business days.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-2 rounded-full bg-[var(--theme-accent)] text-black font-bold text-xs hover:opacity-90 transition-all"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Hidden anti-spam honeypot */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Name */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-semibold text-[#b8b8bd]">
                  Your Name *
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Mercer"
                  className={`w-full px-4 py-2.5 rounded-xl bg-[#0e0e10] border text-white text-sm focus:outline-none transition-colors ${
                    errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-[#26262a] focus:border-[var(--theme-accent)]'
                  }`}
                />
                {errors.name && (
                  <p className="text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-semibold text-[#b8b8bd]">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@example.com"
                  className={`w-full px-4 py-2.5 rounded-xl bg-[#0e0e10] border text-white text-sm focus:outline-none transition-colors ${
                    errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-[#26262a] focus:border-[var(--theme-accent)]'
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Topic Select */}
              <div className="space-y-1.5">
                <label htmlFor="topic" className="text-xs font-semibold text-[#b8b8bd]">
                  Inquiry Topic
                </label>
                <select
                  id="topic"
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0e0e10] border border-[#26262a] text-white text-sm focus:outline-none focus:border-[var(--theme-accent)]"
                >
                  <option value="General question">General question</option>
                  <option value="Order help">Order help (Showroom demo)</option>
                  <option value="Product info">Product info / Telemetry data</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Press">Press & Media</option>
                </select>
              </div>

              {/* Controller of Interest */}
              <div className="space-y-1.5">
                <label htmlFor="controllerId" className="text-xs font-semibold text-[#b8b8bd]">
                  Controller of Interest (Optional)
                </label>
                <select
                  id="controllerId"
                  value={formData.controllerId}
                  onChange={(e) => setFormData({ ...formData, controllerId: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0e0e10] border border-[#26262a] text-white text-sm focus:outline-none focus:border-[var(--theme-accent)]"
                >
                  <option value="">None / General inquiry</option>
                  {CONTROLLERS.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.brandName} - {c.name} (${c.price})
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label htmlFor="message" className="text-xs font-semibold text-[#b8b8bd]">
                    Your Message *
                  </label>
                  <span className="text-[11px] text-[#8a8a90] font-mono">
                    {formData.message.length} / 500
                  </span>
                </div>
                <textarea
                  id="message"
                  rows={4}
                  maxLength={500}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detail your request, question, or benchmark inquiry..."
                  className={`w-full px-4 py-2.5 rounded-xl bg-[#0e0e10] border text-white text-sm focus:outline-none transition-colors ${
                    errors.message ? 'border-red-500 ring-1 ring-red-500' : 'border-[#26262a] focus:border-[var(--theme-accent)]'
                  }`}
                />
                {errors.message && (
                  <p className="text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Consent Checkbox */}
              <div className="space-y-1">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 rounded bg-[#0e0e10] border-[#26262a] text-[var(--theme-accent)] focus:ring-[var(--theme-accent)]"
                  />
                  <span className="text-xs text-[#8a8a90] leading-relaxed">
                    I understand Padverse is an independent showroom and that my submission does not transmit personal data to external third parties.
                  </span>
                </label>
                {errors.consent && (
                  <p className="text-xs text-red-400 flex items-center gap-1 pl-6">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.consent}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[var(--theme-accent)] hover:opacity-90 text-black font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-white"
              >
                <Send className="w-4 h-4" />
                <span>Send message</span>
              </button>
            </form>
          )}
        </div>

        {/* Right: Contact Information & Guidance */}
        <div className="lg:col-span-5 space-y-6">
          {/* Info Cards */}
          <div className="p-6 rounded-2xl bg-[#141416] border border-[#26262a] space-y-4">
            <h3 className="text-base font-bold text-white">Direct Metrology Lab Contacts</h3>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-center gap-3 text-[#b8b8bd]">
                <Mail className="w-4 h-4 text-[var(--theme-accent)] shrink-0" />
                <span>{CONTACT_CONTENT.details.email}</span>
              </div>
              <div className="flex items-center gap-3 text-[#b8b8bd]">
                <Clock className="w-4 h-4 text-[var(--theme-accent)] shrink-0" />
                <span>{CONTACT_CONTENT.details.supportHours}</span>
              </div>
              <div className="flex items-center gap-3 text-[#b8b8bd]">
                <Clock className="w-4 h-4 text-[var(--theme-accent)] shrink-0" />
                <span>Response: {CONTACT_CONTENT.details.responseTime}</span>
              </div>
              <div className="flex items-center gap-3 text-[#b8b8bd]">
                <MapPin className="w-4 h-4 text-[var(--theme-accent)] shrink-0" />
                <span>{CONTACT_CONTENT.details.location}</span>
              </div>
            </div>
          </div>

          {/* Before You Write Card */}
          <div className="p-6 rounded-2xl bg-[#141416] border border-[#26262a] space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Before you write</h3>
            <ul className="space-y-2 text-xs text-[#8a8a90] leading-relaxed list-disc list-inside">
              {CONTACT_CONTENT.beforeYouWrite.map((tip, idx) => (
                <li key={idx}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Accessible FAQ Accordions */}
      <section id="faq" className="space-y-6 pt-6">
        <div>
          <div className="w-12 h-1 bg-[var(--theme-accent)] rounded-full mb-3" />
          <h2 className="text-2xl font-bold text-white tracking-tight">Frequently Asked Questions</h2>
          <p className="text-xs sm:text-sm text-[#8a8a90]">
            Everything you need to know about specs, 3D representations, and telemetry benchmarks.
          </p>
        </div>

        <div className="space-y-3">
          {CONTACT_CONTENT.faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#141416] border border-[#26262a] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-1 focus:ring-[var(--theme-accent)]"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[var(--theme-accent)] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#b8b8bd] leading-relaxed border-t border-[#1f1f23]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
