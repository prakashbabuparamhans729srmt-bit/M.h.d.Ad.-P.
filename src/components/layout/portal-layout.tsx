'use client';

import type { ReactNode } from 'react';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
} from '@/components/ui/sidebar';
import { Logo } from '@/components/shared/logo';
import { UserNav } from '@/components/shared/user-nav';
import { FloatingSupportWidget } from '../shared/floating-support-widget';
import { Button } from '../ui/button';
import { PanelLeft } from 'lucide-react';
import { useSidebar } from '../ui/sidebar';

function MobileHeader() {
    const { toggleSidebar } = useSidebar();
    return (
         <header className="flex md:hidden h-16 items-center gap-4 border-b bg-background px-4">
            <Button
                variant="ghost"
                size="icon"
                onClick={toggleSidebar}
            >
                <PanelLeft className="h-6 w-6" />
                <span className="sr-only">Toggle Sidebar</span>
            </Button>
            <div className="flex-1 text-right">
              <UserNav />
            </div>
          </header>
    )
}

type PortalLayoutProps = {
  sidebarContent: ReactNode;
  children: ReactNode;
};

export function PortalLayout({ sidebarContent, children }: PortalLayoutProps) {
  return (
    <SidebarProvider>
        <Sidebar collapsible="icon">
          <SidebarHeader>
            <Logo />
          </SidebarHeader>
          <SidebarContent>{sidebarContent}</SidebarContent>
          <SidebarFooter>
            {/* Can add footer content here if needed */}
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <header className="hidden md:flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
            <SidebarTrigger />
            <div className="flex-1 text-right">
              <UserNav />
            </div>
          </header>
          {/* Mobile header */}
          <MobileHeader />
          <main className="flex-1 p-4 md:p-6">{children}</main>
          <FloatingSupportWidget />
        </SidebarInset>
    </SidebarProvider>
  );
}
