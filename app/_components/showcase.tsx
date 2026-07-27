"use client";

import { cloneElement, useId, type ReactElement, type ReactNode } from "react";

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
  children: ReactNode;
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
  children: ReactNode;
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

export function Fixture({ label, children, error }: {
  label: string;
  children: ReactElement<{ id?: string; "aria-describedby"?: string }>;
  error?: string;
}) {
  const generatedId = useId();
  const controlId = children.props.id ?? generatedId;
  const errorId = error ? `${controlId}-error` : undefined;

  return (
    <div className="fixture">
      <label className="fixture-label" htmlFor={controlId}>{label}</label>
      {cloneElement(children, {
        id: controlId,
        "aria-describedby": errorId ?? children.props["aria-describedby"],
      })}
      {error ? <span className="fixture-error" id={errorId}>{error}</span> : null}
    </div>
  );
}
