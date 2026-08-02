"use client";

import {
  Badge, Separator, Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader,
  SidebarGroupContent, SidebarGroupLabel, SidebarInset, SidebarMenu, SidebarMenuButton,
  SidebarMenuItem, SidebarProvider, SidebarRail, SidebarTrigger,
} from "@mivama/ui";
import { Home, LayoutGrid, Search, Settings, Users } from "lucide-react";
import Link from "next/link";

import { PageIntro, Panel, Section } from "../_components/showcase";

export default function LayoutPage() {
  return (
    <SidebarProvider className="sidebar-page" style={{ "--sidebar-width": "14rem" } as React.CSSProperties}>
      <Sidebar aria-label="Workspace sidebar" collapsible="icon" role="navigation">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem><SidebarMenuButton size="lg" tooltip="Mivama OS" render={<Link href="/layout" aria-label="Mivama OS home" />}><LayoutGrid /><span>Mivama OS</span></SidebarMenuButton></SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Workspace</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem><SidebarMenuButton isActive tooltip="Overview" render={<Link aria-current="page" href="/layout" />}><Home /><span>Overview</span></SidebarMenuButton></SidebarMenuItem>
                <SidebarMenuItem><SidebarMenuButton tooltip="Projects" render={<Link href="/content" />}><LayoutGrid /><span>Projects</span></SidebarMenuButton></SidebarMenuItem>
                <SidebarMenuItem><SidebarMenuButton tooltip="People" render={<Link href="/content" />}><Users /><span>People</span></SidebarMenuButton></SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Tools</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem><SidebarMenuButton tooltip="Search" render={<Link href="/navigation" />}><Search /><span>Search</span></SidebarMenuButton></SidebarMenuItem>
                <SidebarMenuItem><SidebarMenuButton disabled><LayoutGrid /><span>Disabled item</span></SidebarMenuButton></SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter><SidebarMenu><SidebarMenuItem><SidebarMenuButton tooltip="Settings" render={<Link href="/forms" />}><Settings /><span>Settings</span></SidebarMenuButton></SidebarMenuItem></SidebarMenu></SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <PageIntro eyebrow="Components / 09" title="Layout" count="15 exports" description="Persistent application navigation and structural separators in both orientations." />
        <div className="catalog">
          <Section index="09.1" title="Sidebar" description="This page uses the full official Sidebar composition with responsive Sheet behavior, labeled groups, linked menus, collapse controls, footer, rail, and inset content.">
            <div className="demo-grid single">
              <Panel name="Sidebar / live application frame">
                <div className="sidebar-inset-sample"><div className="stack"><SidebarTrigger aria-label="Toggle showcase sidebar" /><Badge variant="secondary">Live workspace</Badge></div><h3>Project command center</h3><p>The catalog itself is rendered inside SidebarInset. Use the toggle, rail, or Control+B to inspect the official responsive behavior.</p></div>
              </Panel>
            </div>
          </Section>

          <Section index="09.2" title="Separator" description="Horizontal and vertical primitives in layouts with explicit dimensions.">
            <div className="demo-grid">
              <Panel name="Separator / horizontal"><p className="sample-copy">Content above</p><Separator className="spaced-separator" /><p className="sample-copy">Content below</p></Panel>
              <Panel name="Separator / vertical"><div className="separator-demo"><span>Strategy</span><Separator orientation="vertical" /><span>Design</span><Separator orientation="vertical" /><span>Delivery</span></div></Panel>
            </div>
          </Section>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
