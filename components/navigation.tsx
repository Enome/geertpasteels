import cx from "classnames";
import { PropsWithChildren } from "react";

export default function Navigation(props: PropsWithChildren) {
  return (
    <nav
      className={cx(
        "md:col-span-7",
        "py-6",
        "md:py-4",
        "w-full",
        "text-sm",
        "sticky",
        "top-0",
        "z-10",
        "border-b",
        "bg-white",
      )}
    >
      <ul
        className={cx(
          "flex",
          "flex-wrap",
          "gap-x-2",
          "gap-y-4",
          "items-center",
          "justify-center",
          "md:justify-start",
          "pl-10",
        )}
      >
        {props.children}
      </ul>
    </nav>
  );
}

type LinkProps = {
  to: string;
  children: React.ReactNode;
};

export function Link(props: LinkProps) {
  return (
    <li className={cx("whitespace-nowrap")}>
      <a
        href={`#${props.to}`}
        title={props.to}
        className={cx(
          "px-3",
          "py-1",
          "rounded",
          "bg-primary-50",
          "border",
          "border-primary-100",
          "hover:bg-primary-100",
          "transition-all",
        )}
      >
        {props.children}
      </a>
    </li>
  );
}
