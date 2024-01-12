import cx from "classnames";

import { jsonLoader } from "./loaders";
import { SubSection, SubSectionTitle1 } from "./sidebar";

import { FaGithub, FaStackOverflow } from "react-icons/fa";

/* Parts */

function Link(props: { href: string; children: React.ReactNode }) {
  const { href, children } = props;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cx(
        "block",
        "flex",
        "gap-1",
        "items-center",
        "justify-center",
        "mb-2",
        "hover:underline",
      )}
    >
      {children}
    </a>
  );
}

/* Main */

type Data = {
  github: string;
  stackoverflow: string;
};

export default async function Profiles() {
  const data = await jsonLoader<Data>("/profiles.json");

  return (
    <SubSection>
      <SubSectionTitle1>Profiles</SubSectionTitle1>
      <Link href={data.github}>
        <FaGithub /> Github
      </Link>
      <Link href={data.stackoverflow}>
        <FaStackOverflow /> Stackoverflow
      </Link>
    </SubSection>
  );
}
