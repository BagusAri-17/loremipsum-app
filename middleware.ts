import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getUser } from './lib/auth';

export async function middleware(req: NextRequest) {
    const res = NextResponse.next();
    const protectedRoutes = ['/dashboard'];
    const privateRoutes = ['/login', '/register'];

    const user = await getUser();

    const path = req.nextUrl.pathname;

    if (!user && protectedRoutes.includes(path)) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    if (user && privateRoutes.includes(path)) {
        return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    return res;
}

export const config = {
    matcher: [
        '/dashboard',
        '/login',
        '/register',
    ],
}