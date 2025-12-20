import type { ReactNode } from 'react';
import { PortalLayout } from '@/components/layout/portal-layout';
import { ClientSidebar } from '@/components/layout/client-sidebar';

export default function ClientPortalLayout({ children }: { children: ReactNode }) {
  return (
    <PortalLayout sidebarContent={<ClientSidebar />}>
      {children}
    </PortalLayout>
  );
}
