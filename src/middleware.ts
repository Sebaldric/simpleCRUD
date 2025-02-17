import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { supabase } from './utils/supabase/supabase'

export async function middleware(request: NextRequest) {
  const res = NextResponse.next()

  // セッション変更を監視
  const { data } = supabase.auth.onAuthStateChange((event, session) => {
    console.log(event, session)

    if (event === 'INITIAL_SESSION') {
      // handle initial session
    } else if (event === 'SIGNED_IN') {
      // handle sign in event
      return NextResponse.redirect(new URL('/user', request.url))
    } else if (event === 'SIGNED_OUT') {
      // handle sign out event
    } else if (event === 'PASSWORD_RECOVERY') {
      // handle password recovery event
    } else if (event === 'TOKEN_REFRESHED') {
      // handle token refreshed event
    } else if (event === 'USER_UPDATED') {
      // handle user updated event
    }
  })

  // call unsubscribe to remove the callback
  data.subscription.unsubscribe()


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