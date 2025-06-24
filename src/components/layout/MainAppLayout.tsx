import React from 'react';
import { cn } from '@/lib/utils';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * MainAppLayout defines the primary visual structure of the application,
 * resembling a classic email client interface.
 * It uses a CSS Grid to arrange a fixed sidebar, a top header, and a main content area.
 * - Grid Layout: `grid-cols-[auto_1fr] grid-rows-[auto_1fr]` as per requirements.
 *   - The sidebar column width is determined by its content ('auto').
 *   - The header row height is determined by its content ('auto').
 * - The main content area (`children`) is designed to hold features
 *   that manage their own scrolling, hence the `overflow-hidden` on the <main> element.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] h-screen w-screen bg-background text-foreground',
        className
      )}
    >
      {/* Sidebar: Spans both rows in the first column */}
      <div className="row-span-2">
        <Sidebar />
      </div>

      {/* Header: Sits in the first row of the second column */}
      <div className="col-start-2 row-start-1">
        <Header />
      </div>

      {/* Main Content: Fills the remaining space and handles overflow internally */}
      <main className="col-start-2 row-start-2 overflow-hidden">
        {children}
      </main>
    </div>
  );
};

export default MainAppLayout;