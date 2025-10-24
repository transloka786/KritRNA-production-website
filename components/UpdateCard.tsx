import { ExternalLink } from 'lucide-react';
import GlassCard from './GlassCard';
import { Badge } from '@/components/ui/badge';

interface UpdateCardProps {
  tag: string;
  title: string;
  summary: string;
  link: string;
  date: string;
}

const tagColors: Record<string, string> = {
  FDA: '#32E2E2',
  EMA: '#38B6FF',
  Trials: '#E1FF17',
  PubMed: '#C99EED',
};

export default function UpdateCard({ tag, title, summary, link, date }: UpdateCardProps) {
  return (
    <GlassCard className="h-full flex flex-col">
      <div className="flex items-start justify-between mb-3">
        <Badge
          variant="outline"
          style={{
            borderColor: tagColors[tag] || '#32E2E2',
            color: tagColors[tag] || '#32E2E2',
          }}
        >
          {tag}
        </Badge>
        <span className="text-xs text-gray-500">{date}</span>
      </div>
      <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
        {summary}
      </p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center space-x-2 text-[#32E2E2] hover:text-[#32E2E2]/80 transition-colors text-sm font-medium"
      >
        <span>Read more</span>
        <ExternalLink className="w-4 h-4" />
      </a>
    </GlassCard>
  );
}
