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

type PortalLayoutProps = {
  sidebarContent: ReactNode;
  children: ReactNode;
};

export function PortalLayout({ sidebarContent, children }: PortalLayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar>
          <SidebarHeader>
            <Logo />
          </SidebarHeader>
          <SidebarContent>{sidebarContent}</SidebarContent>
          <SidebarFooter>
            {/* Can add footer content here if needed */}
          </SidebarFooter>
        </Sidebar>
        <div className="flex-1">
          <SidebarInset>
            <header className="flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
              <SidebarTrigger className="md:hidden" />
              <div className="flex-1 text-right">
                <UserNav />
              </div>
            </header>
            <main className="flex-1 p-4 md:p-6">{children}</main>
          </SidebarInset>
        </div>
        <FloatingSupportWidget />
      </div>
    </SidebarProvider>
  );
}
