import Image from "next/image"
import Link from "next/link"

const DeepStaticPage = () => {
    return (
        <>
            <h1>Very Deep Static Page</h1>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            <Link href="/1">Link</Link>
            <Link href="/2">Link</Link>
            <Link href="/3">Link</Link>
            <Link href="/4">Link</Link>
            <Link href="/5">Link</Link>
            <Link href="/6">Link</Link>
        </>
    )
}

export default DeepStaticPage