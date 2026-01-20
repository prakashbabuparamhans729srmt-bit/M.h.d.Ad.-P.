import Link from 'next/link';
import { Network } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSidebar } from '../ui/sidebar';

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  let state = 'expanded';
  try {
    // This will throw an error if used outside of the provider, which is fine.
    // We can just default to the `expanded` state.
    const sidebar = useSidebar();
    state = sidebar.state;
  } catch (e) {
    // Do nothing.
  }
  
  return (
    <Link href="/" className={cn("flex items-center gap-2", state === 'collapsed' && "justify-center", className)}>
      <Network className="h-6 w-6 text-primary" />
      <span className={cn("text-xl font-bold font-headline text-foreground", state === 'collapsed' && "hidden")}>VyaparBandhu</span>
    </Link>
  );
}
