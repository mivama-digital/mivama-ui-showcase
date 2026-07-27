"use client";

import {
  Attachment, AttachmentAction, AttachmentActions, AttachmentContent, AttachmentDescription,
  AttachmentGroup, AttachmentHeader, AttachmentMedia, AttachmentTitle, AttachmentTrigger,
} from "@mivama/ui";
import { Download, FileText, RefreshCw, X } from "lucide-react";

import { PageIntro, Panel, Section } from "../_components/showcase";

const orientations = ["horizontal", "vertical"] as const;
const sizes = ["default", "sm"] as const;
const states = ["default", "uploading", "processing", "error"] as const;
const mediaVariants = ["icon", "image"] as const;

function descriptionFor(state: typeof states[number]) {
  if (state === "uploading") return "Uploading · 64%";
  if (state === "processing") return "Processing file...";
  if (state === "error") return "Upload failed · retry available";
  return "PDF · 4.8 MB";
}

export default function AttachmentsPage() {
  return (
    <main>
      <PageIntro eyebrow="Components / 08" title="Attachments" count="32 states" description="The complete orientation × size × status × media matrix, plus grouped and linked file examples." />
      <div className="catalog">
        {orientations.map((orientation, orientationIndex) => (
          <Section
            index={`08.${orientationIndex + 1}`}
            title={`${orientation[0].toUpperCase() + orientation.slice(1)} attachments`}
            description={`Both sizes, all four states, and icon/image media in the ${orientation} layout.`}
            key={orientation}
          >
            <div className={`attachment-matrix attachment-matrix-${orientation}`}>
              {sizes.flatMap((size) => states.flatMap((state) => mediaVariants.map((media) => (
                <Panel name={`${size} / ${state} / ${media}`} key={`${orientation}-${size}-${state}-${media}`}>
                  <Attachment orientation={orientation} size={size} state={state}>
                    <AttachmentMedia variant={media}>
                      {media === "icon" ? <FileText /> : <div className="attachment-preview">PDF</div>}
                    </AttachmentMedia>
                    <AttachmentContent><AttachmentHeader><AttachmentTitle>{state}-report-with-a-long-filename.pdf</AttachmentTitle><AttachmentDescription>{descriptionFor(state)}</AttachmentDescription></AttachmentHeader></AttachmentContent>
                    <AttachmentActions>
                      {state === "error" ? <AttachmentAction aria-label="Retry"><RefreshCw /></AttachmentAction> : <AttachmentAction aria-label={state === "default" ? "Download" : "Cancel"}>{state === "default" ? <Download /> : <X />}</AttachmentAction>}
                    </AttachmentActions>
                    <AttachmentTrigger aria-label={`Open ${state} report`} />
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
                <Attachment><AttachmentMedia><FileText /></AttachmentMedia><AttachmentContent><AttachmentHeader><AttachmentTitle>brand-guidelines.pdf</AttachmentTitle><AttachmentDescription>PDF · 4.8 MB</AttachmentDescription></AttachmentHeader></AttachmentContent><AttachmentActions><AttachmentAction aria-label="Download"><Download /></AttachmentAction></AttachmentActions><AttachmentTrigger href="#brand-guidelines" aria-label="Open brand guidelines" /></Attachment>
                <Attachment state="processing" size="sm"><AttachmentMedia><FileText /></AttachmentMedia><AttachmentContent><AttachmentHeader><AttachmentTitle>campaign-assets.zip</AttachmentTitle><AttachmentDescription>Processing upload...</AttachmentDescription></AttachmentHeader></AttachmentContent><AttachmentActions><AttachmentAction aria-label="Cancel"><X /></AttachmentAction></AttachmentActions></Attachment>
              </AttachmentGroup>
            </Panel>
          </div>
        </Section>
      </div>
    </main>
  );
}
