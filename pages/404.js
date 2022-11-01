import React, { useEffect } from 'react'
import Link from "next/link";
import { useRouter } from 'next/router';

const ErrorPage = () => {
    const router = useRouter();
    const handleInput = () => {
        router.push("/");
    }

    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3000)
    }, []);
    
  return (
    <div>
         <nav>
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/">
            Product
          </Link>
        </li>
      </ul>
    </nav>
    <div>
        <h1>We are Sorry Not fount this page :(</h1>
        {/* <Link href='/'>
        Back to home
        </Link> */}
         {/* <a onClick={() => router.push("/")}>
        Back to home
        </a> */}
         <a onClick={handleInput}>
        Back to home
        </a>
        </div>
        </div>
  )
}

export default ErrorPage 