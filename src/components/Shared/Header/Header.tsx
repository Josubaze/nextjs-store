import Link from "next/link";
import styles from './Header.module.sass'
import {cookies} from 'next/headers'

export const Header = () => {

    const cookiesStore = cookies();
    const token = cookiesStore.get('accessToken')?.value;
    
    
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
                </ul>
                {token ? (<p>Hola!</p>) : (<Link href="/login">Login</Link>)}
            </nav>
        </header>)
}
