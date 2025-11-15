import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // ⛔ Disable coming-soon on localhost (development)
  if (req.headers.get("host")?.includes("localhost")) {
    return NextResponse.next();
  }

  // ⛔ Disable coming-soon on 127.0.0.1 also
  if (req.headers.get("host")?.includes("127.0.0.1")) {
    return NextResponse.next();
  }

  // Allow access to coming-soon page
  if (url.pathname.startsWith("/coming-soon")) {
    return NextResponse.next();
  }

  // Allow admin page if you want
  if (url.pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  // Otherwise redirect EVERYTHING to coming soon
  url.pathname = "/coming-soon";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: "/:path*",
};
