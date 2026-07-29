import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import EvidenceCard from '@/components/EvidenceCard';

const pillars = [
  {
    title: 'Landscape',
    body: 'Map the documented premature-stop opportunity, then narrow it by disease mechanism and therapeutic relevance.',
    href: '/problem',
  },
  {
    title: 'Candidate quality',
    body: 'Evaluate charging, transcript context, delivery and native-stop safety as connected development gates.',
    href: '/technology',
  },
  {
    title: 'India-originated capability',
    body: 'Build programme decisions around the evidence realities, delivery constraints and rare-disease needs relevant to India.',
    href: '/impact',
  },
];

export default function EvidencePage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#32E2E2] mb-5">KritRNA evidence layer</p>
          <h1 className="text-5xl md:text-7xl font-light text-white tracking-tight leading-tight mb-8">
            Precision begins with knowing <span className="text-gradient">what deserves to be built.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
            KritRNA is building a suppressor tRNA platform around a clear operating principle: strong programmes emerge when biological opportunity, candidate performance, delivery and safety are evaluated together.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            This hub presents the public evidence behind that strategy while protecting candidate sequences, complete rankings, internal scoring logic and unfiled intellectual property.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <EvidenceCard
            value="92,157"
            denominator="documented stop-gain variants"
            label="A substantial, measurable premature-stop landscape"
            source="ClinVar-scale landscape analysis"
            limitation="Variant ascertainment demonstrates biological breadth; it is not a patient-prevalence estimate."
            href="/problem"
            accent="#32E2E2"
          />
          <EvidenceCard
            value="7 axes"
            denominator="programme-selection framework"
            label="Disease selection is multidimensional and evidence-led"
            source="KritRNA programme rubric"
            limitation="The public framework explains the logic without exposing confidential complete rankings."
            href="/technology"
            accent="#C99EED"
          />
          <EvidenceCard
            value="4 gates"
            denominator="candidate-development priorities"
            label="The decisive work is charging, context, delivery and safety"
            source="KritRNA scientific development framework"
            limitation="Each gate is linked to a concrete experiment and advancement decision."
            href="/technology"
            accent="#E1FF17"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Link
              key={pillar.title}
              href={pillar.href}
              className="group rounded-3xl border border-white/10 bg-white/[0.035] p-8 transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055]"
            >
              <div className="text-sm uppercase tracking-[0.18em] text-gray-500 mb-5">0{index + 1}</div>
              <h2 className="text-2xl font-semibold text-white mb-4">{pillar.title}</h2>
              <p className="text-gray-400 leading-relaxed mb-8">{pillar.body}</p>
              <span className="inline-flex items-center gap-2 font-semibold text-[#32E2E2]">
                Explore <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
