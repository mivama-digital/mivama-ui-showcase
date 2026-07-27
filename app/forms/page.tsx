"use client";

import { Input, Separator, Switch, Textarea } from "@mivama/ui";

import { Fixture, PageIntro, Panel, Section } from "../_components/showcase";

export default function FormsPage() {
  return (
    <main>
      <PageIntro eyebrow="Components / 04" title="Forms" count="3 components" description="Native field attributes and Base UI switch states in labeled, accessible fixtures." />
      <div className="catalog">
        <Section index="04.1" title="Input" description="Representative native types plus disabled, read-only, required, and invalid states.">
          <div className="demo-grid">
            <Panel name="Input / text states">
              <div className="field-grid">
                <Fixture label="Default"><Input defaultValue="Mivama Portal" /></Fixture>
                <Fixture label="Placeholder"><Input placeholder="Search projects..." type="search" /></Fixture>
                <Fixture label="Required"><Input required placeholder="Required value" /></Fixture>
                <Fixture label="Read only"><Input readOnly value="Locked value" /></Fixture>
                <Fixture label="Disabled"><Input disabled value="Unavailable" /></Fixture>
                <Fixture label="Invalid"><Input aria-invalid defaultValue="Wrong value" /></Fixture>
              </div>
            </Panel>
            <Panel name="Input / native types">
              <div className="field-grid">
                <Fixture label="Email"><Input type="email" placeholder="name@company.com" /></Fixture>
                <Fixture label="Password"><Input type="password" defaultValue="password" /></Fixture>
                <Fixture label="Number"><Input type="number" min={0} max={10} step={1} defaultValue={4} /></Fixture>
                <Fixture label="Date"><Input type="date" /></Fixture>
                <Fixture label="File"><Input type="file" /></Fixture>
              </div>
            </Panel>
          </div>
        </Section>

        <Section index="04.2" title="Textarea" description="Content growth, native constraints, and all non-interactive states.">
          <div className="demo-grid">
            <Panel name="Textarea / content">
              <div className="column"><Fixture label="Placeholder"><Textarea placeholder="Add context for your team..." /></Fixture><Fixture label="Multiline"><Textarea defaultValue={"First line\nSecond line\nThird line"} /></Fixture></div>
            </Panel>
            <Panel name="Textarea / states">
              <div className="column"><Fixture label="Invalid"><Textarea aria-invalid defaultValue="Needs correction" /></Fixture><Fixture label="Read only"><Textarea readOnly value="This content cannot be changed." /></Fixture><Fixture label="Disabled"><Textarea disabled value="Unavailable content" /></Fixture></div>
            </Panel>
          </div>
        </Section>

        <Section index="04.3" title="Switch" description="Checked, unchecked, disabled, read-only, required, and named form controls.">
          <div className="demo-grid">
            <Panel name="Switch / states">
              <div className="column">
                <label className="switch-row"><Switch /> Unchecked</label><Separator />
                <label className="switch-row"><Switch defaultChecked /> Checked</label><Separator />
                <label className="switch-row"><Switch disabled /> Disabled unchecked</label><Separator />
                <label className="switch-row"><Switch disabled defaultChecked /> Disabled checked</label>
              </div>
            </Panel>
            <Panel name="Switch / form behavior">
              <div className="column">
                <label className="switch-row"><Switch readOnly defaultChecked /> Read only</label><Separator />
                <label className="switch-row"><Switch required name="notifications" value="enabled" /> Required named value</label>
              </div>
            </Panel>
          </div>
        </Section>
      </div>
    </main>
  );
}
