import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { componentPages } from "./_components/showcase-pages";

export default function HomePage() {
  return (
    <main>
      <header className="lab-header home-header">
        <div>
          <span className="eyebrow">Mivama design engineering / component index</span>
          <h1>UI <span>component</span><br />field guide.</h1>
        </div>
        <div className="header-meta">
          <strong>92</strong>
          exported React components from the installed <code>@mivama/ui</code> package.
        </div>
      </header>

      <div className="page-index">
        {componentPages.map((page, index) => (
          <Link className="page-index-card" href={page.href} key={page.href}>
            <span className="section-index">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h2>{page.label}</h2>
              <p>{page.description}</p>
            </div>
            <ArrowRight aria-hidden="true" />
          </Link>
        ))}
      </div>
    </main>
  );
}
