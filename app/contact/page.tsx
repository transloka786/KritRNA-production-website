'use client';

import { motion } from 'framer-motion';
import { useState, FormEvent } from 'react';
import GlassCard from '@/components/GlassCard';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Beaker, Rocket, Database, Key } from 'lucide-react';

const collaborationTypes = [
  { id: 'pilot', icon: Beaker, label: 'Pilot Program', color: '#32E2E2' },
  { id: 'codev', icon: Rocket, label: 'Co-Development', color: '#E1FF17' },
  { id: 'data', icon: Database, label: 'Data Partnership', color: '#C99EED' },
  { id: 'license', icon: Key, label: 'License', color: '#38B6FF' },
];

export default function ContactPage() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const toggleType = (id: string) => {
    setSelectedTypes((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', topic: '', message: '' });
        setSelectedTypes([]);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#32E2E2] rounded-full"
            initial={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1920,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 1080,
            }}
            animate={{
              y: [null, typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 1080],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get in <span className="text-[#32E2E2]">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Let's discuss how KritRNA can accelerate your rare disease programs
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <GlassCard hover={false}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="glass border-white/10 text-white placeholder:text-gray-500"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="glass border-white/10 text-white placeholder:text-gray-500"
                    placeholder="you@example.com"
                  />
                </div>
              </div>


              <div>
                <label htmlFor="topic" className="block text-sm font-medium text-gray-300 mb-2">
                  Topic *
                </label>
                <Select value={formData.topic} onValueChange={(value) => setFormData(prev => ({ ...prev, topic: value }))}>
                  <SelectTrigger className="glass border-white/10 text-white">
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#0A0E18] border-white/10 text-white">
                    <SelectItem value="partnership" className="text-white">Partnership Inquiry</SelectItem>
                    <SelectItem value="technology" className="text-white">Technology Questions</SelectItem>
                    <SelectItem value="clinical" className="text-white">Clinical Collaboration</SelectItem>
                    <SelectItem value="investment" className="text-white">Investment Opportunity</SelectItem>
                    <SelectItem value="media" className="text-white">Media & Press</SelectItem>
                    <SelectItem value="other" className="text-white">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="glass border-white/10 text-white placeholder:text-gray-500 resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-4">
                  Interested in (select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {collaborationTypes.map((type) => {
                    const Icon = type.icon;
                    const isSelected = selectedTypes.includes(type.id);
                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => toggleType(type.id)}
                        className={`glass p-4 rounded-lg transition-all duration-300 ${
                          isSelected ? 'bg-white/20 scale-105' : 'hover:bg-white/10'
                        }`}
                        style={{
                          border: isSelected ? `2px solid ${type.color}` : '1px solid rgba(255,255,255,0.1)',
                        }}
                      >
                        <Icon
                          className="w-8 h-8 mx-auto mb-2"
                          style={{ color: isSelected ? type.color : '#9CA3AF' }}
                        />
                        <div
                          className="text-xs font-medium text-center"
                          style={{ color: isSelected ? type.color : '#9CA3AF' }}
                        >
                          {type.label}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 rounded-lg bg-[#32E2E2] text-[#020617] font-semibold text-lg transition-all duration-300 hover:bg-[#32E2E2]/90 hover:scale-105 hover:shadow-[0_0_30px_rgba(50,226,226,0.5)]"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="text-center text-green-400">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="text-center text-red-400">
                  Failed to send message. Please try again or contact us directly.
                </div>
              )}
            </form>
          </GlassCard>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <blockquote className="text-2xl font-light text-white italic">
              <span className="text-[#32E2E2] text-3xl">"</span>
              Every genetic message deserves to be read to completion.
              <span className="text-[#32E2E2] text-3xl">"</span>
            </blockquote>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
