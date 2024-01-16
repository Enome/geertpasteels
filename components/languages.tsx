import Stars from "./stars";

import { jsonLoader } from "./loaders";
import { SubSection, SubSectionTitle1, SubSectionTitle2 } from "./sidebar";

type Data = {
  name: string;
  level: number;
};

export default async function Languages() {
  const data = await jsonLoader<Data[]>("/languages.json");

  return (
    <SubSection>
      <SubSectionTitle1>Languages</SubSectionTitle1>

      {data.map((a) => (
        <div key={a.name} className="mb-5 last:mb-0">
          <SubSectionTitle2 className="mb-1">{a.name}</SubSectionTitle2>
          <Stars length={5} level={a.level} />
        </div>
      ))}
    </SubSection>
  );
}
