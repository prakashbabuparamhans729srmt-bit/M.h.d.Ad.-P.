'use server';
/**
 * @fileOverview An AI agent to summarize project timelines for clients.
 *
 * - summarizeProjectTimeline - A function that summarizes a project timeline.
 * - SummarizeProjectTimelineInput - The input type for the summarizeProjectTimeline function.
 * - SummarizeProjectTimelineOutput - The return type for the summarizeProjectTimeline function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeProjectTimelineInputSchema = z.object({
  timeline: z.string().describe('The project timeline text to summarize.'),
});
export type SummarizeProjectTimelineInput = z.infer<typeof SummarizeProjectTimelineInputSchema>;

const SummarizeProjectTimelineOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the project timeline.'),
  progress: z.string().describe('A short summary of the project timeline progress.'),
});
export type SummarizeProjectTimelineOutput = z.infer<typeof SummarizeProjectTimelineOutputSchema>;

export async function summarizeProjectTimeline(input: SummarizeProjectTimelineInput): Promise<SummarizeProjectTimelineOutput> {
  return summarizeProjectTimelineFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeProjectTimelinePrompt',
  input: {schema: SummarizeProjectTimelineInputSchema},
  output: {schema: SummarizeProjectTimelineOutputSchema},
  prompt: `You are an AI assistant that summarizes project timelines for clients. Please provide a concise summary of the following project timeline:\n\nTimeline: {{{timeline}}}\n\nSummary:`,
});

const summarizeProjectTimelineFlow = ai.defineFlow(
  {
    name: 'summarizeProjectTimelineFlow',
    inputSchema: SummarizeProjectTimelineInputSchema,
    outputSchema: SummarizeProjectTimelineOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return {
      ...output!,
      progress: 'The project timeline has been successfully summarized by AI.',
    };
  }
);
