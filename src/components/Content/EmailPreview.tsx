import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Reply, ReplyAll, Forward, AlertCircle, Check, Trash2, Archive, Flag, Tag } from 'lucide-react';
import { Email } from './EmailList';

interface EmailPreviewProps {
  email: Email | null;
}

const EmailPreview: React.FC<EmailPreviewProps> = ({ email }) => {
  if (!email) {
    return (
      <div className="flex h-full items-center justify-center bg-background text-muted-foreground">
        <p>Select an email to read</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-background">
      <div className="p-4 border-b border-border">
        <h2 className="text-2xl font-semibold text-foreground mb-4">{email.subject}</h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={`/avatars/${email.initials.toLowerCase()}.png`} />
              <AvatarFallback className="bg-gray-600 text-xl">{email.initials}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-foreground">{email.sender}</p>
              <p className="text-sm text-muted-foreground">To: Raghuram Pathmanaban <Check className="inline h-3 w-3 text-green-500 ml-1" /></p>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            {email.timestamp}
          </div>
        </div>
      </div>

      <div className="p-4 border-b border-border flex flex-wrap gap-2">
        <Button variant="secondary"><Reply className="mr-2 h-4 w-4" /> Reply</Button>
        <Button variant="secondary"><ReplyAll className="mr-2 h-4 w-4" /> Reply All</Button>
        <Button variant="secondary"><Forward className="mr-2 h-4 w-4" /> Forward</Button>
        <Button variant="outline" size="icon"><Archive className="h-4 w-4" /></Button>
        <Button variant="outline" size="icon"><Trash2 className="h-4 w-4" /></Button>
        <Button variant="outline" size="icon"><Flag className="h-4 w-4" /></Button>
        <Button variant="outline" size="icon"><Tag className="h-4 w-4" /></Button>
      </div>

      <ScrollArea className="flex-1 p-6">
        <div className="prose prose-sm dark:prose-invert max-w-none">
          {email.category === 'external' && (
             <Alert variant="destructive" className="bg-destructive/10 border-destructive/50 text-destructive-foreground mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>CAUTION: External Mail</AlertTitle>
                <AlertDescription>
                  Some content in this message has been blocked because the sender isn't in your Safe senders list.
                   <div className="mt-2">
                        <Button variant="outline" size="sm" className="mr-2 border-destructive/50 text-destructive-foreground hover:bg-destructive/20">Trust sender</Button>
                        <Button variant="outline" size="sm" className="border-destructive/50 text-destructive-foreground hover:bg-destructive/20">Show blocked content</Button>
                   </div>
                </AlertDescription>
            </Alert>
          )}
          
          <img src="https://via.placeholder.com/100x30/141414/FFFFFF?text=Figma" alt="Figma Logo" className="mb-8" />

          <p>Hi there,</p>
          <p>
            We're reaching out to let you know we're updating <strong>Figma's Terms of Service</strong> for our Starter and Professional plans. We do this regularly to ensure these terms are clear and cover the growing list of products, features, and services available to you as a Figma user. We've also updated our terms to stay current with applicable laws and regulations and to add clarity where we believe it would be useful.
          </p>
          <p>
            You can currently view both the existing and new Terms of Service <a href="#" className="text-primary underline">here</a>, and we encourage you to do so.
          </p>
          <p>
            These updated Terms of Service go into effect on <strong>July 29, 2025</strong> - by keeping your Figma account after that date you agree to these updated terms.
          </p>
          <p>
            Thanks,<br/>The Figma Team
          </p>
        </div>
      </ScrollArea>
    </div>
  );
};

export default EmailPreview;
