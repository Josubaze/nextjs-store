export default function Layout( {children}: {children: React.ReactNode[]} ){ // layout local, depende de anidación y nivel
    return (
        <main>
            <nav>Navegación de las Categorías</nav>

            { children }

        </main>
    )
}
