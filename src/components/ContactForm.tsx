'use client';

import { useState } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  return (
    <form
      className="mt-8 space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        setStatus('sending');
        setTimeout(() => setStatus('sent'), 1000);
      }}
    >
      <input type="text" name="name" required placeholder="Your name" className="w-full px-4 py-3 border rounded-lg" />
      <input type="email" name="email" required placeholder="Email" className="w-full px-4 py-3 border rounded-lg" />
      <textarea name="message" required placeholder="Message" className="w-full px-4 py-3 border rounded-lg h-32" />
      <button type="submit" disabled={status === 'sending'} className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium">
        {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent!' : 'Send'}
      </button>
    </form>
  );
}
