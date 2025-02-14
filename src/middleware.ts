import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // URLの内容をコンソールに出力
  console.log('Request URL:', request.url)
  console.log('Pathname:', request.nextUrl.pathname)
  console.log('Search Params:', request.nextUrl.searchParams.toString())

  // リクエストを変更せずにそのまま通過させる
  return NextResponse.next()
}

// middlewareを適用するパスを指定
export const config = {
  matcher: '/:path*'
}
