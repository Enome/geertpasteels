import { mdxsLoader, MdxContent } from "./loaders";

export default async function MdxList(props: { pattern: string }) {
  const files = await mdxsLoader(props.pattern);

  return (
    <>
      {files.map((file) => (
        <div key={file} className="mb-6 leading-relaxed">
          <MdxContent path={file} />
        </div>
      ))}
    </>
  );
}
