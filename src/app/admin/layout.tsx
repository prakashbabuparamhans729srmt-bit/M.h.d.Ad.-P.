'use client';

import type { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { PortalLayout } from '@/components/layout/portal-layout';
import { AdminSidebar } from '@/components/layout/admin-sidebar';
import { useAdmin, useUser } from '@/firebase';
import { Loader2 } from 'lucide-react';

export default function AdminPortalLayout({ children }: { children: ReactNode }) {
  const { isAdmin, isAdminLoading } = useAdmin();
  const { isUserLoading, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    // Wait until user loading and admin status check is complete
    if (!isUserLoading && !isAdminLoading) {
      if (!user) {
        // If no user is logged in, redirect to login
        router.push('/login');
      } else if (!isAdmin) {
        // If user is logged in but is not an admin, redirect to client dashboard
        router.push('/client/dashboard');
      }
    }
  }, [isAdmin, isAdminLoading, isUserLoading, user, router]);

  // While checking auth and admin status, show a loading screen
  if (isUserLoading || isAdminLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="ml-4">Verifying admin permissions...</p>
      </div>
    );
  }

  // If user is an admin, render the admin layout
  return (
    <PortalLayout sidebarContent={<AdminSidebar />}>
      {children}
    </PortalLayout>
  );
}
