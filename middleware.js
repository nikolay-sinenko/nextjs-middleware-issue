import { NextResponse } from "next/server";

export function middleware(req) {
  console.log("middleware", req.url);

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/:path", "/api/hello", "/subroute/:path*"],
};
