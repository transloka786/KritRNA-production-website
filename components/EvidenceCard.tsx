import Link from 'next/link';

interface EvidenceCardProps {
  value: string;
  label: string;
  denominator?: string;
  source: string;
  limitation: string;
  href?: string;
  accent?: string;
}

export default function EvidenceCard({
  value,
  label,
  denominator,
  source,
  limitation,
  href,
  accent = '#32E2E2',
}: EvidenceCardProps) {
  const content = (
    <div className="h-full rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055]">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <div className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {value}
          </div>
          {denominator && (
            <div className="mt-1 text-xs uppercase tracking-[0.16em] text-gray-500">
              {denominator}
            </div>
          )}
        </div>
        <span
          className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full shadow-[0_0_18px_currentColor]"
          style={{ color: accent, backgroundColor: accent }}
          aria-hidden="true"
        />
      </div>

      <h3 className="mb-4 text-lg font-semibold leading-snug text-white">{label}</h3>

      <div className="space-y-3 border-t border-white/10 pt-4 text-sm leading-relaxed">
        <p className="text-gray-400">
          <span className="font-medium text-gray-300">Source:</span> {source}
        </p>
        <p className="text-gray-500">
          <span className="font-medium text-gray-400">Read correctly:</span> {limitation}
        </p>
      </div>
    </div>
  );

  if (!href) return content;

  return (
    <Link href={href} className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#32E2E2] rounded-2xl">
      {content}
    </Link>
  );
}
