import styles from "./MainContent.module.css";

function MainContent() {
    return(
        <main className={styles.main}>
            <h1 className={styles.title}>Fun facts about React</h1>

            <ul className={styles.factList}>
                <li className={styles.lisItem}>Was first reased in 2013</li>
                <li className={styles.lisItem}>Was originally created by Jordan Walke</li>
                <li className={styles.lisItem}>Has well over 100K stars on GitHub</li>
                <li className={styles.lisItem}>Is maintained by Meta</li>
                <li className={styles.lisItem}>Powers thousands of enterprise apps, including mobile apps</li>
                <li className={styles.lisItem}>Uses a virtual DOM to improve app performance</li>
                <li className={styles.lisItem}>Is component-based, meaning everything is broken into reusable pieces</li>
                <li className={styles.lisItem}>Has a strong developer community and extensive documentation</li>
                <li className={styles.lisItem}>Supports both functional and class-based components</li>
                <li className={styles.lisItem}>Can be used for building web and mobile apps (with React Native)</li>
                <li className={styles.lisItem}>The React team is constantly releasing new updates and improvements</li>
                <li className={styles.lisItem}>React has a large ecosystem with libraries like Redux, React Router, and Styled Components</li>
            </ul>
        </main>
    )
}

export default MainContent