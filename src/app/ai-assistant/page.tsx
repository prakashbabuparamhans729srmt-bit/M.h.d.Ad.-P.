'use client';

import {
  ArrowLeft,
  Mic,
  Send,
  Bot,
  CheckCircle2,
  Settings
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const examplePrompts = [
  "कल की टॉप बिक्री क्या थी?",
  "कौन सा आइटम सबसे ज्यादा प्रॉफिट दे रहा है?",
  "अगले हफ्ते कितना स्टॉक खरीदूं?",
  "मेरा टैक्स सेविंग स्कोर क्या है?",
];

const automations = [
    { name: 'सुबह 9:00 - डेली रिपोर्ट', status: true },
    { name: 'शाम 7:00 - पेमेंट रिमाइंडर', status: true },
    { name: 'महीने की 25 तारीख - GST अलर्ट', status: true },
    { name: 'स्टॉक लो - सप्लायर ऑर्डर', status: false },
    { name: 'बकाया > ₹5000 - फॉलोअप', status: false },
];

const aiInsights = [
    "ग्राहक A 75% चांस से कल आएगा",
    "आइटम X की मांग 30% बढ़ने वाली है",
    "कल का बेस्ट टाइम: 5-7 PM",
    "नया ऑफर: 'खरीदो 2, पाओ 1 मुफ्त'",
];


export default function AiAssistantPage() {
  return (
    <div className="p-4 space-y-6 animate-in fade-in-50 duration-500">
       <header className="flex justify-between items-center">
        <Button variant="ghost" size="icon">
          <ArrowLeft />
        </Button>
        <h1 className="text-xl font-bold font-headline">व्यापारी AI असिस्टेंट</h1>
        <div className="flex items-center gap-1">
           <Button variant="ghost" size="icon">
            <Mic />
          </Button>
        </div>
      </header>

      <main className="space-y-6 pb-20">
         <div>
            <Label>💬 अभी पूछें:</Label>
            <div className="relative mt-2">
                <Textarea placeholder="आपका सवाल..." className="pr-12" rows={3}/>
                <Button size="icon" className="absolute right-3 top-1/2 -translate-y-1/2 h-8 w-8">
                    <Send className="h-4 w-4"/>
                </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
                {examplePrompts.map((prompt, i) => (
                    <Badge key={i} variant="outline" className="cursor-pointer">{prompt}</Badge>
                ))}
            </div>
        </div>

        <div>
            <Label>🤖 ऑटोमेशन:</Label>
            <Card className="mt-2">
                <CardContent className="p-4 space-y-3">
                    {automations.map((automation, i) => (
                        <div key={i} className="flex justify-between items-center text-sm">
                            <span className="flex items-center gap-2">
                                {automation.status ? <CheckCircle2 className="h-4 w-4 text-green-500"/> : <Settings className="h-4 w-4 text-muted-foreground"/> }
                                {automation.name}
                            </span>
                            <Badge variant={automation.status ? "default" : "secondary"}>{automation.status ? 'Active' : 'Setup'}</Badge>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>

        <div>
            <Label>📊 AI इनसाइट्स:</Label>
             <Card className="mt-2">
                <CardContent className="p-4 space-y-2 text-sm">
                    {aiInsights.map((insight, i) => (
                        <p key={i}>• {insight}</p>
                    ))}
                </CardContent>
            </Card>
        </div>

         <div className="grid grid-cols-2 gap-4">
            <Button variant="outline">नया ऑटोमेशन</Button>
            <Button variant="outline">AI ट्रेनिंग</Button>
        </div>

      </main>
    </div>
  );
}

const Label = ({ children }: { children: React.ReactNode }) => (
    <label className="text-base font-semibold text-foreground">
        {children}
    </label>
);
