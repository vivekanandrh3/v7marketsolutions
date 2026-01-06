'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { generateResearch, type ResearchFormState } from '@/app/actions/research';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';

const initialState: ResearchFormState = {
  message: '',
  status: 'idle',
  data: undefined,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
      Generate Insights
    </Button>
  );
}

export function ResearchGenerator() {
  const [state, formAction] = useFormState(generateResearch, initialState);
  const { toast } = useToast();
  const { pending } = useFormStatus();

  useEffect(() => {
    if (state.status === 'error') {
      toast({
        variant: 'destructive',
        title: 'Generation Failed',
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <div className="space-y-8">
      <Card className='bg-card/50'>
        <CardHeader>
          <CardTitle className="font-headline text-xl">AI-Powered Market Commentary</CardTitle>
          <CardDescription>
            Enter a topic to generate high-level, educational analysis. The content is moderated by AI to ensure it remains educational and does not constitute financial advice.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="flex flex-col sm:flex-row items-end gap-4">
            <div className="w-full space-y-2">
              <Label htmlFor="topic">Market Topic</Label>
              <Input id="topic" name="topic" placeholder="e.g., 'Impact of interest rates on Forex'" required />
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>

      {(pending || state.data) && (
        <Card className='bg-card/50'>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">
              {pending ? "Generating..." : state.data?.title}
            </CardTitle>
          </CardHeader>
          <Separator className="mb-6"/>
          <CardContent>
            {pending ? (
              <div className="space-y-4">
                <div className="h-4 bg-muted rounded w-3/4 animate-pulse"></div>
                <div className="h-4 bg-muted rounded w-full animate-pulse"></div>
                <div className="h-4 bg-muted rounded w-full animate-pulse"></div>
                <div className="h-4 bg-muted rounded w-5/6 animate-pulse"></div>
              </div>
            ) : (
              <div className="text-foreground/90 whitespace-pre-wrap leading-relaxed">
                {state.data?.content}
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
