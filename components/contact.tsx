import cx from "classnames";
import { HTMLAttributes } from "react";

import {
  IoLocationOutline,
  IoCallOutline,
  IoMailOutline,
} from "react-icons/io5";
import { jsonLoader } from "./loaders";

/* Parts */

export function Row(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cx(
        "flex",
        "items-center",
        "justify-center",
        "gap-1",
        "mb-1.5",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
}

/* Main */

type Data = {
  location: {
    text: string;
    url: string;
  };
  phone: string;
  email: string;
};

export default async function Contact(props: HTMLAttributes<HTMLDivElement>) {
  const data = await jsonLoader<Data>("/contact.json");
  return (
    <div className={cx("text-sm", props.className)}>
      <Row>
        <IoCallOutline className="text-primary-700" />
        <a href={`tel:${data.phone}`} className="hover:underline">
          {data.phone}
        </a>
      </Row>
      <Row>
        <IoMailOutline className="text-primary-700" />
        <a href={`mailto:${data.email}`} className="hover:underline">
          {data.email}
        </a>
      </Row>
      <Row>
        <IoLocationOutline className="text-primary-700" />
        <a href={data.location.url} target="_blank" className="hover:underline">
          {data.location.text}
        </a>
      </Row>
    </div>
  );
}
