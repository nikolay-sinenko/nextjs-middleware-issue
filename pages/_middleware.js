import { NextResponse } from "next/server"

export function middleware(req) {
    console.log('app middleware', req.url)

    return NextResponse.next()
}