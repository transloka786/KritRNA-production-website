import { getTranslationFactors } from '@/lib/data';
import TechnologyClient from './technology-client';

export default function TechnologyPage() {
  const translationFactors = getTranslationFactors();

  return <TechnologyClient translationFactors={translationFactors} />;
}