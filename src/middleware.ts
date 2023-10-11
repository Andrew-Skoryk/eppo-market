import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: ["/"],
  
  afterAuth(auth, req) {
    const adminUserIds = ["user_2WM6F3J3pj6OnfKpxKW4ktGOXuE", "adminUserID2"];

    const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");

    if(isAdminRoute && (!auth.userId || !adminUserIds.includes(auth.userId))) {
      return NextResponse.redirect("http://localhost:3000/404");
    }
  }
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
