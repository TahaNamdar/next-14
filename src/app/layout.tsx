"use client";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "register", href: "/register" },
  { name: "login", href: "/login" },
  { name: "docs", href: "/docs/feature" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();

  return (
    <html lang="en">
      <body>
        {/* <div>
          {links.map((link: { name: string; href: string }, index: number) => {
            const isActive = pathName.startsWith(link.href);

            return (
              <Link
                href={link.href}
                key={index}
                className={isActive ? "font-bold text-yellow-300" : ""}
              >
                <p>{link.name}</p>
              </Link>
            );
          })}
        </div> */}
        {children}
      </body>
    </html>
  );
}
