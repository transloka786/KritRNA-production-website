'use client';

import { motion } from 'framer-motion';
import GlassCard from '@/components/GlassCard';
import { BookOpen, Award, Briefcase } from 'lucide-react';

const publications = [
  {
    title: 'Engineered tRNAs suppress nonsense mutations in cells and in vivo',
    journal: 'Nature',
    year: '2023',
  },
  {
    title: 'Translation velocity determines the efficacy of engineered suppressor tRNAs on pathogenic nonsense mutations',
    journal: 'Nature Communications',
    year: '2024',
  },
  {
    title: 'Effect of mRNA/tRNA mutations on translation speed: Implications for human diseases',
    journal: 'Journal of Biological Chemistry',
    year: '2023',
  },
];

const experience = [
  {
    role: 'PhD & Postdoctoral Researcher',
    institution: 'University of Hamburg',
    period: '2019 - Present',
    description: 'Specialized in translation control, tRNA biology, and engineered suppressor tRNAs for nonsense mutation therapy',
  },
  {
    role: 'Co-Founder',
    institution: 'Aerokrishi',
    period: '2016 - 2018',
    description: 'Led aquaponics-based agriculture startup focused on urban farming solutions',
  },
  {
    role: 'Junior Scientist',
    institution: 'IGIB, Delhi',
    period: '2015 - 2016',
    description: 'Conducted chemical screening studies using zebrafish models for drug-induced liver injury research',
  },
];

export default function FounderPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Meet the <span className="text-[#E1FF17]">Founder</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Pioneering tRNA therapeutics for rare genetic diseases
          </p>
        </motion.div>

        {/* Founder Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <GlassCard hover={false}>
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 rounded-lg overflow-hidden border-2 border-[#E1FF17]/30 bg-gray-800/50">
                  <img
                    src="/founder-photo.jpg"
                    alt="Dr. Nikhil Bharti"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-500 text-sm">Upload founder photo as<br/>founder-photo.jpg</div>';
                      }
                    }}
                  />
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-2">Dr. Nikhil Bharti, Ph.D.</h2>
                <p className="text-[#E1FF17] text-lg mb-4">Founder, KritRNA</p>
                <p className="text-gray-400 text-sm">
                  Postdoctoral molecular biologist specializing in translation control, tRNA biology, and ribosome dynamics. Published in Nature and Nature Communications.
                </p>
              </div>
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-xl font-semibold text-white mb-4">Founder's Statement</p>

              <p>
                At KritRNA, our journey begins with a simple yet profound belief: that every life, no matter how rare its challenges, deserves the chance to heal.
              </p>

              <p>
                India is home to over 70 million people affected by rare diseases, individuals and families who often stand at the margins of medicine, unseen by global systems of innovation. Our mission is to change that narrative. Rooted in India's tradition of compassion (karuna) and collective responsibility (sangathan), we are building the scientific and technological foundation for affordable, accessible, and ethical therapies for rare genetic disorders.
              </p>

              <p>
                KritRNA was founded on the conviction that the tools of modern biology — RNA engineering, molecular design, and AI — can serve humanity best when guided by empathy and equity. By developing suppressor tRNA-based therapeutics tailored for the genetic landscape of Indian patients, we seek not only to correct premature stop codons but also to bridge the gap between discovery and dignity.
              </p>

              <p>
                Our vision is to democratize rare-disease therapy: to make India a global hub where innovation meets inclusion, where advanced molecular research translates into real treatment at a fraction of global costs, and where the next generation of scientists, clinicians, and entrepreneurs unite in service of a shared purpose — to give hope where none existed.
              </p>

              <p className="italic">
                Science is universal, but access is not. Through KritRNA, we aim to change that by ensuring that breakthroughs born from our labs echo the timeless Indian ideal of <span className="text-[#E1FF17]">Sarve Santu Niramayah</span> — "May all beings be free from disease."
              </p>
            </div>
          </GlassCard>
        </motion.div>

        {/* Publications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center space-x-3 mb-8">
            <BookOpen className="w-8 h-8 text-[#E1FF17]" />
            <h2 className="text-3xl font-bold text-white">Key Publications</h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard>
                  <h3 className="text-lg font-semibold text-white mb-2">{pub.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span className="text-[#E1FF17]">{pub.journal}</span>
                    <span>•</span>
                    <span>{pub.year}</span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center space-x-3 mb-8">
            <Briefcase className="w-8 h-8 text-[#E1FF17]" />
            <h2 className="text-3xl font-bold text-white">Experience</h2>
          </div>

          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                      <p className="text-[#E1FF17]">{exp.institution}</p>
                    </div>
                    <span className="text-sm text-gray-400">{exp.period}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education & Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center space-x-3 mb-8">
            <Award className="w-8 h-8 text-[#E1FF17]" />
            <h2 className="text-3xl font-bold text-white">Education</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlassCard>
              <h3 className="text-xl font-semibold text-white mb-2">Dr. rer. nat. (Ph.D.)</h3>
              <p className="text-[#E1FF17] mb-2">University of Hamburg, Germany</p>
              <p className="text-gray-400 text-sm">Molecular Biology & Translation Control</p>
            </GlassCard>

            <GlassCard>
              <h3 className="text-xl font-semibold text-white mb-2">Master's Degree</h3>
              <p className="text-[#E1FF17] mb-2">Vellore Institute of Technology</p>
              <p className="text-gray-400 text-sm">Biotechnology</p>
            </GlassCard>
            
            <GlassCard>
              <h3 className="text-xl font-semibold text-white mb-2">Bachelor's Degree (Honours)</h3>
              <p className="text-[#E1FF17] mb-2">Hindu College, Delhi University</p>
              <p className="text-gray-400 text-sm">Botany</p>
            </GlassCard>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
