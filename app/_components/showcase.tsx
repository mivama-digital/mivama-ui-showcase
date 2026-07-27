export function PageIntro({ eyebrow, title, description, count }: {
  eyebrow: string;
  title: string;
  description: string;
  count: string;
}) {
  return (
    <header className="page-intro">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <strong>{count}</strong>
    </header>
  );
}

export function Section({ index, title, description, children }: {
  index: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="catalog-section">
      <div className="section-label">
        <span className="section-index">{index}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {children}
    </section>
  );
}

export function Panel({ name, note, children, wide = false }: {
  name: string;
  note?: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <div className={`demo-panel${wide ? " demo-panel-wide" : ""}`}>
      <div className="panel-heading">
        <span className="component-name">{name}</span>
        {note ? <span>{note}</span> : null}
      </div>
      {children}
    </div>
  );
}

export function Fixture({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="fixture">
      <span className="fixture-label">{label}</span>
      {children}
    </div>
  );
}
