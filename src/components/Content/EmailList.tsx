import React from 'react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowUpDown, Filter, Reply, Forward } from 'lucide-react';

export interface Email {
  id: string;
  sender: string;
  initials: string;
  subject: string;
  preview: string;
  timestamp: string;
  time: string;
  isRead: boolean;
  category?: 'meeting' | 'external' | 'action';
  meetingInfo?: {
    date: string;
    time: string;
  };
}

const emailsData: Email[] = [
  {
    id: '1',
    sender: 'C&D Culture Team',
    initials: 'CT',
    subject: 'Recenter: A Modern Yoga...', 
    preview: 'Join the meeting now Meeting ID: 221 ...',
    timestamp: 'Thu 7/3/2025 12:00 ...',
    time: '1:13 PM',
    isRead: false,
    category: 'meeting',
    meetingInfo: { date: 'Thu 7/3/2025 12:00 ...', time: 'No conflicts' },
  },
  {
    id: '2',
    sender: 'Figma',
    initials: 'F',
    subject: "We've updated our Terms of...",
    preview: 'CAUTION:- External Mail.',
    timestamp: 'Today',
    time: '4:33 AM',
    isRead: true,
    category: 'external',
  },
  {
    id: '3',
    sender: 'KK',
    initials: 'KK',
    subject: 'ACTION REQUIRED: Mee...',
    preview: 'New monthly mailer for client engage...',
    timestamp: 'Mon 7:24 PM',
    time: 'Mon 7:24 PM',
    isRead: true,
    category: 'action',
  },
  {
    id: '4',
    sender: 'Prasad Maladkar, Mia Abendan, +1 other',
    initials: 'P',
    subject: 'Ascendion Daily Digest',
    preview: 'CAUTION:- External Mail.',
    timestamp: 'Mon 6:44 PM',
    time: 'Mon 6:44 PM',
    isRead: true,
  },
  {
    id: '5',
    sender: 'C&D Culture Team',
    initials: 'CT',
    subject: 'Unboxing Inclusion & All...',
    preview: 'Click here to join Join the meeting now...',
    timestamp: 'Mon 3:44 PM',
    time: 'Mon 3:44 PM',
    isRead: true,
  },
];

interface EmailListProps {
  selectedEmailId: string | null;
  onSelectEmail: (id: string) => void;
}

const EmailListItem: React.FC<{ email: Email; isSelected: boolean; onSelect: () => void }> = ({ email, isSelected, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className={cn(
        'flex gap-3 p-3 border-l-4 cursor-pointer',
        isSelected ? 'bg-accent border-primary' : 'border-transparent hover:bg-accent/50',
        !email.isRead && 'font-bold'
      )}
    >
      <Checkbox className="mt-1" checked={isSelected} />
      <Avatar className="h-10 w-10 text-sm">
        <AvatarImage src={`/avatars/${email.initials.toLowerCase()}.png`} />
        <AvatarFallback className={cn('bg-gray-600', isSelected && 'bg-primary/30')}>{email.initials}</AvatarFallback>
      </Avatar>
      <div className="flex-1 overflow-hidden">
        <div className="flex justify-between items-baseline">
          <p className={cn('truncate text-sm', isSelected ? 'text-accent-foreground' : 'text-foreground')}>{email.sender}</p>
          <p className="text-xs text-muted-foreground whitespace-nowrap">{email.time}</p>
        </div>
        <p className="truncate text-sm text-muted-foreground">{email.subject}</p>
        <p className="truncate text-xs text-muted-foreground">{email.preview}</p>
        {email.category === 'meeting' && email.meetingInfo && (
          <div className="flex justify-between items-center mt-2">
            <div>
              <p className="text-xs text-muted-foreground">{email.meetingInfo.date}</p>
              <p className="text-xs text-muted-foreground">{email.meetingInfo.time}</p>
            </div>
            <Button size="sm" className="bg-secondary hover:bg-secondary/80 text-secondary-foreground">RSVP</Button>
          </div>
        )}
      </div>
    </div>
  );
};

const EmailList: React.FC<EmailListProps> = ({ selectedEmailId, onSelectEmail }) => {
  return (
    <div className="w-[400px] bg-card flex flex-col border-r border-border">
      <div className="flex items-center justify-between p-2 border-b border-border">
        <Tabs defaultValue="focused" className="w-auto">
          <TabsList className="bg-transparent p-0">
            <TabsTrigger value="focused" className="data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4">Focused</TabsTrigger>
            <TabsTrigger value="other" className="data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4">Other</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ArrowUpDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <ScrollArea className="flex-1">
        <div className="text-xs text-muted-foreground font-semibold p-2 bg-secondary">Today</div>
        {emailsData.map(email => (
          <EmailListItem
            key={email.id}
            email={email}
            isSelected={selectedEmailId === email.id}
            onSelect={() => onSelectEmail(email.id)}
          />
        ))}
         <div className="text-xs text-muted-foreground font-semibold p-2 bg-secondary">Yesterday</div>
        {/* Add more emails for yesterday/last week etc. */}
      </ScrollArea>
    </div>
  );
};

export default EmailList;
