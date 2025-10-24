import { getPTCDiseases } from '@/lib/data';
import ProblemClient from './problem-client';

export default function ProblemPage() {
  const ptcData = getPTCDiseases();

  return <ProblemClient ptcData={ptcData} />;
}