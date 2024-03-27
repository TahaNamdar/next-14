"use client";

export default function RootLayout({
  children,
  content,
  header,
  footer,
  login,
}: Readonly<{
  children: React.ReactNode;
  content: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
  login: React.ReactNode;
}>) {
  const isLoggedIn = false;

  return isLoggedIn ? (
    <div>
      <div>{children}</div>

      <div className="flex">
        <div className="flex flex-col">
          <div>{header}</div>
          <div>{content}</div>
        </div>

        <div className="flex flex-1">{footer}</div>
      </div>
    </div>
  ) : (
    login
  );
}
