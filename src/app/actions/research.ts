'use server';

import { generateMarketInsights, type GenerateMarketInsightsOutput } from '@/ai/flows/generate-market-insights';
import { z } from 'zod';

const researchSchema = z.object({
  topic: z.string().min(3, "Topic must be at least 3 characters long."),
});

export type ResearchFormState = {
  message: string;
  status: 'idle' | 'success' | 'error' | 'loading';
  data?: GenerateMarketInsightsOutput;
};

export async function generateResearch(
  prevState: ResearchFormState,
  formData: FormData
): Promise<ResearchFormState> {
  const validatedFields = researchSchema.safeParse({
    topic: formData.get('topic'),
  });

  if (!validatedFields.success) {
    const errorMessages = validatedFields.error.errors.map(e => e.message).join(' ');
    return {
      ...prevState,
      message: `Error: ${errorMessages}`,
      status: 'error',
    };
  }

  try {
    const result = await generateMarketInsights({ topic: validatedFields.data.topic });
    return {
      message: 'Insights generated successfully.',
      status: 'success',
      data: result,
    };
  } catch (error) {
    console.error("Error generating market insights:", error);
    return {
      ...prevState,
      message: 'Failed to generate insights. Please try again.',
      status: 'error',
    };
  }
}
