"use client";

import {
  Badge, Separator, Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader,
  SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider,
} from "@mivama/ui";
import { Home, LayoutGrid, Search, Settings, Users } from "lucide-react";

import { PageIntro, Panel, Section } from "../_components/showcase";

export default function LayoutPage() {
  return (
    <main>
      <PageIntro eyebrow="Components / 09" title="Layout" count="11 exports" description="Persistent application navigation and structural separators in both orientations." />
      <div className="catalog">
        <Section index="09.1" title="Sidebar" description="All ten Sidebar exports, active and inactive items, link composition, groups, footer, and inset content.">
          <div className="demo-grid single">
            <Panel name="Sidebar / complete application frame">
              <SidebarProvider className="sidebar-demo" style={{ "--sidebar-width": "14rem" } as React.CSSProperties}>
                <Sidebar>
                  <SidebarHeader><strong>Mivama OS</strong></SidebarHeader>
                  <SidebarContent>
                    <SidebarGroup><SidebarMenu>
                      <SidebarMenuItem><SidebarMenuButton isActive render={<a href="#overview" />}><Home />Overview</SidebarMenuButton></SidebarMenuItem>
                      <SidebarMenuItem><SidebarMenuButton render={<a href="#projects" />}><LayoutGrid />Projects</SidebarMenuButton></SidebarMenuItem>
                      <SidebarMenuItem><SidebarMenuButton><Users />People</SidebarMenuButton></SidebarMenuItem>
                      <SidebarMenuItem><SidebarMenuButton><Search />Search</SidebarMenuButton></SidebarMenuItem>
                      <SidebarMenuItem><SidebarMenuButton disabled><LayoutGrid />Disabled item</SidebarMenuButton></SidebarMenuItem>
                    </SidebarMenu></SidebarGroup>
                  </SidebarContent>
                  <SidebarFooter><SidebarMenu><SidebarMenuItem><SidebarMenuButton><Settings />Settings</SidebarMenuButton></SidebarMenuItem></SidebarMenu></SidebarFooter>
                </Sidebar>
                <SidebarInset><main className="sidebar-inset-sample"><Badge variant="accent">Live workspace</Badge><h3>Project command center</h3><p>SidebarInset holds the primary application content beside persistent navigation.</p></main></SidebarInset>
              </SidebarProvider>
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
    </main>
  );
}
