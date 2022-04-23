import { NextResponse } from "next/server"

export function middleware(req) {
    console.log('slugdirectory middleware', req.url)

    return NextResponse.next()
}