import { NextResponse } from 'next/server';
import { getPTCDiseases, getIndiaRareDiseases, getTranslationFactors } from '@/lib/data';

const SYSTEM_PROMPT = `You are KritRNA's AI assistant, specialized in:
1. KritRNA's suppressor tRNA therapeutics and AI platforms
2. Translation Small-World model and tRNA Design Engine
3. India's rare disease landscape and NPRD policy
4. Clinical facts about premature termination codons (PTCs)
5. Public education on tRNA biology and genetic medicine

Stay strictly within these topics. For questions outside this scope, politely redirect to: trnaativetransloka@gmail.com

Use the provided data context to ground your responses with accurate statistics and citations when relevant.`;

export async function POST(request: Request) {
  try {
    const { messages, lang = 'en' } = await request.json();

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      );
    }

    // Load context data
    const ptcData = getPTCDiseases();
    const indiaData = getIndiaRareDiseases();
    const translationData = getTranslationFactors();

    const contextPrompt = `
Context Data:
- PTC diseases affect ${ptcData.summary.global_nonsense_share_pct} of genetic variants
- India has ${indiaData.summary.indians_with_rare_diseases_estimate} people with rare diseases
- NPRD has helped ${indiaData.summary.nprd_beneficiaries_to_date} beneficiaries
- Translation involves ${translationData.groups.length} major factor groups

Respond in ${lang === 'en' ? 'English' : 'the user\'s preferred language'}.
Keep responses concise and add "Sources available on request" for detailed answers.
`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT + '\n\n' + contextPrompt },
          ...messages,
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error('OpenAI API error');
    }

    const data = await response.json();
    const content = data.choices[0]?.message?.content || 'I apologize, but I encountered an error. Please contact trnaativetransloka@gmail.com for assistance.';

    return NextResponse.json({ content });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    );
  }
}