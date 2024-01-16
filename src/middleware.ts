import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { checkIfAdmin } from "./lib/checkIfAdmin";

export default authMiddleware({
  publicRoutes: ["/"],
  
  afterAuth(auth, req) {
    const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");

    if(isAdminRoute && (!auth.userId || !checkIfAdmin(auth.userId))) {
      return NextResponse.redirect("https://eppo-market.vercel.app/404");
    }
  }
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
