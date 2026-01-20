
'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Repeat, Bot, BarChart2, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/dashboard', icon: Home, label: 'स्मार्ट' },
  { href: '/transactions', icon: Repeat, label: 'ट्रांजैक्शन' },
  { href: '/ai-assistant', icon: Bot, label: 'AI असिस्टेंट' },
  { href: '/insights', icon: BarChart2, label: 'इनसाइट्स' },
  { href: '/profile', icon: User, label: 'प्रोफाइल' },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen bg-background font-body">
      <main className="flex-1 pb-24">{children}</main>
      <div className="fixed bottom-0 left-0 right-0 h-20 bg-card border-t border-border z-50">
        <div className="grid h-full grid-cols-5 max-w-lg mx-auto">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;
            if (index === 2) { // The central AI button
              return (
                <div key={item.href} className="flex justify-center">
                  <Link href={item.href} className="-mt-6">
                    <div className="bg-primary text-primary-foreground rounded-full h-16 w-16 flex items-center justify-center border-4 border-background shadow-lg hover:bg-primary/90 transition-colors">
                      <item.icon className="h-8 w-8" />
                    </div>
                  </Link>
                </div>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex flex-col items-center justify-center gap-1 text-xs font-medium',
                  isActive ? 'text-primary' : 'text-muted-foreground',
                  'hover:text-primary transition-colors'
                )}
              >
                <item.icon className="h-5 w-5" />
                <span className="truncate">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
