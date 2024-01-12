import cx from "classnames";

import { jsonLoader } from "./loaders";
import { SubSection, SubSectionTitle1, SubSectionTitle2 } from "./sidebar";

type Data = {
  name: string;
  keywords?: string[];
}[];

/* Parts */

/* Main */

export default async function Interests() {
  const data = await jsonLoader<Data>("/interests.json");

  return (
    <SubSection>
      <SubSectionTitle1>Interests</SubSectionTitle1>
      <div>
        {data.map((a) => (
          <div key={a.name} className="mb-3 last:mb-0">
            <SubSectionTitle2>{a.name}</SubSectionTitle2>
            {a.keywords && <p className="leading-7">{a.keywords.join(", ")}</p>}
          </div>
        ))}
      </div>
    </SubSection>
  );
}
