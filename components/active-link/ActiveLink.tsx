"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ActiveLinkProps = {
  path: string;
  tag: string;
};

const ActiveLink = ({ path, tag }: ActiveLinkProps) => {
  const pathName = usePathname();

  return (
    <Link
      className={`${
        pathName === path
          ? "text-white hover:text-gray-200"
          : "text-sky-400 hover:text-sky-500"
      }transition-all font-semibold hover:underline`}
      href={path}
    >
      {tag}
    </Link>
  );
};

export default ActiveLink;
