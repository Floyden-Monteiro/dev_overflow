import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: ['/'],
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next).*)','/','/(api|trpc)(.*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
