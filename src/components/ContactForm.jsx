import { useEffect, useState } from 'react';

const API_URL = 'https://lead-gateway-henna.vercel.app/api/leads';
const API_KEY = 'b0ffff3c2299551401bdfcf35ea9be8283c0aab612cc0241c5d813e4f0f2a393';
const WEBSITE = 'website-a';

function Field({ label, type = 'text', required, value, onChange, placeholder }) {
  return (
    <label className="block text-sm font-semibold text-[#12263a]">
      {label}
      <input
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-lg border border-[#dcebf4] bg-white px-3.5 py-2.5 text-sm text-[#12263a] outline-none placeholder:text-[#9db1c0] focus:border-[#138fda] focus:ring-2 focus:ring-[#138fda]/20"
      />
    </label>
  );
}

export function ContactForm({ open, onClose }) {
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });

  useEffect(() => {
    if (!open) return;
    setStatus('idle');
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open, onClose]);

  if (!open) return null;

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-api-key': API_KEY },
        body: JSON.stringify({ website: WEBSITE, ...form, source: 'contact-form' }),
      });
      if (!res.ok) throw new Error('Bad response');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-[#12263a]/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative my-8 w-full max-w-md rounded-2xl bg-white p-7 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-2xl leading-none text-[#738398] transition hover:text-[#12263a]"
        >
          ×
        </button>

        {status === 'success' ? (
          <div className="py-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#e6f6ee]">
              <svg className="h-8 w-8 text-[#1db466]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
            <h3 className="mt-4 text-xl font-extrabold tracking-tight text-[#12263a]">Thanks, we got your details!</h3>
            <p className="mt-2 text-sm text-[#526a7e]">Our team will reach out to you shortly.</p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 rounded-full bg-[#138fda] px-6 py-2.5 text-sm font-bold text-white transition hover:bg-[#0879c7]"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <p className="text-xs font-bold uppercase tracking-[.16em] text-[#138fda]">Talk to our team</p>
            <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-[#12263a]">Tell us about you</h3>
            <p className="mt-1.5 text-sm text-[#526a7e]">Leave your details and we'll contact you back.</p>

            <form onSubmit={submit} className="mt-6 space-y-4">
              <Field label="Name" required value={form.name} onChange={update('name')} placeholder="Your name" />
              <Field label="Email" type="email" required value={form.email} onChange={update('email')} placeholder="you@example.com" />
              <Field label="Phone" type="tel" value={form.phone} onChange={update('phone')} placeholder="+91 00000 00000" />
              <Field label="Company (optional)" value={form.company} onChange={update('company')} placeholder="Your business or company" />
              <label className="block text-sm font-semibold text-[#12263a]">
                Message
                <textarea
                  value={form.message}
                  onChange={update('message')}
                  rows={4}
                  placeholder="How can we help your business grow?"
                  className="mt-1.5 w-full resize-none rounded-lg border border-[#dcebf4] bg-white px-3.5 py-2.5 text-sm text-[#12263a] outline-none placeholder:text-[#9db1c0] focus:border-[#138fda] focus:ring-2 focus:ring-[#138fda]/20"
                />
              </label>

              {status === 'error' && (
                <p className="text-sm text-[#d64545]">Something went wrong. Please try again, or call us at 8055 223 358.</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full rounded-full bg-[#138fda] py-3 text-sm font-bold text-white transition hover:bg-[#0879c7] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'loading' ? 'Sending...' : 'Send my details'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}