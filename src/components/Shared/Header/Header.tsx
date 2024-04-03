import Link from "next/link";
import styles from './Header.module.sass'
import { validateAccessToken } from "src/utils/auth/validateAccessToken";


export const Header = async () => {

    const customer = await validateAccessToken()
    
    
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
                {customer?.firstName ? (<p>Hola! { customer.firstName }</p>) : (<Link href="/login">Login</Link>)}
            </nav>
        </header>)
}
