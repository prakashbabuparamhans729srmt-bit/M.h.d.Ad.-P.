import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');

  return (
    <section className="relative w-full py-20 md:py-32">
       {heroImage && (
        <div className="absolute inset-0 bg-black">
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover opacity-20"
            data-ai-hint={heroImage.imageHint}
            priority
          />
           <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background" />
        </div>
      )}
      <div className="container relative z-10">
        <div className="max-w-3xl text-center mx-auto">
          <div className="mb-4">
            <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
              Business Amplified
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter">
            Elevate Your Business with VyaparSphere
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground">
            We provide multilingual websites, client portals, and AI-powered tools to expand your reach and streamline your operations.
          </p>
          <p className="mt-2 text-lg md:text-xl text-muted-foreground font-headline">
            हम आपकी पहुंच का विस्तार करने और आपके संचालन को सुव्यवस्थित करने के लिए बहुभाषी वेबसाइट, क्लाइंट पोर्टल और एआई-संचालित टूल प्रदान करते हैं।
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/login">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
