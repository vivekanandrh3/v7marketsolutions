'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating market insights content.
 *
 * The flow takes a topic as input and generates an educational market insights post.
 * It includes a moderation step to ensure the content is suitable for educational purposes and doesn't provide financial advice.
 *
 * - generateMarketInsights - The main function to generate market insights.
 * - GenerateMarketInsightsInput - The input type for the generateMarketInsights function.
 * - GenerateMarketInsightsOutput - The output type for the generateMarketInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMarketInsightsInputSchema = z.object({
  topic: z.string().describe('The topic for the market insights post.'),
});
export type GenerateMarketInsightsInput = z.infer<typeof GenerateMarketInsightsInputSchema>;

const GenerateMarketInsightsOutputSchema = z.object({
  title: z.string().describe('The title of the market insights post.'),
  content: z.string().describe('The generated market insights content.'),
});
export type GenerateMarketInsightsOutput = z.infer<typeof GenerateMarketInsightsOutputSchema>;

export async function generateMarketInsights(input: GenerateMarketInsightsInput): Promise<GenerateMarketInsightsOutput> {
  return generateMarketInsightsFlow(input);
}

const generateMarketInsightsPrompt = ai.definePrompt({
  name: 'generateMarketInsightsPrompt',
  input: {schema: GenerateMarketInsightsInputSchema},
  output: {schema: GenerateMarketInsightsOutputSchema},
  prompt: `You are an expert market analyst and educator. Generate a market insights post on the following topic:

Topic: {{{topic}}}

Ensure the content is educational, insightful, and does not provide any financial advice or specific trade recommendations. Focus on explaining market concepts, potential scenarios, and risk management strategies.

Title:
Content:`,
});

const moderateMarketInsightsPrompt = ai.definePrompt({
  name: 'moderateMarketInsightsPrompt',
  input: {schema: GenerateMarketInsightsOutputSchema},
  output: {schema: GenerateMarketInsightsOutputSchema},
  prompt: `You are a moderator ensuring generated content does not provide financial advice.
  Rewrite the following content to be more educational and less likely to be construed as financial advice.
  Title: {{{title}}}
  Content: {{{content}}}
  `,  
});

const generateMarketInsightsFlow = ai.defineFlow(
  {
    name: 'generateMarketInsightsFlow',
    inputSchema: GenerateMarketInsightsInputSchema,
    outputSchema: GenerateMarketInsightsOutputSchema,
  },
  async input => {
    const {output} = await generateMarketInsightsPrompt(input);

    const moderatedOutput = await moderateMarketInsightsPrompt(output!);

    return moderatedOutput!;
  }
);
