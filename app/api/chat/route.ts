// app/api/chat/route.ts
export const runtime = 'nodejs'; // critical if "@/lib/data" uses fs/path

import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are KritRNA's AI assistant, specialized in:
1. KritRNA's suppressor tRNA therapeutics and AI platforms
2. Translation Small-World model and tRNA Design Engine
3. India's rare disease landscape and NPRD policy
4. Clinical facts about premature termination codons (PTCs)
5. Public education on tRNA biology and genetic medicine

Stay strictly within these topics. For questions outside this scope, politely redirect to: trnaativetransloka@gmail.com

Use the provided data context to ground your responses with accurate statistics and citations when relevant.`;

// Helper to load Node-y libs only on server (avoids accidental edge bundling)
async function loadContext() {
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

Respond in English unless the user explicitly uses another language.
Keep responses concise and add "Sources available on request" for detailed answers.
`.trim();
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const messages = Array.isArray(body?.messages) ? body.messages : null;

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: 'Missing OPENAI_API_KEY' }, { status: 500 });
    }
    if (!messages) {
      return NextResponse.json({ error: 'Invalid payload: messages[] missing' }, { status: 400 });
    }

    const contextPrompt = await loadContext();

    // Call OpenAI (chat.completions; swap to responses API if you prefer)
    const resp = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',          // <- modern, available model
        temperature: 0.3,
        max_tokens: 700,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT + '\n\n' + contextPrompt },
          ...messages,
        ],
      }),
    });

    if (!resp.ok) {
      const errText = await resp.text().catch(() => '');
      // Surface the exact upstream error for quick debugging
      return NextResponse.json(
        { error: `OpenAI API error (${resp.status}): ${errText || 'No body'}` },
        { status: 500 }
      );
    }

    const data = await resp.json();
    const reply =
      data?.choices?.[0]?.message?.content ??
      'I encountered an unexpected issue. Please email trnaativetransloka@gmail.com.';

    // Standardize the response shape for the UI
    return NextResponse.json({ reply });
  } catch (e: any) {
    console.error('Chat API error:', e?.stack || e?.message || e);
    return NextResponse.json({ error: 'Failed to process chat request' }, { status: 500 });
  }
}
