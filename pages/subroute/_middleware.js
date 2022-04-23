import { NextResponse } from "next/server"

export function middleware(req) {
    console.log('subroute middleware', req.url)

    return NextResponse.next()
}