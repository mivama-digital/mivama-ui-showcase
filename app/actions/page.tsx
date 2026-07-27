"use client";

import { Badge, Button, Separator } from "@mivama/ui";
import { ArrowRight, Check, Settings } from "lucide-react";

import { PageIntro, Panel, Section } from "../_components/showcase";

const buttonVariants = ["default", "outline", "secondary", "ghost", "destructive", "link"] as const;
const buttonSizes = ["default", "xs", "sm", "lg"] as const;
const iconSizes = ["icon", "icon-xs", "icon-sm", "icon-lg"] as const;
const badgeVariants = ["default", "secondary", "destructive", "outline", "ghost", "link"] as const;

export default function ActionsPage() {
  return (
    <main>
      <PageIntro eyebrow="Components / 01" title="Actions" count="2 families" description="Every official Button and Badge variant, plus sizes, composition, and common interaction states." />
      <div className="catalog">
        <Section index="01.1" title="Button" description="Six variants and eight sizes, with icons, rendered links, disabled controls, and invalid state.">
          <div className="demo-grid">
            <Panel name="Button / variants" wide>
              <div className="stack">
                {buttonVariants.map((variant) => <Button className={variant === "destructive" ? "bg-destructive text-white hover:bg-destructive/90 dark:text-white" : undefined} variant={variant} key={variant}>{variant}</Button>)}
              </div>
            </Panel>
            <Panel name="Button / text sizes">
              <div className="stack">
                {buttonSizes.map((size) => <Button size={size} key={size}>{size}</Button>)}
              </div>
            </Panel>
            <Panel name="Button / icon sizes">
              <div className="stack">
                {iconSizes.map((size) => <Button size={size} aria-label={`Settings, ${size}`} key={size}><Settings /></Button>)}
              </div>
            </Panel>
            <Panel name="Button / content">
              <div className="column">
                <div className="stack"><Button><Check data-icon="inline-start" />Leading icon</Button><Button>Trailing icon<ArrowRight data-icon="inline-end" /></Button></div>
                <Separator />
                <div className="stack"><Button disabled>Disabled</Button><Button focusableWhenDisabled disabled>Focusable disabled</Button><Button aria-invalid>Invalid</Button></div>
                <Button nativeButton={false} render={<a href="/content" />} variant="link">Rendered anchor</Button>
              </div>
            </Panel>
          </div>
        </Section>

        <Section index="01.2" title="Badge" description="All six visual variants, including rendered links and icon content.">
          <div className="demo-grid single">
            <Panel name="Badge / variants">
              <div className="stack">
                {badgeVariants.map((variant) => <Badge className={variant === "destructive" ? "bg-destructive text-white hover:bg-destructive/90 dark:text-white" : undefined} variant={variant} key={variant}>{variant}</Badge>)}
              </div>
              <Separator style={{ margin: "1.5rem 0" }} />
              <div className="stack">
                <Badge><Check />Complete</Badge>
                <Badge variant="outline">Continue<ArrowRight /></Badge>
                <Badge variant="outline" render={<a href="/feedback" />}>Linked badge</Badge>
                <Badge aria-invalid>Invalid</Badge>
              </div>
            </Panel>
          </div>
        </Section>
      </div>
    </main>
  );
}
