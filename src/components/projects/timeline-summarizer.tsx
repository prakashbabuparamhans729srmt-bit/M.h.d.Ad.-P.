'use client';

import { useState } from 'react';
import { summarizeProjectTimeline } from '@/ai/flows/summarize-project-timeline';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type TimelineSummarizerProps = {
  timeline: string;
};

export function TimelineSummarizer({ timeline }: TimelineSummarizerProps) {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { toast } = useToast();

  const handleSummarize = async () => {
    setIsLoading(true);
    setError('');
    setSummary('');

    try {
      const result = await summarizeProjectTimeline({ timeline });
      if (result.summary) {
        setSummary(result.summary);
      } else {
        throw new Error('Failed to generate summary.');
      }
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
      setError(errorMessage);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: `Could not generate summary: ${errorMessage}`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid gap-6">
      <div>
        <h3 className="font-semibold mb-2">Original Timeline</h3>
        <Textarea value={timeline} readOnly rows={8} className="bg-muted" />
      </div>

      <div className="flex justify-center">
        <Button onClick={handleSummarize} disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Summarizing...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4" />
              Summarize with AI
            </>
          )}
        </Button>
      </div>

      {isLoading && (
        <div className="flex items-center justify-center text-muted-foreground">
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          <p>AI is thinking... Please wait.</p>
        </div>
      )}

      {error && (
        <Card className="bg-destructive/10 border-destructive">
          <CardHeader className="flex-row items-center gap-3 space-y-0">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            <CardTitle className="text-destructive">Error</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive">{error}</p>
          </CardContent>
        </Card>
      )}

      {summary && (
        <Card className="bg-primary/5 border-primary">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-primary" />
              <CardTitle className="font-headline text-xl">AI Summary</CardTitle>
            </div>
            <CardDescription>Here is a concise summary of the project timeline.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-wrap">{summary}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
