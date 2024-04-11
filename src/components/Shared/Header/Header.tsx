import Link from 'next/link'
import styles from './Header.module.sass'
import { validateAccessToken } from 'src/utils/auth/validateAccessToken'
import dynamic from 'next/dynamic'

const NoSSRShoppingCart = dynamic(() => import("../ShoppingCart"), { ssr: false });


export const Header = async () => {
  const customer = await validateAccessToken()

  return (
    <header className={styles.Header}>
      <nav>
        <ul className={styles.Header__list}>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/store">
              Store
            </Link>
          </li>
          <li>
            <Link href="/chat">
            Vergil
            </Link>
            ✨
          </li>
        </ul>
      </nav>
      <div className={styles.Header__user}>
        {customer?.firstName ? (<p>Hola! {customer.firstName}</p>) : (
        <>
        <Link href="/login">Login</Link>
        <Link href="/signup">Signup</Link>
        </>)}
        <NoSSRShoppingCart />
      </div>
    </header>)
}