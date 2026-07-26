"use client";

import {
  Alert, AlertAction, AlertDescription, AlertTitle,
  Attachment, AttachmentAction, AttachmentActions, AttachmentContent, AttachmentDescription,
  AttachmentGroup, AttachmentHeader, AttachmentMedia, AttachmentTitle, AttachmentTrigger,
  Badge,
  Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
  Button,
  Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
  Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
  Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle,
  Input,
  Message, MessageAuthor, MessageBody, MessageBubble, MessageHeader, MessageMeta, MessageTitle,
  Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious,
  Progress, ProgressLabel, ProgressValue,
  Separator,
  Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger,
  Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider,
  Skeleton,
  Switch,
  Tabs, TabsContent, TabsList, TabsTrigger,
  Textarea,
} from "@mivama/ui";
import {
  Bell, Check, CircleCheck, Download, FileText, Home, Inbox, LayoutGrid,
  Menu, MoreHorizontal, Search, Settings, Sparkles, Users, X,
} from "lucide-react";

const sections = [
  "actions", "content", "feedback", "forms", "navigation", "overlays", "data", "layout",
];

function Section({ index, id, title, description, children }: {
  index: string; id: string; title: string; description: string; children: React.ReactNode;
}) {
  return (
    <section className="catalog-section" id={id}>
      <div className="section-label">
        <span className="section-index">{index}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {children}
    </section>
  );
}

function Panel({ name, children }: { name: string; children: React.ReactNode }) {
  return <div className="demo-panel"><span className="component-name">{name}</span>{children}</div>;
}

export default function HomePage() {
  return (
    <main className="lab-shell">
      <header className="lab-header">
        <div>
          <span className="eyebrow">Mivama design engineering / 001</span>
          <h1>UI <span>component</span><br />field guide.</h1>
        </div>
        <div className="header-meta">
          <strong>92</strong>
          exported React components, rendered from the live <code>@mivama/ui</code> package.
        </div>
      </header>

      <nav className="jump-nav" aria-label="Component sections">
        {sections.map((section) => <a href={`#${section}`} key={section}>{section}</a>)}
      </nav>

      <div className="catalog">
        <Section index="01" id="actions" title="Actions" description="Button and badge variants for primary actions, quiet controls, and status labels.">
          <div className="demo-grid">
            <Panel name="Button / variants">
              <div className="stack">
                <Button>Default</Button><Button variant="brand">Brand</Button><Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button><Button variant="ghost">Ghost</Button><Button variant="destructive">Delete</Button>
                <Button variant="link">Learn more</Button><Button variant="light">Light</Button>
              </div>
            </Panel>
            <Panel name="Button / sizes + Badge">
              <div className="column">
                <div className="stack">
                  <Button size="xs">Extra small</Button><Button size="sm">Small</Button><Button size="lg">Large</Button>
                  <Button size="icon" aria-label="Settings"><Settings /></Button>
                </div>
                <Separator />
                <div className="stack">
                  <Badge>Active</Badge><Badge variant="accent">New</Badge><Badge variant="secondary">Draft</Badge>
                  <Badge variant="outline">Review</Badge><Badge variant="destructive">Blocked</Badge><Badge variant="ghost">Quiet</Badge>
                </div>
              </div>
            </Panel>
          </div>
        </Section>

        <Section index="02" id="content" title="Content" description="Structured surfaces for grouping information and human conversation.">
          <div className="demo-grid">
            <Panel name="Card family">
              <Card>
                <CardHeader>
                  <CardTitle>Quarterly workspace</CardTitle>
                  <CardDescription>All systems are healthy and reporting on schedule.</CardDescription>
                  <CardAction><Button size="icon-sm" variant="ghost" aria-label="More options"><MoreHorizontal /></Button></CardAction>
                </CardHeader>
                <CardContent><Progress value={72}><ProgressLabel>Completion</ProgressLabel><ProgressValue /></Progress></CardContent>
                <CardFooter><Button size="sm">Open workspace</Button><Button size="sm" variant="ghost">Share</Button></CardFooter>
              </Card>
            </Panel>
            <Panel name="Message family">
              <div className="column">
                <Message>
                  <MessageBubble>
                    <MessageHeader><MessageAuthor>Maya</MessageAuthor><MessageMeta>09:14</MessageMeta></MessageHeader>
                    <MessageTitle>Launch review</MessageTitle>
                    <MessageBody>The final screens are ready. Can you review the mobile states?</MessageBody>
                  </MessageBubble>
                </Message>
                <Message align="end">
                  <MessageBubble tone="accent">
                    <MessageHeader><MessageAuthor>You</MessageAuthor><MessageMeta>09:17</MessageMeta></MessageHeader>
                    <MessageBody>On it. I will leave notes before lunch.</MessageBody>
                  </MessageBubble>
                </Message>
              </div>
            </Panel>
          </div>
        </Section>

        <Section index="03" id="feedback" title="Feedback" description="System feedback ranging from subtle loading placeholders to urgent alerts.">
          <div className="demo-grid">
            <Panel name="Alert family">
              <div className="column">
                <Alert variant="success"><CircleCheck /><AlertTitle>Ready to publish</AlertTitle><AlertDescription>All required checks passed.</AlertDescription><AlertAction><Button size="xs" variant="outline">View</Button></AlertAction></Alert>
                <Alert variant="warning"><Bell /><AlertTitle>Review needed</AlertTitle><AlertDescription>Two items need your attention.</AlertDescription></Alert>
                <Alert variant="destructive"><X /><AlertTitle>Sync failed</AlertTitle><AlertDescription>Reconnect the integration and retry.</AlertDescription></Alert>
              </div>
            </Panel>
            <Panel name="Progress + Skeleton">
              <div className="column">
                <Progress value={64}><ProgressLabel>Uploading assets</ProgressLabel><ProgressValue /></Progress>
                <Separator />
                <div className="stack"><Skeleton className="size-12 rounded-full" /><div className="column" style={{ gap: ".45rem", flex: 1 }}><Skeleton className="h-4 w-2/3" /><Skeleton className="h-3 w-full" /><Skeleton className="h-3 w-4/5" /></div></div>
              </div>
            </Panel>
          </div>
        </Section>

        <Section index="04" id="forms" title="Forms" description="Accessible field primitives and compact preference controls.">
          <div className="demo-grid">
            <Panel name="Input + Textarea">
              <div className="field-grid">
                <label className="field">Project name<Input defaultValue="Mivama Portal" /></label>
                <label className="field">Search<Input placeholder="Search projects..." /></label>
              </div>
              <label className="field" style={{ marginTop: "1rem" }}>Notes<Textarea placeholder="Add context for your team..." /></label>
            </Panel>
            <Panel name="Switch">
              <div className="column">
                <label className="stack"><Switch defaultChecked /> Product updates</label>
                <Separator />
                <label className="stack"><Switch /> Weekly digest</label>
                <Separator />
                <label className="stack"><Switch disabled /> Locked preference</label>
              </div>
            </Panel>
          </div>
        </Section>

        <Section index="05" id="navigation" title="Navigation" description="Wayfinding primitives from local tabs to multi-page pagination.">
          <div className="demo-grid single">
            <Panel name="Breadcrumb">
              <Breadcrumb><BreadcrumbList>
                <BreadcrumbItem><BreadcrumbLink href="#navigation">Workspace</BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator />
                <BreadcrumbItem><BreadcrumbEllipsis /></BreadcrumbItem><BreadcrumbSeparator />
                <BreadcrumbItem><BreadcrumbLink href="#navigation">Projects</BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator />
                <BreadcrumbItem><BreadcrumbPage>UI refresh</BreadcrumbPage></BreadcrumbItem>
              </BreadcrumbList></Breadcrumb>
            </Panel>
            <div className="demo-grid">
              <Panel name="Tabs">
                <Tabs defaultValue="overview">
                  <TabsList><TabsTrigger value="overview">Overview</TabsTrigger><TabsTrigger value="activity">Activity</TabsTrigger><TabsTrigger value="settings">Settings</TabsTrigger></TabsList>
                  <TabsContent value="overview">A concise project overview with the latest delivery signals.</TabsContent>
                  <TabsContent value="activity">Recent activity from collaborators appears here.</TabsContent>
                  <TabsContent value="settings">Project access and notification settings.</TabsContent>
                </Tabs>
              </Panel>
              <Panel name="Pagination">
                <Pagination><PaginationContent>
                  <PaginationItem><PaginationPrevious href="#navigation" /></PaginationItem>
                  <PaginationItem><PaginationLink href="#navigation">1</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink href="#navigation" isActive>2</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationEllipsis /></PaginationItem>
                  <PaginationItem><PaginationNext href="#navigation" /></PaginationItem>
                </PaginationContent></Pagination>
              </Panel>
            </div>
          </div>
        </Section>

        <Section index="06" id="overlays" title="Overlays" description="Focus-managed modal surfaces. Open each example to test portals, overlays, and close controls.">
          <div className="demo-grid">
            <Panel name="Dialog family">
              <Dialog>
                <DialogTrigger render={<Button />}><Sparkles /> Open dialog</DialogTrigger>
                <DialogContent>
                  <DialogHeader><DialogTitle>Invite collaborators</DialogTitle><DialogDescription>Add people to this workspace. They will receive an email invitation.</DialogDescription></DialogHeader>
                  <label className="field">Email address<Input type="email" placeholder="name@company.com" /></label>
                  <DialogFooter><DialogClose render={<Button variant="outline" />}>Cancel</DialogClose><Button>Send invitation</Button></DialogFooter>
                </DialogContent>
              </Dialog>
            </Panel>
            <Panel name="Sheet family">
              <Sheet>
                <SheetTrigger render={<Button variant="outline" />}><Menu /> Open sheet</SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader><SheetTitle>Quick settings</SheetTitle><SheetDescription>Adjust workspace preferences without leaving the page.</SheetDescription></SheetHeader>
                  <div className="column" style={{ padding: "0 1rem" }}><label className="stack"><Switch defaultChecked /> Email alerts</label><label className="stack"><Switch /> Quiet mode</label></div>
                  <SheetFooter><SheetClose render={<Button />}>Save settings</SheetClose></SheetFooter>
                </SheetContent>
              </Sheet>
            </Panel>
          </div>
        </Section>

        <Section index="07" id="data" title="Files & empty states" description="Rich file rows, stateful attachments, and purposeful zero-data experiences.">
          <div className="demo-grid">
            <Panel name="Attachment family">
              <AttachmentGroup>
                <Attachment>
                  <AttachmentMedia variant="icon"><FileText /></AttachmentMedia>
                  <AttachmentContent><AttachmentHeader><AttachmentTitle>brand-guidelines.pdf</AttachmentTitle><AttachmentDescription>PDF · 4.8 MB</AttachmentDescription></AttachmentHeader></AttachmentContent>
                  <AttachmentActions><AttachmentAction aria-label="Download"><Download /></AttachmentAction></AttachmentActions>
                  <AttachmentTrigger aria-label="Open brand guidelines" />
                </Attachment>
                <Attachment state="processing" size="sm">
                  <AttachmentMedia variant="icon"><FileText /></AttachmentMedia>
                  <AttachmentContent><AttachmentHeader><AttachmentTitle>campaign-assets.zip</AttachmentTitle><AttachmentDescription>Processing upload...</AttachmentDescription></AttachmentHeader></AttachmentContent>
                  <AttachmentActions><AttachmentAction aria-label="Cancel"><X /></AttachmentAction></AttachmentActions>
                </Attachment>
              </AttachmentGroup>
            </Panel>
            <Panel name="Empty family">
              <Empty>
                <EmptyHeader><EmptyMedia variant="icon"><Inbox /></EmptyMedia><EmptyTitle>Nothing waiting</EmptyTitle><EmptyDescription>New requests from your team will appear in this queue.</EmptyDescription></EmptyHeader>
                <EmptyContent><Button size="sm"><Check /> Create request</Button></EmptyContent>
              </Empty>
            </Panel>
          </div>
        </Section>

        <Section index="08" id="layout" title="Layout" description="The sidebar system shown in a contained application frame, plus horizontal and vertical separators.">
          <div className="demo-grid single">
            <Panel name="Sidebar family">
              <SidebarProvider className="sidebar-demo">
                <Sidebar>
                  <SidebarHeader><strong>Mivama OS</strong></SidebarHeader>
                  <SidebarContent><SidebarGroup><SidebarMenu>
                    <SidebarMenuItem><SidebarMenuButton isActive><Home />Overview</SidebarMenuButton></SidebarMenuItem>
                    <SidebarMenuItem><SidebarMenuButton><LayoutGrid />Projects</SidebarMenuButton></SidebarMenuItem>
                    <SidebarMenuItem><SidebarMenuButton><Users />People</SidebarMenuButton></SidebarMenuItem>
                    <SidebarMenuItem><SidebarMenuButton><Search />Search</SidebarMenuButton></SidebarMenuItem>
                  </SidebarMenu></SidebarGroup></SidebarContent>
                  <SidebarFooter><SidebarMenu><SidebarMenuItem><SidebarMenuButton><Settings />Settings</SidebarMenuButton></SidebarMenuItem></SidebarMenu></SidebarFooter>
                </Sidebar>
                <SidebarInset><main><Badge variant="accent">Live workspace</Badge><h3>Project command center</h3><p>SidebarInset holds the primary application content beside persistent navigation.</p></main></SidebarInset>
              </SidebarProvider>
            </Panel>
            <Panel name="Separator">
              <div className="separator-demo"><span>Strategy</span><Separator orientation="vertical" /><span>Design</span><Separator orientation="vertical" /><span>Delivery</span></div>
              <Separator style={{ margin: "1.5rem 0" }} />
              <p style={{ margin: 0, color: "var(--muted-foreground)" }}>Both orientations respond to their parent layout.</p>
            </Panel>
          </div>
        </Section>
      </div>

      <footer className="footer-note"><span>@mivama/ui · live GitHub dependency</span><span>Built as an independent visual regression testbed.</span></footer>
    </main>
  );
}
