"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-white mb-4">
          Get in{" "}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Touch
          </span>
        </h1>
        <p className="text-gray-400 text-lg">
          Have a suggestion, found a bug, or just want to say hi? We would love
          to hear from you.
        </p>
      </div>

      {submitted ? (
        <div className="bg-gray-900 border border-green-700 rounded-2xl p-10 text-center">
          <span className="text-6xl block mb-4">✅</span>
          <h2 className="text-2xl font-bold text-white mb-2">Message Sent!</h2>
          <p className="text-gray-400">
            Thanks for reaching out. We will get back to you soon.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}
            className="mt-6 text-purple-400 hover:text-purple-300 text-sm underline transition-colors"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 border border-gray-800 rounded-2xl p-8 space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us what's on your mind..."
              className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-[1.01]"
          >
            Send Message
          </button>
        </form>
      )}

      {/* Contact info */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
        {[
          { icon: "📧", label: "Email", value: "hello@gamevault.gg" },
          { icon: "🐦", label: "Twitter", value: "@GameVaultApp" },
          { icon: "💬", label: "Discord", value: "discord.gg/gamevault" },
        ].map(({ icon, label, value }) => (
          <div
            key={label}
            className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center"
          >
            <span className="text-2xl block mb-1">{icon}</span>
            <p className="text-gray-500 text-xs uppercase tracking-wider">{label}</p>
            <p className="text-gray-300 text-sm font-medium mt-1">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
