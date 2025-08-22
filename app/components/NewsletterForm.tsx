'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    
    if (!email || !email.trim()) return;
    
    setIsSubmitting(true);
    setMessage('');
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), company: company.trim() })
      });
      
      const data = await response.json();
      
      if (data.ok) {
        setMessage('Thanks — you\'re on the list!');
        setMessageType('success');
        form.reset();
      } else {
        setMessage(data.error || 'Please try again.');
        setMessageType('error');
      }
    } catch {
      setMessage('Network error. Please try again.');
      setMessageType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      className="w-full max-w-2xl"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          name="email"
          placeholder="Enter your email for updates"
          required
          disabled={isSubmitting}
          className="flex-1 min-w-0 px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
        />
        {/* Honeypot field - hidden from users */}
        <input
          type="text"
          name="company"
          className="absolute left-[-9999px]"
          tabIndex={-1}
          autoComplete="off"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 bg-primary text-primary-foreground font-semibold shadow-lg hover:bg-primary/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Subscribing...' : 'Notify me'}
        </button>
      </div>
      {message && (
        <div className={`text-sm mt-2 ${
          messageType === 'success' ? 'text-emerald-400' : 'text-red-400'
        }`}>
          {message}
        </div>
      )}
    </form>
  );
}