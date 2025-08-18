import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/"];
const authRoutes = ["/auth"];

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const token = req.cookies.get("access_token");

    if (protectedRoutes.some((route) => pathname === route) && !token?.value) {
        return NextResponse.redirect(new URL("/auth?mode=login", req.url));
    }

    if (authRoutes.some((route) => pathname === route) && token?.value) {
        return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: "/:path*",
};
