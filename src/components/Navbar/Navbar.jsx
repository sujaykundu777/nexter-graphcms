import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = props => {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = event => {
        if(event.target.checked){
            setMenuOpen(true);
        }else{
            setMenuOpen(false);
        }
    };

    return(
        <div className={styles.nav}>
            <div className={styles.navWrapper}>
                <div className={styles.navWrapperInner}>
                    <div className={styles.navLeftPart}>
                      <Link href='/'>
                          <a className={styles.navBrand}>
                              <Image src="/logo.png" alt="nexter logo" width="200px" height="80px" />
                          </a>
                      </Link>
                    </div>
                    <div className={styles.navRightPart}>
                    <input id="toggler" className={styles.toggler} type="checkbox" onChange={handleMenuClick}/>
                    <label htmlFor="toggler" className={styles.burger}>
                       {isMenuOpen ? (
                            <span className={styles.change}>
                                <div className={styles.bar1}></div>
                                <div className={styles.bar2}></div>
                                <div className={styles.bar3}></div>
                            </span>
                       ) : (<span>
                            <div className={styles.bar1}></div>
                            <div className={styles.bar2}></div>
                            <div className={styles.bar3}></div>
                            </span>
                         )}
                    </label>
                    <ul className={styles.navLinks}>
                        <Link href='/'><a>Home</a></Link>
                        <Link href='/about'><a>About</a></Link>
                        <Link href='/blog'><a>Blog</a></Link>
                        <Link href='/portfolio'><a>Portfolio</a></Link>
                        <Link href='/products'><a>Products</a></Link>
                        <Link href="/news"><a>News</a></Link>
                        <Link href='/contact'><a>Contact</a></Link>
                    </ul>
                  </div>
                </div>
                {isMenuOpen && (
                      <div className={styles.toggleMenu}>
                        <ul className={styles.toggleNavLinks}>
                            <li> <Link href='/'><a>Home</a></Link> </li>
                            <li> <Link href='/about'><a>About</a></Link> </li>
                            <li> <Link href='/blog'><a>Blog</a></Link> </li>
                            <li> <Link href='/portfolio'><a>Portfolio</a></Link> </li>
                            <li> <Link href='/products'><a>Products</a></Link> </li>
                            <li><Link href="/news"><a>News</a></Link></li>
                            <li> <Link href='/contact'><a>Contact</a></Link></li>
                        </ul>
                      </div>
                     )
                 }
            </div>
        </div>
    )
}

export default Navbar;