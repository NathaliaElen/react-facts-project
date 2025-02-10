import styles from "./Footer.module.css";

function Footer() {
    return(
        <footer className={styles.footer}>
            <small className={styles.smallParagraph}>© 2025 <b>Nathália Elen</b> development. All rights reserved.</small>
        </footer>
    )
}

export default Footer