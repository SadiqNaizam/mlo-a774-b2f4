import React from 'react';
import { cn } from '@/lib/utils';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Inbox, Send, FileText, Trash2, Archive, FileWarning, Pencil, MessageSquare, Rss, Search, Users } from 'lucide-react';

interface Folder {
  name: string;
  icon: React.ElementType;
  count?: number;
  active?: boolean;
}

const favorites: Folder[] = [
  { name: 'Inbox', icon: Inbox, count: 2, active: true },
  { name: 'Sent Items', icon: Send },
  { name: 'Drafts', icon: FileText, count: 4 },
  { name: 'Deleted Items', icon: Trash2, count: 28 },
];

const accountFolders: Folder[] = [
  { name: 'Inbox', icon: Inbox, count: 2, active: true },
  { name: 'Drafts', icon: FileText, count: 4 },
  { name: 'Sent Items', icon: Send },
  { name: 'Deleted Items', icon: Trash2, count: 28 },
  { name: 'Junk Email', icon: FileWarning },
  { name: 'Notes', icon: Pencil, count: 2 },
  { name: 'Archive', icon: Archive },
  { name: 'Conversation History', icon: MessageSquare },
  { name: 'RSS Feeds', icon: Rss },
  { name: 'Search Folders', icon: Search },
];

const FolderLink: React.FC<{ folder: Folder }> = ({ folder }) => (
  <a
    href="#"
    className={cn(
      'flex items-center text-sm py-2 px-3 rounded-md',
      folder.active
        ? 'bg-primary/10 text-primary font-semibold'
        : 'text-sidebar-foreground hover:bg-sidebar-accent'
    )}
  >
    <folder.icon className="h-4 w-4 mr-3" />
    <span className="flex-grow">{folder.name}</span>
    {folder.count && (
      <Badge
        variant={folder.active ? 'default' : 'secondary'}
        className={cn(
          'h-5 px-1.5 text-xs',
          folder.active
            ? 'bg-primary text-primary-foreground'
            : 'bg-sidebar-accent text-sidebar-accent-foreground'
        )}
      >
        {folder.count}
      </Badge>
    )}
  </a>
);

const FolderList: React.FC = () => {
  return (
    <nav className="space-y-4 text-sm">
      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center w-full text-sidebar-foreground hover:text-sidebar-accent-foreground text-xs font-semibold px-2 mb-1">
            <ChevronRight className="h-4 w-4 mr-1 transform transition-transform duration-200 [&[data-state=open]]:rotate-90" />
            Favorites
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-1">
          {favorites.map((folder) => (
            <FolderLink key={folder.name} folder={folder} />
          ))}
        </CollapsibleContent>
      </Collapsible>

      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center w-full text-sidebar-foreground hover:text-sidebar-accent-foreground text-xs font-semibold px-2 mb-1">
           <ChevronRight className="h-4 w-4 mr-1 transform transition-transform duration-200 [&[data-state=open]]:rotate-90" />
            raghuram.pathmanaba...
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-1">
          {accountFolders.map((folder) => (
            <FolderLink key={folder.name} folder={folder} />
          ))}
        </CollapsibleContent>
      </Collapsible>

       <a href="#" className="flex items-center text-sm py-2 px-3 rounded-md text-sidebar-foreground hover:bg-sidebar-accent">
          <Users className="h-4 w-4 mr-3" />
          <span className="flex-grow">Go to Groups</span>
        </a>
    </nav>
  );
};

export default FolderList;
