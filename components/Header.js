import styles from './Header.module.css';
import Link from 'next/link';

const Header = () => (
    <header className={styles.header}>
        <h1 className={styles.heading}>
            Cher
            <span className={styles.headingPresentation} role="presentation"></span>
            <span className={styles.headingPresentationLayer} role="presentation">Cher</span>
        </h1>
        <h2 className={styles.subheading}>Principal Software Engineer</h2>
        <h2 className={styles.subheading}>Hot Sauce Maker</h2>
        <nav className={styles.nav}>
            <ul>
                {/* <li>
                    <Link href="/things">Things</Link>
                </li>
                <li>
                    <Link href="/pantry">Pantry</Link>
                </li>
                <li>
                    <Link href="/shop">Shop ►</Link>
                </li> */}
            </ul>
        </nav>
    </header>
);

export default Header;
