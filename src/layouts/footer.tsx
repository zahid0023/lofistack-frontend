import Link from "next/link";
import { SiteLogo } from "@/components/site-logo";
import { FOOTER_LINKS } from "@/constants/navigation";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="mb-12 grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Logo and Contact Section */}
          <div className="flex flex-col justify-between lg:col-span-1">
            <SiteLogo width={270} />
            <div className="text-sm">
              <p className="mb-1 font-semibold">Questions? Reach Us</p>
              <p>Monday-Friday</p>
              <p>9:00 AM to 5:00 PM (Eastern Time)</p>
            </div>
          </div>

          {/* Support Links */}

          <div>
            <h3 className="mb-4 font-bold text-sm tracking-wider">SUPPORT</h3>
            <ul className="space-y-3 text-muted-foreground">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-sm transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 font-bold text-sm tracking-wider">COMPANY</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-sm transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h3 className="mb-4 font-bold text-sm tracking-wider">CONTACT</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.contact.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8">
          <p className="text-gray-400 text-xs uppercase tracking-wider">
            © {new Date().getFullYear()} LofiStack. All rights reserved.
          </p>
        </div>
      </div>

      <svg className="h-64 w-full font-bold text-[280px] uppercase tracking-tighter">
        <defs>
          <linearGradient id="gradientBorder" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-slate-50)" />{" "}
            <stop offset="100%" stopColor="var(--color-slate-800)" />{" "}
          </linearGradient>
        </defs>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-transparent stroke-[2px]"
          style={{ stroke: "url(#gradientBorder)" }}
        >
          LofiStack
        </text>
      </svg>
    </footer>
  );
}
