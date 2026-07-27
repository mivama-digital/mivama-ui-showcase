"use client";

import {
  Button, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, Switch,
} from "@mivama/ui";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";

import { PageIntro, Panel, Section } from "../../_components/showcase";

const sheets = [
  { side: "top", icon: ArrowUp },
  { side: "right", icon: ArrowRight },
  { side: "bottom", icon: ArrowDown },
  { side: "left", icon: ArrowLeft },
] as const;

export default function SheetPage() {
  return (
    <main>
      <PageIntro eyebrow="Components / 07" title="Sheet" count="8 exports" description="Every placement side with focus management, close controls, header, body, and footer composition." />
      <div className="catalog">
        <Section index="07.1" title="Sheet sides" description="Top, right, bottom, and left placements use direction-specific entry and exit transitions.">
          <div className="demo-grid">
            {sheets.map(({ side, icon: Icon }) => (
              <Panel name={`Sheet / ${side}`} key={side}>
                <Sheet>
                  <SheetTrigger render={<Button variant="outline" />}><Icon />Open {side}</SheetTrigger>
                  <SheetContent side={side}>
                    <SheetHeader><SheetTitle>{side[0].toUpperCase() + side.slice(1)} sheet</SheetTitle><SheetDescription>This panel enters from the {side} edge of the viewport.</SheetDescription></SheetHeader>
                    <div className="sheet-body"><label className="switch-row"><Switch aria-label="Email alerts" defaultChecked />Email alerts</label><label className="switch-row"><Switch aria-label="Quiet mode" />Quiet mode</label></div>
                    <SheetFooter><SheetClose render={<Button />}>Save settings</SheetClose></SheetFooter>
                  </SheetContent>
                </Sheet>
              </Panel>
            ))}
            <Panel name="Sheet / no generated close">
              <Sheet><SheetTrigger render={<Button />}>Explicit close only</SheetTrigger><SheetContent showCloseButton={false}><SheetHeader><SheetTitle>Explicit close control</SheetTitle><SheetDescription>The top-right close button is not rendered.</SheetDescription></SheetHeader><SheetFooter><SheetClose render={<Button variant="outline" />}>Close sheet</SheetClose></SheetFooter></SheetContent></Sheet>
            </Panel>
          </div>
        </Section>
      </div>
    </main>
  );
}
