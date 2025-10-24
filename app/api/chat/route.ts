// app OR src/app /api/chat/route.ts
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';

// --- your original system prompt (unchanged) ---
const SYSTEM_PROMPT = `You are KritRNA's AI assistant, specialized in:
1. KritRNA's suppressor tRNA therapeutics and AI platforms
2. Translation Small-World model and tRNA Design Engine
3. India's rare disease landscape and NPRD policy
4. Clinical facts about premature termination codons (PTCs)
5. Public education on tRNA biology and genetic medicine

Stay strictly within these topics. For questions outside this scope, politely redirect to: trnaativetransloka@gmail.com

Use the provided data context to ground your responses with accurate statistics and citations when relevant.`;

// --- lazy-load your data helpers so this never bundles into Edge ---
async function buildContextPrompt(lang: string | undefined) {
  // Keep your original data functions
  const { getPTCDiseases, getIndiaRareDiseases, getTranslationFactors } = await import('@/lib/data');

  const ptcData = getPTCDiseases();
  const indiaData = getIndiaRareDiseases();
  const translationData = getTranslationFactors();

  return `
Context Data:
- PTC diseases affect ${ptcData?.summary?.global_nonsense_share_pct ?? 'N/A'} of genetic variants
- India has ${indiaData?.summary?.indians_with_rare_diseases_estimate ?? 'N/A'} people with rare diseases
- NPRD has helped ${indiaData?.summary?.nprd_beneficiaries_to_date ?? 'N/A'} beneficiaries
- Translation involves ${Array.isArray(translationData?.groups) ? translationData.groups.length : 'N/A'} major factor groups

Respond in ${lang === 'en' || !lang ? 'English' : 'the user\'s preferred language'}.
Keep responses concise and add "Sources available on request" for detailed answers.
`.trim();
}

// --- optional: simple GET so you can open /api/chat in the browser and see it's alive ---
export async function GET() {
  return NextResponse.json({ ok: true, ts: Date.now() });
}

// --- REQUIRED: POST handler your widget calls ---
export async function POST(request: Request) {
  try {
    const { messages, lang = 'en' } = await request.json().catch(() => ({} as any));

    if (!Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid payload: messages[] missing' }, { status: 400 });
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: 'OpenAI API key not configured' }, { status: 500 });
    }

    const contextPrompt = await buildContextPrompt(lang);

    // Use a current model; gpt-3.5-turbo is retired and will 4xx
    const resp = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        temperature: 0.7,
        max_tokens: 500,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT + '\n\n' + contextPrompt },
          ...messages,
        ],
      }),
    });

    if (!resp.ok) {
      // Surface the exact error so Network tab / Vercel logs show the reason
      const errText = await resp.text().catch(() => '');
      return NextResponse.json(
        { error: `OpenAI API error (${resp.status}): ${errText || 'No body'}` },
        { status: 500 }
      );
    }

    const data = await resp.json();
    const text =
      data?.choices?.[0]?.message?.content ??
      'I encountered an unexpected issue. Please email trnaativetransloka@gmail.com.';

    // Return both shapes so old/new widgets are compatible
    return NextResponse.json({ reply: text, content: text });
  } catch (error: any) {
    // Make sure runtime errors are visible
    return NextResponse.json(
      { error: error?.message || 'Failed to process chat request' },
      { status: 500 }
    );
  }
}
