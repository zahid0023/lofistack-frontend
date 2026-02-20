export type NavLink = {
  name: string;
  href: string;
};

export const HEADER_LINKS: NavLink[] = [
  { name: "Services", href: "/services" },
  { name: "Showcase", href: "/showcase" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export const FOOTER_LINKS: Record<string, NavLink[]> = {
  support: [
    { name: "Help Center", href: "/help" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Legal", href: "/legal" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
  company: [
    { name: "About Agency", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Showcase", href: "/showcase" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  contact: [
    {
      name: "Email",
      href: "mailto:contact@lofistack.com",
    },
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "Facebook", href: "https://facebook.com" },
    { name: "Instagram", href: "https://instagram.com" },
    { name: "Whatsapp", href: "https://whatsapp.com" },
  ],
};
