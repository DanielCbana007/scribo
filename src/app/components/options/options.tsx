import styles from './options.module.css'

function Options() {
    return (
        <div className={styles.section_options}>
            <ul className={styles.section_icons}>
                <li className={styles.icon}></li>
                <li className={styles.icon}></li>
                <li className={styles.icon}></li>
            </ul>
        </div>
    )
}

export default Options