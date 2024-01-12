import React, { HTMLAttributes } from "react";
import cx from "classnames";

export function Section(props: HTMLAttributes<HTMLDivElement>) {
  const { children, className, ...rest } = props;

  return (
    <section
      className={cx(
        "flex",
        "flex-col",
        "items-center",
        "justify-center",
        "text-center",
        "text-sm",
        "py-6",
        "gap-6",
        className,
      )}
      {...rest}
    >
      {children}
    </section>
  );
}

export function SubSection(props: HTMLAttributes<HTMLDivElement>) {
  const { children, className, ...rest } = props;

  return (
    <div className={cx(className)} {...rest}>
      {children}
    </div>
  );
}

export function SubSectionTitle1(props: HTMLAttributes<HTMLDivElement>) {
  const { children, className, ...rest } = props;

  return (
    <h2 className={cx("font-bold", "mb-4", className)} {...rest}>
      &bull; {children} &bull;
    </h2>
  );
}

export function SubSectionTitle2(props: HTMLAttributes<HTMLDivElement>) {
  const { children, className, ...rest } = props;

  return (
    <h3 className={cx("font-medium", className)} {...rest}>
      {children}
    </h3>
  );
}
