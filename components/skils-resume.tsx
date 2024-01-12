import cx from "classnames";
import Stars from "./stars";

import { jsonLoader } from "./loaders";
import { SubSection, SubSectionTitle2 } from "./sidebar";
import { PropsWithChildren } from "react";

type Skill = {
  category: string;
  name: string;
  level: number;
  when: number;
};

/* Parts */

function Section(props: PropsWithChildren) {
  return <div className={cx("mb-4")}>{props.children}</div>;
}

function ListByLevel(props: { level: number; skills: Skill[] }) {
  const { level, skills } = props;

  return (
    <p className="leading-7">
      {skills
        .filter((a) => a.level === level)
        .map((a) => a.name)
        .join(", ")}
    </p>
  );
}

/* Main */

export default async function Skills() {
  const skills = (await jsonLoader<Skill[]>("/skills.json")).filter(
    (a) => a.when != 3,
  );

  return (
    <SubSection>
      <Section>
        <SubSectionTitle2>Proficient</SubSectionTitle2>
        <Stars length={3} level={3} />
        <ListByLevel level={3} skills={skills} />
      </Section>

      <Section>
        <SubSectionTitle2>Comfortable</SubSectionTitle2>
        <Stars length={3} level={2} />
        <ListByLevel level={2} skills={skills} />
      </Section>

      <SubSectionTitle2>Familiar</SubSectionTitle2>
      <Stars length={3} level={1} />
      <ListByLevel level={1} skills={skills} />
    </SubSection>
  );
}
