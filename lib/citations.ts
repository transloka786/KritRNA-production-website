export interface Citation {
  label: string;
  url: string;
}

export function formatCitations(citations: Citation[]): string {
  return citations.map((c, i) => `[${i + 1}] ${c.label}`).join('\n');
}

export function getCitationLinks(citations: Citation[]): { text: string; links: Citation[] } {
  return {
    text: formatCitations(citations),
    links: citations
  };
}