import { IoStar, IoStarOutline } from "react-icons/io5";

export default function Stars(props: { length: number; level: number }) {
  const { length, level } = props;

  return (
    <div style={{ fontSize: "0.6rem" }} className="mb-2">
      {Array.from({ length }).map((_, i) =>
        level > i ? (
          <IoStar key={i} className="inline-block" />
        ) : (
          <IoStarOutline key={i} className="inline-block" />
        ),
      )}
    </div>
  );
}
