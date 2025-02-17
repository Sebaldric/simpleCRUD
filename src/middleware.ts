import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { supabase } from './utils/supabase/supabase'

export async function middleware(request: NextRequest) {
  const res = NextResponse.next()

  const {
    data: { session },
  } = await supabase.auth.getSession()

  // /userページへのアクセスで未ログインの場合は/loginにリダイレクト
  if (request.nextUrl.pathname.startsWith('/user')) {
    if (!session) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  // /loginページにログイン済みでアクセスした場合は/userにリダイレクト
  if (request.nextUrl.pathname.startsWith('/login')) {
    if (session) {
      return NextResponse.redirect(new URL('/user', request.url))
    }
  }

  return res
}

// ミドルウェアを適用するパスを指定
export const config = {
  matcher: ['/user/:path*', '/login']
}