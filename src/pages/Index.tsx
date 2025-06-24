import React, { useState, useMemo } from 'react';

// Import Layout and Feature Components
import MainAppLayout from '../components/layout/MainAppLayout';
import EmailList from '../components/Content/EmailList';
import EmailPreview from '../components/Content/EmailPreview';

// TypeScript interface for an email object, as required for this page's data management.
// This mirrors the structure used by the child components.
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

// Dummy email data, defined at the page level to manage state and data flow.
// This data is used to find the full email object to pass to the EmailPreview component.
const emailsData: Email[] = [
  {
    id: '1',
    sender: 'C&D Culture Team',
    initials: 'CT',
    subject: 'Recenter: A Modern Yoga...',
    preview: 'Join the meeting now Meeting ID: 221 ...',
    timestamp: 'Thu 7/3/2025 12:00 PM',
    time: '1:13 PM',
    isRead: false,
    category: 'meeting' as const,
    meetingInfo: { date: 'Thu 7/3/2025 12:00 ...', time: 'No conflicts' },
  },
  {
    id: '2',
    sender: 'Figma',
    initials: 'F',
    subject: "We've updated our Terms of Service",
    preview: 'CAUTION:- External Mail.',
    timestamp: 'Tue 6/24/2025 4:33 AM',
    time: '4:33 AM',
    isRead: true,
    category: 'external' as const,
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
    category: 'action' as const,
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

/**
 * IndexPage serves as the main entry point for the Email Client Dashboard.
 * It assembles the primary layout and orchestrates the state between the
 * email list and the email preview panes.
 */
const IndexPage: React.FC = () => {
  // State to track the currently selected email ID. Initialized to '2' to match the screenshot.
  const [selectedEmailId, setSelectedEmailId] = useState<string | null>('2');

  // Memoized value to find the full email object from the data array.
  // This prevents re-computation on every render unless the selected ID changes.
  const selectedEmail = useMemo(() => {
    if (!selectedEmailId) return null;
    return emailsData.find(email => email.id === selectedEmailId) || null;
  }, [selectedEmailId]);

  // Handler to update the state when a new email is selected in the list.
  const handleSelectEmail = (id: string) => {
    setSelectedEmailId(id);
  };

  return (
    <MainAppLayout>
      {/* 
        The main content area is a grid that divides space between the EmailList and EmailPreview.
        - `grid-cols-[400px_1fr]`: The EmailList has a fixed width of 400px, 
          and the EmailPreview takes the remaining space. This is derived from the EmailList component's styling.
        - `h-full`: Ensures the grid takes the full height of the parent <main> container.
      */}
      <div className="grid grid-cols-[400px_1fr] h-full">
        <EmailList
          selectedEmailId={selectedEmailId}
          onSelectEmail={handleSelectEmail}
        />
        <EmailPreview email={selectedEmail} />
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
