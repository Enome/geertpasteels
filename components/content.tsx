import cx from "classnames";
import { HTMLAttributes } from "react";

export function Section(props: HTMLAttributes<HTMLDivElement>) {
  const { children, className, ...rest } = props;

  return (
    <div className={cx("mb-8", className)} {...rest}>
      {children}
    </div>
  );
}

export function Title(props: HTMLAttributes<HTMLDivElement>) {
  const { children, className, ...rest } = props;

  return (
    <h2
      className={cx(
        "text-2xl",
        "text-primary-600",
        "mb-4",
        "scroll-m-28",
        "md:scroll-m-16",
        className,
      )}
      {...rest}
    >
      {children}
    </h2>
  );
}
