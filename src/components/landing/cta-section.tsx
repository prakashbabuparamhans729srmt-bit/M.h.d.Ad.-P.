import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function CtaSection() {
  return (
    <section className="w-full py-20 md:py-28">
      <div className="container">
        <div className="bg-primary text-primary-foreground rounded-lg p-10 md:p-16 text-center shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Ready to Amplify Your Business?</h2>
          <p className="mt-4 max-w-2xl mx-auto">
            Join VyaparSphere today and unlock a new level of efficiency and global reach for your enterprise.
          </p>
          <div className="mt-8">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/login">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
