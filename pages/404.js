import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from 'next/router'
import Head from "next/dist/next-server/lib/head";

export default function NotFound() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])
    return (
        <>
            <Head>
                <title>404 | Not Found</title>
            </Head>
            <div className="not-found">
                <h1>Ooops..</h1>
                <h2>The page could not be found!</h2>
                <Link href="/"><button>Go Back Home</button></Link>
            </div>
        </>
    )
}