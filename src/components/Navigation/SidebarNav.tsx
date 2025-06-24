import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Mail, Calendar, Users, CheckSquare, Briefcase, Cloud, Voicemail, Grid, Pencil } from 'lucide-react';
import FolderList from './FolderList';

interface SidebarNavProps {
  className?: string;
}

const mainNavItems = [
  { icon: Mail, label: 'Mail' },
  { icon: Calendar, label: 'Calendar' },
  { icon: Users, label: 'People' },
  { icon: CheckSquare, label: 'Tasks' },
  { icon: Briefcase, label: 'Briefing' },
  { icon: Cloud, label: 'OneDrive' },
  { icon: Voicemail, label: 'Voicemail' },
  { icon: Grid, label: 'More Apps' },
];

const SidebarNav: React.FC<SidebarNavProps> = ({ className }) => {
  const [activeItem, setActiveItem] = React.useState<string>('Mail');

  return (
    <div className={cn('flex h-full', className)}>
      <div className="flex flex-col items-center space-y-2 bg-sidebar p-2 border-r border-sidebar-border">
        <TooltipProvider delayDuration={0}>
          {mainNavItems.map((item) => (
            <Tooltip key={item.label}>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    'h-10 w-10 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                    activeItem === item.label && 'bg-sidebar-accent text-sidebar-accent-foreground'
                  )}
                  onClick={() => setActiveItem(item.label)}
                >
                  <item.icon className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
      <div className="w-64 bg-background p-3 flex flex-col">
        <div className="flex items-center justify-between pb-4 px-2">
          <h1 className="text-xl font-bold text-foreground">Outlook</h1>
        </div>
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          <Pencil className="mr-2 h-4 w-4" />
          New mail
        </Button>
        <div className="mt-4 flex-1">
          <FolderList />
        </div>
      </div>
    </div>
  );
};

export default SidebarNav;
