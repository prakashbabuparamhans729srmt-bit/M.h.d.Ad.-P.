import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Logo } from '@/components/shared/logo';
import { Star, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function WelcomePage() {
  const goals = [
    'बिल बनाना आसान करें',
    'स्टॉक मैनेज करें',
    'GST फाइलिंग सरल करें',
    'बिक्री बढ़ाएं',
  ];

  const trustSignals = [
    '100% मुफ्त ट्रायल',
    'कोई क्रेडिट कार्ड नहीं',
    '2 मिनट में सेटअप',
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 font-body animate-in fade-in-50 duration-500">
      <main className="flex w-full max-w-md flex-col items-center text-center">
        <div className="mb-8 animate-in fade-in-0 slide-in-from-top-5 duration-700">
          <Logo />
        </div>

        <h1 className="mb-2 text-xl font-bold text-foreground animate-in fade-in-0 slide-in-from-top-5 delay-150 duration-700">
          "छोटे व्यवसाय, बड़े सपने"
        </h1>

        <div className="mb-8 flex items-center gap-2 animate-in fade-in-0 slide-in-from-top-5 delay-300 duration-700">
          <div className="flex text-yellow-400">
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
          </div>
          <span className="text-sm font-medium text-muted-foreground">4.8/5 (10,000+ रिव्यू)</span>
        </div>
        
        <Card className="w-full mb-8 text-left animate-in fade-in-0 slide-in-from-bottom-5 delay-400 duration-700">
          <CardHeader>
            <CardTitle className="text-center font-headline text-lg">🎯 क्या आप चाहते हैं?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {goals.map((goal, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Checkbox id={`goal-${index}`} className="border-primary" />
                <Label htmlFor={`goal-${index}`} className="text-base text-foreground">
                  {goal}
                </Label>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="w-full space-y-4 animate-in fade-in-0 slide-in-from-bottom-5 delay-500 duration-700">
          <Button className="w-full h-12 text-lg ripple" asChild>
            <Link href="/onboarding/business-type">मोबाइल नंबर से जारी रखें</Link>
          </Button>
          <div className="flex items-center gap-4">
            <hr className="w-full border-border" />
            <span className="text-sm text-muted-foreground">या</span>
            <hr className="w-full border-border" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full h-12 ripple">
              गूगल से लॉगिन
            </Button>
            <Button variant="outline" className="w-full h-12 ripple">
              फेसबुक से लॉगिन
            </Button>
          </div>
        </div>

        <div className="mt-10 flex w-full justify-around text-sm text-muted-foreground animate-in fade-in-0 slide-in-from-bottom-5 delay-600 duration-700">
          {trustSignals.map((signal, index) => (
            <div key={index} className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>{signal}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
