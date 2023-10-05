import { authMiddleware, redirectToSignIn } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export default authMiddleware({
  publicRoutes: ["/"],
  
  afterAuth(auth, req) {
    const adminUserIds = ['adminUserID1', 'adminUserID2'];

    const isAdminRoute = req.nextUrl.pathname.startsWith('/admin');

    if(isAdminRoute && (!auth.userId || !adminUserIds.includes(auth.userId))) {
      return NextResponse.redirect('/');
    }

    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }
  }
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
