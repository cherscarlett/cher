import styles from './Footer.module.css';
import Link from 'next/link';

const Footer = () => (
    <footer>
        <ul className={styles.footer}>
            <li className={styles.twitter}>
                <Link  href="//twitter.com/cherthedev">twitter/@cherthedev</Link>
            </li>
            <li className={styles.github}>
                <Link href="//github.com/cherscarlett">github/@cherscarlett</Link>
            </li>
            <li className={styles.linkedin}>
                <Link href="//linkedin.com/in/cherscarlett">linkedin/@cherscarlett</Link>
            </li>
            <li className={styles.instagram}>
                <Link href="//instagram.com/cher.dev">instagram/@cher.dev</Link>
            </li>
            <li className={styles.twitch}>
                <Link href="//twitch.tv/ch_r">twitch/@ch_r</Link>
            </li>
            <li className={styles.heatonist}>
                <Link href="//heatonist.com/?sref_id=v55cfxw&utm_campaign=referral_program&utm_source=loyalty">Heatonist Discount URL</Link>
            </li>
        </ul>
    </footer>
);

export default Footer;