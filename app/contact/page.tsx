'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <div className="bg-gradient-to-b from-navy-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl font-bold text-navy-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-navy-700">
            Have a question or suggestion? We'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="font-playfair text-2xl font-bold text-navy-900 mb-8">
              Contact Information
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-playfair font-bold text-navy-900 mb-2">
                  Email
                </h3>
                
                  href="mailto:hello@simplysmart.com"
                  className="text-navy-600 hover:text-navy-900"
                >
                  hello@simplysmart.com
                </a>
              </div>

              <div>
                <h3 className="font-playfair font-bold text-navy-900 mb-2">
                  Response Time
                </h3>
                <p className="text-navy-700">
                  We typically respond to all inquiries within 24-48 hours.
                </p>
              </div>

              <div>
                <h3 className="font-playfair font-bold text-navy-900 mb-2">
                  What We're Looking For
                </h3>
                <ul className="space-y-2 text-navy-700">
                  <li>• Collaboration opportunities</li>
                  <li>• Guest post pitches</li>
                  <li>• Product recommendations</li>
                  <li>• General feedback</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-sourceSans font-medium text-navy-900 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-navy-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-600 font-sourceSans"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-sourceSans font-medium text-navy-900 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-navy-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-600 font-sourceSans"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block font-sourceSans font-medium text-navy-900 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-navy-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-600 font-sourceSans"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-sourceSans font-medium text-navy-900 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-navy-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-600 font-sourceSans resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-navy-600 hover:bg-navy-700 text-white font-sourceSans font-bold py-3 rounded-lg transition-colors"
              >
                Send Message
              </button>

              {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                  Thank you for your message! We'll be in touch soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
