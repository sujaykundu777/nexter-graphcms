import Head from 'next/head';
import styles from '../../styles/Main.module.css';
import Navbar from '../components/Navbar';

const Layout = ({ title,children,footer}) => (
    <div className={styles.container}>
        <Head>
            <title> {title} </title>
            <meta name="viewport" content="width=device-width" />
            <meta name="description" content="Nexter is a NextJS Express Starter"/>
            <meta name="keywords" content="nextjs react express starter" />
            <meta name="author" content="xplor4r" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar/>
        <main className={styles.main}>
            {children}
        </main>
        <footer className={styles.footer}>
           <p> {footer} </p>
       </footer>
    </div>
)
export default Layout;