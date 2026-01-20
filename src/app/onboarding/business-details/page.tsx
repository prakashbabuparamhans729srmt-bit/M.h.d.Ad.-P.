import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function BusinessDetailsPage() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-background p-4 font-body">
        <div className="w-full max-w-md">
            <header className="relative flex items-center justify-center py-4">
                <Link href="/onboarding/business-type" className="absolute left-0">
                    <Button variant="ghost" size="icon">
                        <ArrowLeft />
                    </Button>
                </Link>
                <h1 className="text-xl font-bold font-headline">व्यवसाय विवरण</h1>
            </header>
            <main className="mt-8 text-center">
                <p className="text-muted-foreground">Business details form will be here.</p>
            </main>
        </div>
    </div>
  );
}
