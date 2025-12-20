import type { ReactNode } from 'react';
import { PortalLayout } from '@/components/layout/portal-layout';
import { AdminSidebar } from '@/components/layout/admin-sidebar';

export default function AdminPortalLayout({ children }: { children: ReactNode }) {
  return (
    <PortalLayout sidebarContent={<AdminSidebar />}>
      {children}
    </PortalLayout>
  );
}
