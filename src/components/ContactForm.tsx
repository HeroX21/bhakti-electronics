import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, MessageCircle } from 'lucide-react';
import { createWhatsAppLink } from '../config/businessConfig';

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export const ContactForm: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [generalError, setGeneralError] = useState('');

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!form.name.trim()) {
      errs.name = 'Full name is required';
    } else if (form.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters';
    }

    if (!form.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    // Valid Indian phone number (10 digits, or prefixed with +91/0, starting with 6-9)
    const cleanPhone = form.phone.replace(/[\s\-()]/g, '');
    const indianPhoneRegex = /^(?:\+91|91|0)?[6-9]\d{9}$/;
    if (!form.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!indianPhoneRegex.test(cleanPhone)) {
      errs.phone = 'Please enter a valid 10-digit Indian phone number';
    }

    if (!form.message.trim()) {
      errs.message = 'Message is required';
    } else if (form.message.length > 500) {
      errs.message = 'Message must not exceed 500 characters';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError('');

    if (!validate()) {
      setGeneralError('Please check your details and try again.');
      return;
    }

    setIsSubmitting(true);
    // Simulate swift dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setForm({ name: '', email: '', phone: '', message: '' });
      setErrors({});
    }, 450);
  };

  const remainingChars = 500 - form.message.length;

  return (
    <div className="bg-white rounded-xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-900 tracking-tight">Send Us an Inquiry</h3>
        <p className="text-sm text-slate-500 mt-1">
          Have a question about a smartphone, TV, or appliance? Fill in your details below and our Shalimar Bagh store team will assist you.
        </p>
      </div>

      {isSuccess ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-4 animate-fadeIn">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-emerald-900">Message Received</h4>
            <p className="text-sm text-emerald-800 mt-1 font-medium">
              Thank you! Our team will contact you shortly.
            </p>
          </div>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => setIsSuccess(false)}
              className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Send Another Message
            </button>
            <a
              href={createWhatsAppLink("Direct Store Inquiry")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Chat on WhatsApp Directly
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {generalError && (
            <div className="flex items-center gap-2 p-3 text-xs font-medium text-rose-800 bg-rose-50 border border-rose-200 rounded-lg">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
              <span>{generalError}</span>
            </div>
          )}

          {/* Name */}
          <div>
            <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="e.g. Rajesh Sharma"
              className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-slate-50/50 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                errors.name ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
              }`}
              required
            />
            {errors.name && <p className="mt-1 text-xs text-rose-600">{errors.name}</p>}
          </div>

          {/* Contact Details Grid (Email & Phone) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                Email Address <span className="text-rose-500">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="name@example.com"
                className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-slate-50/50 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                  errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                }`}
                required
              />
              {errors.email && <p className="mt-1 text-xs text-rose-600">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                Phone Number <span className="text-rose-500">*</span>
              </label>
              <input
                id="contact-phone"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-slate-50/50 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                  errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                }`}
                required
              />
              {errors.phone && <p className="mt-1 text-xs text-rose-600">{errors.phone}</p>}
            </div>
          </div>

          {/* Message */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wide">
                Message / Inquired Device <span className="text-rose-500">*</span>
              </label>
              <span className={`text-[11px] tabular-nums ${remainingChars < 30 ? 'text-amber-600 font-semibold' : 'text-slate-400'}`}>
                {remainingChars} chars left
              </span>
            </div>
            <textarea
              id="contact-message"
              rows={4}
              maxLength={500}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell us what model, brand, or appliance category you are looking for..."
              className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-slate-50/50 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                errors.message ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
              }`}
              required
            />
            {errors.message && <p className="mt-1 text-xs text-rose-600">{errors.message}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 py-3 px-6 text-sm font-semibold text-white bg-[#0A2540] hover:bg-[#07162C] active:bg-slate-900 rounded-lg shadow-sm transition-all focus-visible:outline-2 focus-visible:outline-amber-500 cursor-pointer disabled:opacity-70"
          >
            {isSubmitting ? (
              <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            ) : (
              <>
                <Send className="w-4 h-4 text-amber-400" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
