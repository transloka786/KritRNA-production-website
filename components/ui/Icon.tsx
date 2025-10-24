'use client';

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

export default function Icon({ name, size = 24, className = '' }: IconProps) {
  const iconMap: Record<string, JSX.Element> = {
    // Homepage Principles
    'patient-first': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    'programmable-biology': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
        <circle cx="12" cy="12" r="2"/>
        <circle cx="6" cy="9" r="1"/>
        <circle cx="18" cy="9" r="1"/>
      </svg>
    ),
    'safety-design': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
        <circle cx="12" cy="10" r="2"/>
      </svg>
    ),

    // About Page Mission
    'restore-function': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="7.5,4.21 12,6.81 16.5,4.21"/>
        <polyline points="7.5,19.79 7.5,14.6 3,12"/>
        <polyline points="21,12 16.5,14.6 16.5,19.79"/>
        <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    'global-impact': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        <path d="M8 12h8"/>
        <circle cx="12" cy="8" r="1"/>
        <circle cx="16" cy="12" r="1"/>
        <circle cx="8" cy="16" r="1"/>
      </svg>
    ),
    'ai-driven': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="2"/>
        <rect x="9" y="9" width="6" height="6"/>
        <path d="M9 1v6"/>
        <path d="M15 1v6"/>
        <path d="M9 17v6"/>
        <path d="M15 17v6"/>
        <path d="M1 9h6"/>
        <path d="M17 9h6"/>
        <path d="M1 15h6"/>
        <path d="M17 15h6"/>
      </svg>
    ),

    // Technology Features
    'design-engine': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
        <path d="M8 12l4-2 4 2"/>
        <circle cx="12" cy="12" r="1"/>
      </svg>
    ),
    'small-world': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3"/>
        <circle cx="12" cy="5" r="2"/>
        <circle cx="19" cy="12" r="2"/>
        <circle cx="12" cy="19" r="2"/>
        <circle cx="5" cy="12" r="2"/>
        <path d="M12 8v1"/>
        <path d="M12 15v1"/>
        <path d="M16 12h1"/>
        <path d="M7 12h1"/>
        <path d="M14.5 9.5l.5-.5"/>
        <path d="M9 14.5l-.5.5"/>
        <path d="M14.5 14.5l.5.5"/>
        <path d="M9 9.5l-.5-.5"/>
      </svg>
    ),

    // Problem Page
    'dna-structure': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 12h16"/>
        <path d="M4 6h16"/>
        <path d="M4 18h16"/>
        <circle cx="8" cy="6" r="1"/>
        <circle cx="16" cy="6" r="1"/>
        <circle cx="6" cy="12" r="1"/>
        <circle cx="18" cy="12" r="1"/>
        <circle cx="8" cy="18" r="1"/>
        <circle cx="16" cy="18" r="1"/>
        <path d="M8 7v10"/>
        <path d="M16 7v10"/>
      </svg>
    ),
    'translation': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="16" rx="2"/>
        <path d="M7 8h10"/>
        <path d="M7 12h10"/>
        <path d="M7 16h6"/>
        <circle cx="12" cy="10" r="1"/>
        <circle cx="15" cy="14" r="1"/>
        <path d="M9 20l3-3 3 3"/>
      </svg>
    ),

    // Impact Page
    'metrics': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3v18h18"/>
        <path d="M7 16l4-4 4 4 6-6"/>
        <circle cx="7" cy="16" r="1"/>
        <circle cx="11" cy="12" r="1"/>
        <circle cx="15" cy="16" r="1"/>
        <circle cx="21" cy="10" r="1"/>
      </svg>
    ),
    'india-map': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
        <path d="M8 9h8"/>
        <path d="M12 5v8"/>
      </svg>
    ),

    // Partners Page
    'collaboration': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        <path d="M12 12h6"/>
        <path d="M15 9v6"/>
      </svg>
    ),
    'partnership': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
        <circle cx="12" cy="13" r="2"/>
      </svg>
    ),

    // Updates Page
    'news': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2z"/>
        <path d="M6 2v20"/>
        <path d="M10 6h8"/>
        <path d="M10 10h8"/>
        <path d="M10 14h5"/>
      </svg>
    ),
    'research': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8"/>
        <path d="M21 21l-4.35-4.35"/>
        <circle cx="11" cy="8" r="1"/>
        <circle cx="8" cy="11" r="1"/>
        <circle cx="14" cy="11" r="1"/>
        <circle cx="11" cy="14" r="1"/>
      </svg>
    ),

    // Contact Page
    'contact': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    ),
    'message': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <path d="M8 9h8"/>
        <path d="M8 13h6"/>
      </svg>
    ),

    // Generic/Utility Icons
    'arrow-right': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="5" y1="12" x2="19" y2="12"/>
        <polyline points="12,5 19,12 12,19"/>
      </svg>
    ),
    'external-link': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
        <polyline points="15,3 21,3 21,9"/>
        <line x1="10" y1="14" x2="21" y2="3"/>
      </svg>
    ),
    'check': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="20,6 9,17 4,12"/>
      </svg>
    ),
    'info': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="16" x2="12" y2="12"/>
        <line x1="12" y1="8" x2="12.01" y2="8"/>
      </svg>
    ),

    // Fallback icon
    'default': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
  };

  const IconComponent = iconMap[name] || iconMap['default'];

  return (
    <div 
      className={className}
      style={{ width: size, height: size }}
    >
      {IconComponent}
    </div>
  );
}