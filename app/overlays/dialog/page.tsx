"use client";

import { useState } from "react";
import {
  Button, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Input,
} from "@mivama/ui";
import { Sparkles, Trash2 } from "lucide-react";

import { PageIntro, Panel, Section } from "../../_components/showcase";

export default function DialogPage() {
  const [controlledOpen, setControlledOpen] = useState(false);

  return (
    <main>
      <PageIntro eyebrow="Components / 06" title="Dialog" count="10 exports" description="Focus-managed modal surfaces with generated and explicit close controls. Portal and Overlay render internally through DialogContent." />
      <div className="catalog">
        <Section index="06.1" title="Dialog composition" description="Default, footer-close, no generated close button, destructive, and controlled examples.">
          <div className="demo-grid">
            <Panel name="Dialog / form">
              <Dialog>
                <DialogTrigger render={<Button />}><Sparkles />Invite collaborators</DialogTrigger>
                <DialogContent>
                  <DialogHeader><DialogTitle>Invite collaborators</DialogTitle><DialogDescription>Add people to this workspace. They will receive an email invitation.</DialogDescription></DialogHeader>
                  <label className="field">Email address<Input type="email" placeholder="name@company.com" /></label>
                  <DialogFooter><DialogClose render={<Button variant="outline" />}>Cancel</DialogClose><Button>Send invitation</Button></DialogFooter>
                </DialogContent>
              </Dialog>
            </Panel>
            <Panel name="Dialog / footer close">
              <Dialog>
                <DialogTrigger render={<Button variant="outline" />}>Footer close button</DialogTrigger>
                <DialogContent showCloseButton={false}>
                  <DialogHeader><DialogTitle>Close from the footer</DialogTitle><DialogDescription>The generated top-right control is disabled for this composition.</DialogDescription></DialogHeader>
                  <DialogFooter showCloseButton><Button>Save changes</Button></DialogFooter>
                </DialogContent>
              </Dialog>
            </Panel>
            <Panel name="Dialog / destructive">
              <Dialog>
                <DialogTrigger render={<Button className="bg-destructive text-white hover:bg-destructive/90 dark:text-white" variant="destructive" />}><Trash2 />Delete project</DialogTrigger>
                <DialogContent>
                  <DialogHeader><DialogTitle>Delete this project?</DialogTitle><DialogDescription>This action cannot be undone. All associated files will be removed.</DialogDescription></DialogHeader>
                  <DialogFooter><DialogClose render={<Button variant="outline" />}>Cancel</DialogClose><Button className="bg-destructive text-white hover:bg-destructive/90 dark:text-white" variant="destructive">Delete permanently</Button></DialogFooter>
                </DialogContent>
              </Dialog>
            </Panel>
            <Panel name="Dialog / controlled">
              <Dialog open={controlledOpen} onOpenChange={setControlledOpen}>
                <DialogTrigger render={<Button variant="secondary" />}>Open controlled dialog</DialogTrigger>
                <DialogContent>
                  <DialogHeader><DialogTitle>Controlled state</DialogTitle><DialogDescription>React state owns this dialog&apos;s open value.</DialogDescription></DialogHeader>
                  <DialogFooter><Button variant="outline" onClick={() => setControlledOpen(false)}>Close with state</Button></DialogFooter>
                </DialogContent>
              </Dialog>
            </Panel>
          </div>
        </Section>
      </div>
    </main>
  );
}
