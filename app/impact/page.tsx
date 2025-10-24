import { getIndiaRareDiseases } from '@/lib/data';
import ImpactClient from './impact-client';

export default function ImpactPage() {
  const indiaData = getIndiaRareDiseases();

  return <ImpactClient indiaData={indiaData} />;
}