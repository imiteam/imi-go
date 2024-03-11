import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const publicPaths = ["/auth/sign-in", "/auth/sign-up"];

export function middleware(request: NextRequest) {
  //use by local
  const session = request.cookies.get("next-auth.session-token");
  //use by vercel
  // const session = request.cookies.get("__Secure-next-auth.session-token");
  const url = request.nextUrl.clone();
  const isPublicPath = publicPaths.some((path) =>
    url.pathname.startsWith(path),
  );

  if (session) {
    if (isPublicPath) {
      url.pathname = `/`;
      return NextResponse.redirect(url);
    }
  } else {
    if (!isPublicPath) {
      url.pathname = "/auth/sign-up";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/lk/:path*",
    "/chat/:path*",
    "/auth/sign-in",
    "/auth/sign-up",
  ],
};
