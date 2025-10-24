import 'server-only';

import fs from 'fs';
import path from 'path';

let ptcDiseasesCache: any = null;
let indiaRareDiseasesCache: any = null;
let translationFactorsCache: any = null;

export function getPTCDiseases() {
  if (!ptcDiseasesCache) {
    const filePath = path.join(process.cwd(), 'data', 'ptc_diseases.json');
    ptcDiseasesCache = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }
  return ptcDiseasesCache;
}

export function getIndiaRareDiseases() {
  if (!indiaRareDiseasesCache) {
    const filePath = path.join(process.cwd(), 'data', 'india_rare_diseases.json');
    indiaRareDiseasesCache = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }
  return indiaRareDiseasesCache;
}

export function getTranslationFactors() {
  if (!translationFactorsCache) {
    const filePath = path.join(process.cwd(), 'data', 'translation_factors.json');
    translationFactorsCache = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }
  return translationFactorsCache;
}