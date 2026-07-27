"use client";

import {
  Button, Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
  Message, MessageAuthor, MessageBody, MessageBubble, MessageHeader, MessageMeta, MessageTitle,
} from "@mivama/ui";
import { MoreHorizontal } from "lucide-react";

import { PageIntro, Panel, Section } from "../_components/showcase";

const messages = [
  { align: "start", tone: "default", author: "Maya", text: "The final screens are ready for review." },
  { align: "start", tone: "accent", author: "Maya", text: "This start-aligned message uses the accent tone." },
  { align: "end", tone: "default", author: "You", text: "The default tone also works at the end." },
  { align: "end", tone: "accent", author: "You", text: "I will leave implementation notes before lunch." },
] as const;

export default function ContentPage() {
  return (
    <main>
      <PageIntro eyebrow="Components / 02" title="Content" count="14 exports" description="Compound surfaces for structured information and conversational content." />
      <div className="catalog">
        <Section index="02.1" title="Card" description="Every Card subcomponent, both sizes, and structural combinations that activate parent styling.">
          <div className="demo-grid">
            <Panel name="Card / complete">
              <Card>
                <CardHeader>
                  <CardTitle>Quarterly workspace</CardTitle>
                  <CardDescription>All systems are healthy and reporting on schedule.</CardDescription>
                  <CardAction><Button size="icon-sm" variant="ghost" aria-label="More options"><MoreHorizontal /></Button></CardAction>
                </CardHeader>
                <CardContent><p className="sample-copy">The complete composition uses header, title, description, action, content, and footer.</p></CardContent>
                <CardFooter><Button size="sm">Open workspace</Button><Button size="sm" variant="ghost">Share</Button></CardFooter>
              </Card>
            </Panel>
            <Panel name="Card / small">
              <Card size="sm">
                <CardHeader><CardTitle>Compact card</CardTitle><CardDescription>Reduced internal spacing.</CardDescription></CardHeader>
                <CardContent><p className="sample-copy">Useful inside dense sidebars and dashboards.</p></CardContent>
              </Card>
            </Panel>
            <Panel name="Card / title only">
              <Card><CardHeader><CardTitle>A concise title</CardTitle></CardHeader></Card>
            </Panel>
            <Panel name="Card / content + footer">
              <Card><CardContent><p className="sample-copy">A card does not require a header.</p></CardContent><CardFooter><Button variant="outline" size="sm">Dismiss</Button></CardFooter></Card>
            </Panel>
          </div>
        </Section>

        <Section index="02.2" title="Message" description="The full alignment and tone cross-product, using every Message subcomponent.">
          <div className="demo-grid">
            {messages.map((message) => (
              <Panel name={`Message / ${message.align} + ${message.tone}`} key={`${message.align}-${message.tone}`}>
                <Message align={message.align}>
                  <MessageBubble tone={message.tone}>
                    <MessageHeader><MessageAuthor>{message.author}</MessageAuthor><MessageMeta>09:17</MessageMeta></MessageHeader>
                    <MessageTitle>Launch review</MessageTitle>
                    <MessageBody>{message.text}</MessageBody>
                  </MessageBubble>
                </Message>
              </Panel>
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}
