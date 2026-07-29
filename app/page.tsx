import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Eyebrow, Heading, Text } from "@mivama/ui";

import { componentPages } from "./_components/showcase-pages";

export default function HomePage() {
  return (
    <main>
      <header className="lab-header home-header">
        <div>
          <Eyebrow render={<span />} className="eyebrow">Mivama design engineering / component index</Eyebrow>
          <Heading render={<h1 />} variant="display">UI <span>component</span><br />field guide.</Heading>
        </div>
        <div className="header-meta">
          <strong>20</strong>
          component families from the official shadcn base-nova <code>@mivama/ui</code> package, including Tooltip.
        </div>
      </header>

      <div className="page-index">
        {componentPages.map((page, index) => (
          <Link className="page-index-card" href={page.href} key={page.href}>
            <span className="section-index">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <Heading variant="card">{page.label}</Heading>
              <Text variant="small">{page.description}</Text>
            </div>
            <ArrowRight aria-hidden="true" />
          </Link>
        ))}
      </div>
    </main>
  );
}
