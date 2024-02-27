import Link from "next/link";
import styles from './Header.module.sass'

export const Header = () => {
    return (<header>
            <nav>
                <ul className={styles.Header__list}>
                    {/* Elemento Link para una NAVEGACIÓN + fluida, para evitar recargar la página  */}
                    <Link href="/"> {/* utilizada para navegación interna, "a" se recomienda para externo */}
                    <li>Home</li>
                    </Link>
                    
                    <Link href="/store">
                    <li>Store </li>
                    </Link>
                    <Link href="/test">
                    <li>Test </li>
                    </Link>
                </ul>
            </nav>
        </header>)
}
