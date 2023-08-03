import React, { Fragment } from 'react'
import Link from 'next/Link'
import styles from '../styles/Header.module.css'
function Header() {
    return (
        <Fragment>
            <nav className={styles.mainnav}>
                <ul className={styles.list_group}>
                    <Link href="/"><li className={styles.list_item}>HOME</li></Link>
                    <Link href="/blog"><li className={styles.list_item}>BLOG</li></Link>
                    <Link href="/contact"><li className={styles.list_item}>CONTACT</li></Link>
                    <Link href="/news"><li className={styles.list_item}>NEWS</li></Link>
                    <Link href="/about"><li className={styles.list_item}>ABOUT</li></Link>
                </ul>
            </nav>
        </Fragment>

    )
}

export default Header