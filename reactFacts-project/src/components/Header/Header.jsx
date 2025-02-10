import reactLogo from '../../assets/react.svg';
import styles from "./Header.module.css";

function Header() {
    return(
        <header>
            <nav className={styles.navBar}>
                <img src={reactLogo} alt="React Logo" className={styles.navLogo}/>
                <span className={styles.navSpan}>ReactFacts</span>
                
                <ul className={styles.navList}>
                    <li className={styles.navListItem}><a href="#" target="_blank" className={styles.navAnchor}>Pricing</a></li>
                    <li className={styles.navListItem}><a href="#" target="_blank" className={styles.navAnchor}>About</a></li>
                    <li className={styles.navListItem}><a href="#" target="_blank" className={styles.navAnchor}>Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;