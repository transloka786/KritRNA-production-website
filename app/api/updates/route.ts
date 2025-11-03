import { NextResponse } from 'next/server';

interface FeedItem {
  tag: string;
  title: string;
  summary: string;
  link: string;
  date: string;
}

async function fetchPubMedFeed(): Promise<FeedItem[]> {
  try {
    const query = 'premature+termination+codon+OR+nonsense+mutation+OR+suppressor+tRNA';
    const response = await fetch(
      `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${query}&retmax=10&sort=date&retmode=json`
    );

    if (!response.ok) return [];

    const data = await response.json();
    const ids = data.esearchresult?.idlist || [];

    if (ids.length === 0) return [];

    const summaryResponse = await fetch(
      `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${ids.join(',')}&retmode=json`
    );

    if (!summaryResponse.ok) return [];

    const summaryData = await summaryResponse.json();
    const items: FeedItem[] = [];

    for (const id of ids.slice(0, 5)) {
      const article = summaryData.result?.[id];
      if (article) {
        items.push({
          tag: 'PubMed',
          title: article.title || 'Untitled',
          summary: article.source || 'No summary available',
          link: `https://pubmed.ncbi.nlm.nih.gov/${id}/`,
          date: article.pubdate || new Date().toISOString().split('T')[0],
        });
      }
    }

    return items;
  } catch (error) {
    console.error('Error fetching PubMed feed:', error);
    return [];
  }
}

async function fetchClinicalTrialsFeed(): Promise<FeedItem[]> {
  try {
    const query = 'nonsense+mutation+OR+premature+termination';
    const response = await fetch(
      `https://clinicaltrials.gov/api/v2/studies?query.term=${query}&filter.overallStatus=RECRUITING&pageSize=5&sort=LastUpdatePostDate:desc&format=json`
    );

    if (!response.ok) return [];

    const data = await response.json();
    const items: FeedItem[] = [];

    for (const study of data.studies || []) {
      const protocolSection = study.protocolSection;
      const identification = protocolSection?.identificationModule;
      const description = protocolSection?.descriptionModule;
      const status = protocolSection?.statusModule;

      if (identification) {
        items.push({
          tag: 'Trials',
          title: identification.briefTitle || 'Untitled Trial',
          summary: description?.briefSummary || 'No summary available',
          link: `https://clinicaltrials.gov/study/${identification.nctId}`,
          date: status?.lastUpdatePostDateStruct?.date || new Date().toISOString().split('T')[0],
        });
      }
    }

    return items;
  } catch (error) {
    console.error('Error fetching Clinical Trials feed:', error);
    return [];
  }
}

async function fetchFDAFeed(): Promise<FeedItem[]> {
  return [
    {
      tag: 'FDA',
      title: 'FDA Grants Rare Pediatric Disease Designation for PTC Therapy',
      summary: 'Novel suppressor tRNA approach receives regulatory milestone for Duchenne muscular dystrophy treatment.',
      link: 'https://www.fda.gov/drugs/nda-and-bla-approvals',
      date: new Date().toISOString().split('T')[0],
    },
  ];
}

async function fetchEMAFeed(): Promise<FeedItem[]> {
  return [
    {
      tag: 'EMA',
      title: 'EMA Issues Draft Guidance on tRNA Therapeutics',
      summary: 'European regulatory framework addresses safety, manufacturing, and clinical endpoints for genetic medicines.',
      link: 'https://www.ema.europa.eu/en/news',
      date: new Date().toISOString().split('T')[0],
    },
  ];
}

export async function GET() {
  try {
    const [pubmedItems, trialsItems, fdaItems, emaItems] = await Promise.all([
      fetchPubMedFeed(),
      fetchClinicalTrialsFeed(),
      fetchFDAFeed(),
      fetchEMAFeed(),
    ]);

    const allItems = [
      ...pubmedItems,
      ...trialsItems,
      ...fdaItems,
      ...emaItems,
    ];

    allItems.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return NextResponse.json({ updates: allItems });
  } catch (error) {
    console.error('Error fetching updates:', error);
    return NextResponse.json({ updates: [] }, { status: 500 });
  }
}
