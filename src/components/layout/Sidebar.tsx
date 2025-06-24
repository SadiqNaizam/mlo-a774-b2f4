import React from 'react';
import { cn } from '@/lib/utils';
import SidebarNav from '../Navigation/SidebarNav';

interface SidebarProps {
  className?: string;
}

/**
 * Sidebar component for the main application layout.
 * It serves as a semantic container for the primary sidebar navigation.
 * The actual navigation logic and content are provided by the SidebarNav component.
 * This component's width is determined by its content (SidebarNav), fitting into the 'auto' column of the parent grid layout.
 */
const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <aside className={cn('h-screen flex flex-col bg-sidebar', className)}>
      <SidebarNav />
    </aside>
  );
};

export default Sidebar;