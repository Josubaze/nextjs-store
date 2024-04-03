import Link from 'next/link'
import styles from './Header.module.sass'
import { validateAccessToken } from 'src/utils/auth/validateAccessToken'
import { ShoppingCart } from 'src/components/Shared/ShoppingCart'


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
        </ul>
      </nav>
      <div className={styles.Header__user}>
        {customer?.firstName ? (<p>Hola! {customer.firstName}</p>) : (<Link href="/login">Login</Link>)}
        <ShoppingCart></ShoppingCart>
      </div>
    </header>)
}