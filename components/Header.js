import styles from './Header.module.css';
import Link from 'next/link';
import {Router, useRouter} from 'next/router';

const Header = () => {
    const router = useRouter();
    const pathname = router.pathname.replace('/', '');
    const routeName = pathname || 'home';

    const LinkOrSpan = ({name}) => {
        const isCurrent = routeName === name.toLowerCase();
        return isCurrent ? (<span>{name}</span>) : (<Link href={`/${name.toLowerCase()}`}>{name}</Link>);
    }

    return (
        <header className={[styles.header, styles[`header--${routeName}`]].join(' ')}>
            <h1 className={styles.heading}>
                Cher
                <span className={styles.headingPresentation} role="presentation"></span>
                <span className={styles.headingPresentationLayer} role="presentation">Cher</span>
            </h1>
            <div className={styles.subheadingGroup}>
                <h2 className={styles.subheading}>Principal Software Engineer</h2>
                <h2 className={styles.subheading}>Hot Sauce Maker</h2>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <LinkOrSpan name="Things" />
                    </li>
                    <li>
                        <LinkOrSpan name="Pantry" />
                    </li>
                    <li className={styles.shop}>
                        <LinkOrSpan name="Shop" />
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;
