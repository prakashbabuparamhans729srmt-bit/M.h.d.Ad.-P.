import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mail, Smartphone } from 'lucide-react';
import { Logo } from '@/components/shared/logo';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function NewEntryPage() {
  const bgImage = PlaceHolderImages.find((img) => img.id === 'entry-background');

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {bgImage && (
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src={bgImage.imageUrl}
            alt={bgImage.description}
            fill
            className="object-cover"
            data-ai-hint={bgImage.imageHint}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
      )}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center p-4 text-center">
        <div className="mb-8 animate-in fade-in-0 slide-in-from-top-5 duration-700">
          <Logo />
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl font-headline animate-in fade-in-0 slide-in-from-top-10 delay-150 duration-700">
          अपने व्यवसाय को नई ऊंचाइयों पर ले जाएं
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl animate-in fade-in-0 slide-in-from-top-10 delay-300 duration-700">
          VyaparBandhu के साथ अपने व्यवसाय को सरल बनाएं, बिक्री बढ़ाएं और विकास को गति दें। आज ही शुरुआत करें।
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row animate-in fade-in-0 slide-in-from-bottom-10 delay-500 duration-700">
          <Button size="lg" className="w-full sm:w-auto h-12 text-base" asChild>
            <Link href="/login">
              <Mail className="mr-2 h-5 w-5" />
              ईमेल से साइन अप करें
            </Link>
          </Button>
          <span className="text-muted-foreground hidden sm:block">या</span>
          <Button size="lg" variant="secondary" className="w-full sm:w-auto h-12 text-base" asChild>
             <Link href="/login">
              <Smartphone className="mr-2 h-5 w-5" />
              मोबाइल से साइन अप करें
            </Link>
          </Button>
        </div>

         <p className="mt-8 text-sm text-muted-foreground animate-in fade-in-0 slide-in-from-bottom-10 delay-700 duration-700">
          पहले से सदस्य हैं? <Link href="/login" className="font-semibold text-primary hover:underline">लॉग इन करें</Link>
        </p>

      </div>
    </div>
  );
}
