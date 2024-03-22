import styles from './header.module.css'

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <h1 className="title lg"><span className="highlight">Nu</span> Kenzie</h1>
            </div>
        </header>
    )
}