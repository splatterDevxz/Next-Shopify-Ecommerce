import React from 'react'
import Link from 'next/link'


const Nav = () =>{
    return(
        <>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>About Mcrich</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>Tours</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>Contact</a>
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Nav;