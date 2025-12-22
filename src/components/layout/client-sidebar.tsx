'use client';

import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { LayoutDashboard, Briefcase, FileText, MessageSquare, LifeBuoy, Wallet } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const menuItems = [
  { href: '/client/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/client/projects', label: 'Projects', icon: Briefcase },
  { href: '/client/files', label: 'Files', icon: FileText },
  { href: '/client/billing', label: 'Billing', icon: Wallet },
  { href: '#', label: 'Communication', icon: MessageSquare },
];

export function ClientSidebar() {
  const pathname = usePathname();

  return (
    <>
      <SidebarMenu>
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.label}>
            <SidebarMenuButton
              asChild
              isActive={pathname.startsWith(item.href) && item.href !== '#'}
              tooltip={item.label}
              title={item.label}
            >
              <Link href={item.href}>
                <item.icon />
                <span>{item.label}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
      <SidebarMenu className="mt-auto">
        <SidebarMenuItem>
          <SidebarMenuButton asChild tooltip="Support" title="Support">
            <Link href="#">
              <LifeBuoy />
              <span>Support</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </>
  );
}
