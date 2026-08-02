"use client";

import { useSyncExternalStore } from "react";

const themes = ["product", "editorial", "portal"] as const;
const densities = ["comfortable", "compact"] as const;

function subscribe(onChange: () => void) {
  window.addEventListener("mivama-contract-change", onChange);
  return () => window.removeEventListener("mivama-contract-change", onChange);
}

function getSnapshot() {
  const root = document.documentElement;
  return `${root.dataset.mivamaTheme ?? "product"}:${root.dataset.density ?? "comfortable"}`;
}

export function ThemeControls() {
  const [theme, density] = useSyncExternalStore(subscribe, getSnapshot, () => "product:comfortable").split(":");

  function setContract(name: "mivamaTheme" | "density", value: string) {
    document.documentElement.dataset[name] = value;
    window.dispatchEvent(new Event("mivama-contract-change"));
  }

  return (
    <div className="contract-controls" aria-label="Document theme and density controls">
      <label>
        <span>Theme</span>
        <select value={theme} onChange={(event) => setContract("mivamaTheme", event.target.value)}>
          {themes.map((value) => <option key={value} value={value}>{value}</option>)}
        </select>
      </label>
      <label>
        <span>Density</span>
        <select value={density} onChange={(event) => setContract("density", event.target.value)}>
          {densities.map((value) => <option key={value} value={value}>{value}</option>)}
        </select>
      </label>
    </div>
  );
}
