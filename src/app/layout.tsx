import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../common/UIkit/theme/ThemeProvider";
import { cookies } from "next/headers";
import { ApolloWrapper } from "../apollo-client";
import { SessionWrapper } from "../session-provider-wrapper";
import Header from "common/header";
import MobileMenu from "common/mobileMenu";


export const metadata: Metadata = {
  title: "IMI App",
  description: "Created by the best team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  let cookieStore = cookies();
  let userCookie = cookieStore.get("next-auth.session-token");
  
  return (
    <ApolloWrapper additionalData={userCookie?.value}>
      <SessionWrapper>
        <html lang="en">
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
            themes={["light", "dark"]}
          >
            <body id="appelement" className="flex min-h-screen w-full flex-col">
              <MobileMenu />
              <Header />
              {children}
            </body>
          </ThemeProvider>
        </html>
      </SessionWrapper>
    </ApolloWrapper>
  );
}
