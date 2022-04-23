import { NextResponse } from "next/server"

export function middleware(req) {
    console.log('deeproute middleware', req.url)

    return NextResponse.next()
}