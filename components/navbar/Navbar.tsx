import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import ActiveLink from "../active-link/ActiveLink";

const links = [
  { link: "/about", tag: "About" },
  { link: "/pricing", tag: "Pricing" },
  { link: "/contact", tag: "Contact" },
];

export const Navbar = () => {
  return (
    <nav className="bg-blue-600 justify-between flex p-2 m-2 bg-opacity-30 text-white rounded">
      <Link href={"/"} className="flex items-center gap-2">
        <HomeIcon />
        <span>INGCO</span>
      </Link>
      <div className="flex gap-4">
        {links.map((link) => (
          <ActiveLink key={link.tag} path={link.link} tag={link.tag} />
        ))}
      </div>
    </nav>
  );
};
