import Link from "next/link";

export const Header = () => {
    return (<header>
            <nav>
                <ul>
                    {/* Elemento Link para una NAVEGACIÓN + fluida, para evitar recargar la página  */}
                    <Link href="/"> {/* utilizada para navegación interna, "a" se recomienda para externo */}
                    <li>Home</li>
                    </Link>
                    
                    <Link href="/store">
                    <li>Store </li>
                    </Link>
                </ul>
            </nav>
        </header>)
}
