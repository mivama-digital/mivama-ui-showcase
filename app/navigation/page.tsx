"use client";

import {
  Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
  Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious,
  Tabs, TabsContent, TabsList, TabsTrigger,
} from "@mivama/ui";
import { ChevronRight, Folder } from "lucide-react";
import Link from "next/link";

import { PageIntro, Panel, Section } from "../_components/showcase";

function TabExample({ orientation, variant }: { orientation: "horizontal" | "vertical"; variant: "default" | "line" }) {
  return (
    <Tabs defaultValue="overview" orientation={orientation}>
      <TabsList variant={variant} aria-label={`${orientation} ${variant} tabs`}>
        <TabsTrigger value="overview"><Folder data-icon="inline-start" />Overview</TabsTrigger>
        <TabsTrigger value="activity">Activity</TabsTrigger>
        <TabsTrigger value="settings" disabled>Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">Overview content for the active project.</TabsContent>
      <TabsContent value="activity">Recent collaborator activity.</TabsContent>
      <TabsContent value="settings">Settings are disabled in this fixture.</TabsContent>
    </Tabs>
  );
}

export default function NavigationPage() {
  return (
    <main>
      <PageIntro eyebrow="Components / 05" title="Navigation" count="18 exports" description="Hierarchical location, page movement, and local views across every declared orientation and style." />
      <div className="catalog">
        <Section index="05.1" title="Breadcrumb" description="Short, deep, collapsed, custom-separator, and composed-link examples.">
          <div className="demo-grid">
            <Panel name="Breadcrumb / collapsed">
              <Breadcrumb><BreadcrumbList><BreadcrumbItem><BreadcrumbLink href="/">Workspace</BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbEllipsis /></BreadcrumbItem><BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbLink href="/navigation">Projects</BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbPage>UI refresh</BreadcrumbPage></BreadcrumbItem></BreadcrumbList></Breadcrumb>
            </Panel>
            <Panel name="Breadcrumb / custom separator">
              <Breadcrumb><BreadcrumbList><BreadcrumbItem><BreadcrumbLink render={<Link href="/" />}>Home</BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator><ChevronRight /></BreadcrumbSeparator><BreadcrumbItem><BreadcrumbPage>A very long current page label</BreadcrumbPage></BreadcrumbItem></BreadcrumbList></Breadcrumb>
            </Panel>
          </div>
        </Section>

        <Section index="05.2" title="Pagination" description="Active links, edge links, custom labels, and ellipsis for long ranges.">
          <div className="demo-grid">
            <Panel name="Pagination / middle page">
              <Pagination><PaginationContent><PaginationItem><PaginationPrevious href="?page=1" /></PaginationItem><PaginationItem><PaginationLink href="?page=1">1</PaginationLink></PaginationItem><PaginationItem><PaginationLink href="?page=2" isActive>2</PaginationLink></PaginationItem><PaginationItem><PaginationLink href="?page=3">3</PaginationLink></PaginationItem><PaginationItem><PaginationNext href="?page=3" /></PaginationItem></PaginationContent></Pagination>
            </Panel>
            <Panel name="Pagination / long range">
              <Pagination><PaginationContent><PaginationItem><PaginationPrevious href="?page=4" text="Back" /></PaginationItem><PaginationItem><PaginationLink href="?page=1">1</PaginationLink></PaginationItem><PaginationItem><PaginationEllipsis /></PaginationItem><PaginationItem><PaginationLink href="?page=5" isActive>5</PaginationLink></PaginationItem><PaginationItem><PaginationEllipsis /></PaginationItem><PaginationItem><PaginationLink href="?page=12">12</PaginationLink></PaginationItem><PaginationItem><PaginationNext href="?page=6" text="Forward" /></PaginationItem></PaginationContent></Pagination>
            </Panel>
          </div>
        </Section>

        <Section index="05.3" title="Tabs" description="The complete horizontal/vertical and default/line matrix, each with a disabled trigger.">
          <div className="demo-grid">
            <Panel name="Tabs / horizontal default"><TabExample orientation="horizontal" variant="default" /></Panel>
            <Panel name="Tabs / horizontal line"><TabExample orientation="horizontal" variant="line" /></Panel>
            <Panel name="Tabs / vertical default"><TabExample orientation="vertical" variant="default" /></Panel>
            <Panel name="Tabs / vertical line"><TabExample orientation="vertical" variant="line" /></Panel>
          </div>
        </Section>
      </div>
    </main>
  );
}
