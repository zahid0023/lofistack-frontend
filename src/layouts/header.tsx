import Link from "next/link";
import { SiteLogo } from "@/components/site-logo";
import { HEADER_LINKS } from "@/constants/navigation";

export function Header() {
  return (
    <header className="flex h-16 items-center">
      <div className="container flex items-center justify-between">
        <div className="font-bold text-lg">
          <SiteLogo />
        </div>
        <nav>
          <ul className="flex items-center gap-5">
            {HEADER_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
