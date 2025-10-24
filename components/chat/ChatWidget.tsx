'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, Globe, Loader as Loader2 } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

type Role = 'user' | 'assistant';
interface Message {
  role: Role;
  content: string;
  timestamp: Date;
}

const languages = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिन्दी' },
  { code: 'bn', name: 'বাংলা' },
  { code: 'mr', name: 'मराठी' },
  { code: 'ta', name: 'தமிழ்' },
  { code: 'te', name: 'తెలుగు' },
  { code: 'kn', name: 'ಕನ್ನಡ' },
];

export default function ChatWidget() {
  const { t, i18n } = useTranslation();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  useEffect(() => { scrollToBottom(); }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: text.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          // Only send role+content to API
          messages: [...messages, userMessage].map(m => ({ role: m.role, content: m.content })),
          lang: i18n.language,
        }),
      });

      const data = await res.json().catch(() => ({} as any));

      if (!res.ok) {
        const assistantError: Message = {
          role: 'assistant',
          content: (data?.error ?? t('chat.error')).toString(),
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, assistantError]);
        return;
      }

      const replyText = (data?.reply ?? data?.content ?? t('chat.error')).toString();

      const assistantMessage: Message = {
        role: 'assistant',
        content: replyText,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (err: any) {
      const assistantError: Message = {
        role: 'assistant',
        content: t('chat.error'),
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, assistantError]);
      // Optional: console.error('Chat error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="flex flex-col h-full max-h-[600px] bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80 rounded-xl border border-slate-600/50">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <h2 className="text-xl font-semibold text-white">{t('chat.title')}</h2>
        <Select value={i18n.language} onValueChange={i18n.changeLanguage}>
          <SelectTrigger className="w-32 glass border-white/10 text-white">
            <Globe className="w-4 h-4 mr-2" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-[#0A0E18] border-white/10 text-white">
            {languages.map(lang => (
              <SelectItem key={lang.code} value={lang.code} className="text-white">
                {lang.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.role === 'user' ? 'bg-brand-pink text-white' : 'bg-white/10 text-gray-300'
                }`}
              >
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                <p className="text-xs opacity-60 mt-1">
                  {message.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white/10 text-gray-300 p-3 rounded-lg flex items-center space-x-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span className="text-sm">{t('chat.thinking')}</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-white/10">
        <div className="flex space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t('chat.placeholder')}
            className="flex-1 glass border-white/10 text-white placeholder:text-gray-500"
            disabled={isLoading}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage(input);
              }
            }}
          />
          <Button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="bg-brand-pink hover:bg-brand-pink/90 text-white"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </form>
    </div>
  );
}
