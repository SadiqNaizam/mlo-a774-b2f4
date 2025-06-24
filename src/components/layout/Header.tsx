import React from 'react';
import { cn } from '@/lib/utils';
import TopHeader from '../Dashboard/TopHeader';

interface HeaderProps {
  className?: string;
}

/**
 * Header component for the main application layout.
 * This component acts as a structural container for the TopHeader.
 * The TopHeader component, defined in the context, contains all the interactive elements
 * like search, action buttons, and user profile.
 * This component ensures the header is correctly placed within the app's grid layout.
 */
const Header: React.FC<HeaderProps> = ({ className }) => {
  // The TopHeader component from context already uses a <header> tag
  // and defines its own height and border. This wrapper component's role
  // is purely for placement within the main layout grid.
  return (
    <div className={cn('w-full', className)}>
      <TopHeader />
    </div>
  );
};

export default Header;