"use client";

import {
  Button, Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
  Message, MessageAvatar, MessageContent, MessageFooter, MessageGroup, MessageHeader,
} from "@mivama/ui";
import { MoreHorizontal } from "lucide-react";

import { PageIntro, Panel, Section } from "../_components/showcase";

const messages = [
  { align: "start", author: "Maya", initials: "MK", text: "The final screens are ready for review.", time: "09:17" },
  { align: "start", author: "Maya", initials: "MK", text: "I included the empty and loading states too.", time: "09:18" },
  { align: "end", author: "You", initials: "YO", text: "The responsive pass looks solid from here.", time: "09:22" },
  { align: "end", author: "You", initials: "YO", text: "I will leave implementation notes before lunch.", time: "09:23" },
] as const;

export default function ContentPage() {
  return (
    <main>
      <PageIntro eyebrow="Components / 02" title="Content" count="13 exports" description="Compound surfaces for structured information and conversational content." />
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

        <Section index="02.2" title="Message" description="Grouped exchanges in both alignments, using every official Message slot with semantic content.">
          <div className="demo-grid">
            {(["start", "end"] as const).map((alignment) => (
              <Panel name={`Message / ${alignment}-aligned group`} key={alignment}>
                <MessageGroup role="group" aria-label={`${alignment === "start" ? "Maya's" : "Your"} launch review messages`}>
                  {messages.filter((message) => message.align === alignment).map((message) => (
                    <Message align={message.align} key={message.time}>
                      <MessageAvatar aria-hidden="true"><span className="grid size-8 place-items-center text-xs font-medium">{message.initials}</span></MessageAvatar>
                      <MessageContent>
                        <MessageHeader><span>{message.author}</span></MessageHeader>
                        <div className={`max-w-[28rem] rounded-lg px-3 py-2 ${message.align === "end" ? "self-end bg-primary text-primary-foreground" : "bg-muted"}`}>
                          <strong className="block text-sm">Launch review</strong>
                          <p className="m-0 leading-relaxed">{message.text}</p>
                        </div>
                        <MessageFooter><time dateTime={`2026-07-27T${message.time}:00`}>{message.time}</time></MessageFooter>
                      </MessageContent>
                    </Message>
                  ))}
                </MessageGroup>
              </Panel>
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}
