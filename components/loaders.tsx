import { promises as fs } from "fs";
import { glob } from "glob";
import { MDXRemote } from "next-mdx-remote/rsc";
import { PropsWithChildren } from "react";

/* JSON */

export async function jsonLoader<T>(path: string): Promise<T> {
  const text = await fs.readFile(process.cwd() + "/content" + path, "utf8");

  return JSON.parse(text);
}

/* MDX */

// Loader

export async function mdxsLoader(pattern: string): Promise<string[]> {
  const files = await glob(process.cwd() + "/content" + pattern);

  files.sort();
  files.reverse();

  return files;
}

// Web Component

function H1(props: PropsWithChildren) {
  return (
    <h1 className="text-4xl font-bold mb-4 text-pink-700">{props.children}</h1>
  );
}

function H2(props: PropsWithChildren) {
  return <h2 className="text-lg font-bold mb-2">{props.children}</h2>;
}

function P(props: PropsWithChildren) {
  return <p className="mb-4 last:mb-0">{props.children}</p>;
}

function UL(props: PropsWithChildren) {
  return <ul className="list-disc ml-6">{props.children}</ul>;
}

function A(props: PropsWithChildren) {
  return (
    <a className="text-pink-600 hover:underline" target="_blank" {...props} />
  );
}

const web_components = { h1: H1, h2: H2, p: P, ul: UL, a: A };

// Components

export async function MdxContent({
  path,
  components = web_components,
}: {
  path: string;
  components?: any;
}) {
  const root = process.cwd() + "/content";

  if (path.includes(root)) {
    path = path.replace(root, "");
  }

  const file_md = await fs.readFile(process.cwd() + "/content" + path, "utf8");

  return <MDXRemote source={file_md} components={components} />;
}
