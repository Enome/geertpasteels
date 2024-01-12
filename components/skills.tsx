// Recently, A short time ago, long ago In the last 12 months Between
// 12 and 36 months ago Longer than 36 months ago

import cx from "classnames";

import { jsonLoader } from "./loaders";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";

/* Main */

type Skill = {
  name: string;
  level: number;
  when: number;
};

const when = ["Recently", "A while ago", "Long ago"];
const level = ["Familiar", "Comfortable", "Proficient"];

export default async function Skills() {
  const skills = await jsonLoader<Skill[]>("/skills.json");

  return (
    <div className={cx("grid", "grid-cols-2", "sm:grid-cols-3", "gap-2")}>
      {skills.map((skill) => (
        <div
          key={skill.name}
          className={cx(
            "border",
            "border-gray-300",
            "p-2",
            "rounded-sm",
            skill.when === 1 && "opacity-100",
            skill.when === 2 && "opacity-60",
            skill.when === 3 && "opacity-40",
          )}
        >
          <div className="font-normal mb-1 text-sm text-center">
            {skill.name}
          </div>
          <div
            className={cx(
              "flex",
              "flex-col",
              "sm:flex-row",
              "gap-1",
              "text-xs",
              "items-center",
              "justify-center",
            )}
          >
            <div className="whitespace-nowrap">
              &bull; {level[skill.level - 1]}
            </div>
            <div className="whitespace-nowrap">
              &bull; {when[skill.when - 1]}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
