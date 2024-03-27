import { ReactNode } from "react";

export default function NewsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header>Header</header>
      {children}
      <footer>Footer</footer>
    </>
  );
}
