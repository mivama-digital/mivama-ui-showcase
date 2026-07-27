"use client";

import {
  Attachment, AttachmentAction, AttachmentActions, AttachmentContent, AttachmentDescription,
  AttachmentGroup, AttachmentMedia, AttachmentTitle, AttachmentTrigger,
} from "@mivama/ui";
import { Download, FileText, RefreshCw, X } from "lucide-react";

import { PageIntro, Panel, Section } from "../_components/showcase";

const orientations = ["horizontal", "vertical"] as const;
const sizes = ["default", "sm", "xs"] as const;
const states = ["idle", "uploading", "processing", "error", "done"] as const;
const mediaVariants = ["icon", "image"] as const;

function descriptionFor(state: typeof states[number]) {
  if (state === "idle") return "Ready to upload · 4.8 MB";
  if (state === "uploading") return "Uploading · 64%";
  if (state === "processing") return "Processing file...";
  if (state === "error") return "Upload failed · retry available";
  return "PDF · 4.8 MB";
}

export default function AttachmentsPage() {
  return (
    <main>
      <PageIntro eyebrow="Components / 08" title="Attachments" count="60 states" description="The complete orientation × size × status × media matrix, plus grouped and linked file examples." />
      <div className="catalog">
        {orientations.map((orientation, orientationIndex) => (
          <Section
            index={`08.${orientationIndex + 1}`}
            title={`${orientation[0].toUpperCase() + orientation.slice(1)} attachments`}
            description={`All three sizes, all five states, and icon/image media in the ${orientation} layout.`}
            key={orientation}
          >
            <div className={`attachment-matrix attachment-matrix-${orientation}`}>
              {sizes.flatMap((size) => states.flatMap((state) => mediaVariants.map((media) => (
                <Panel name={`${size} / ${state} / ${media}`} key={`${orientation}-${size}-${state}-${media}`}>
                  <Attachment orientation={orientation} size={size} state={state}>
                    <AttachmentMedia variant={media}>
                      {media === "icon" ? <FileText /> : <div className="attachment-preview">PDF</div>}
                    </AttachmentMedia>
                    <AttachmentContent><AttachmentTitle>{state}-report-with-a-long-filename.pdf</AttachmentTitle><AttachmentDescription className={state === "error" ? "text-foreground!" : undefined}>{descriptionFor(state)}</AttachmentDescription></AttachmentContent>
                    <AttachmentActions>
                      {state === "error" ? <AttachmentAction aria-label="Retry upload"><RefreshCw /></AttachmentAction> : state === "done" ? <AttachmentAction aria-label="Download report"><Download /></AttachmentAction> : <AttachmentAction aria-label={state === "idle" ? "Remove file" : "Cancel upload"}><X /></AttachmentAction>}
                    </AttachmentActions>
                    {state === "done" ? <AttachmentTrigger render={<a href="/content" />} aria-label="Open completed report" /> : null}
                  </Attachment>
                </Panel>
              ))))}
            </div>
          </Section>
        ))}

        <Section index="08.3" title="Attachment groups" description="Mixed states and an anchor trigger demonstrate the complete compound family in a realistic list.">
          <div className="demo-grid single">
            <Panel name="AttachmentGroup / mixed files">
              <AttachmentGroup>
                <Attachment state="done"><AttachmentMedia><FileText /></AttachmentMedia><AttachmentContent><AttachmentTitle>brand-guidelines.pdf</AttachmentTitle><AttachmentDescription>PDF · 4.8 MB</AttachmentDescription></AttachmentContent><AttachmentActions><AttachmentAction aria-label="Download brand guidelines"><Download /></AttachmentAction></AttachmentActions><AttachmentTrigger render={<a href="/content" />} aria-label="Open brand guidelines" /></Attachment>
                <Attachment state="processing" size="sm"><AttachmentMedia><FileText /></AttachmentMedia><AttachmentContent><AttachmentTitle>campaign-assets.zip</AttachmentTitle><AttachmentDescription>Processing upload...</AttachmentDescription></AttachmentContent><AttachmentActions><AttachmentAction aria-label="Cancel upload"><X /></AttachmentAction></AttachmentActions></Attachment>
              </AttachmentGroup>
            </Panel>
          </div>
        </Section>
      </div>
    </main>
  );
}
