import { ArrowLeft, Store, Factory, Scissors, Utensils, BookOpen, HardHat, Car, Pill, Wrench } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const businessTypes = [
  { name: 'किराना स्टोर', icon: <Store className="w-10 h-10 text-primary" /> },
  { name: 'मैन्युफैक्चरिंग', icon: <Factory className="w-10 h-10 text-primary" /> },
  { name: 'सर्विस प्रोवाइडर', icon: <Wrench className="w-10 h-10 text-primary" /> },
  { name: 'रेस्टोरेंट/कैफे', icon: <Utensils className="w-10 h-10 text-primary" /> },
  { name: 'कोचिंग क्लास', icon: <BookOpen className="w-10 h-10 text-primary" /> },
  { name: 'कंस्ट्रक्शन', icon: <HardHat className="w-10 h-10 text-primary" /> },
  { name: 'ब्यूटी पार्लर', icon: <Scissors className="w-10 h-10 text-primary" /> },
  { name: 'ऑटो रिपेयर', icon: <Car className="w-10 h-10 text-primary" /> },
  { name: 'मेडिकल स्टोर', icon: <Pill className="w-10 h-10 text-primary" /> },
];

export default function BusinessTypeSelectionPage() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-background p-4 font-body animate-in fade-in-50 duration-500">
        <div className="w-full max-w-md">
            <header className="relative flex items-center justify-center py-4">
                <Link href="/welcome" className="absolute left-0">
                    <Button variant="ghost" size="icon">
                        <ArrowLeft />
                    </Button>
                </Link>
                <h1 className="text-xl font-bold font-headline">आपका व्यवसाय प्रकार</h1>
            </header>

            <main className="mt-8">
                <div className="grid grid-cols-3 gap-4 text-center">
                    {businessTypes.map((type) => (
                        <Link href="/onboarding/business-details" key={type.name} className="block">
                            <Card className="flex flex-col items-center justify-center p-4 aspect-square cursor-pointer hover:bg-accent hover:border-primary transition-all h-full">
                                <CardContent className="p-0 flex flex-col items-center justify-center gap-2">
                                    {type.icon}
                                    <span className="text-sm font-medium">{type.name}</span>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>

                <div className="mt-8">
                    <Button variant="outline" className="w-full h-12 text-lg" asChild>
                        <Link href="/onboarding/business-details">
                            अन्य व्यवसाय
                        </Link>
                    </Button>
                </div>
            </main>
        </div>
    </div>
  );
}
