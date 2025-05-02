// src/pages/admin/_middleware.ts
import { NextResponse } from 'next/server';

export function middleware(req: any) {
  const token = req.cookies['admin-token']; // Get token from cookies (ensure to set token during login)

  if (!token) {
    return NextResponse.redirect(new URL('/admin/login', req.url)); // Redirect to login if no token
  }

  return NextResponse.next();
}
