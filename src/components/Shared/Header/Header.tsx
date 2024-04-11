import Link from 'next/link'
import styles from './Header.module.sass'
import { validateAccessToken } from 'src/utils/auth/validateAccessToken'
import dynamic from 'next/dynamic'
import { FaUserCircle } from "react-icons/fa";

const NoSSRShoppingCart = dynamic(() => import("../ShoppingCart"), { ssr: false });
const NoSSRLogout = dynamic(() => import("../Logout"), { ssr: false });

export const Header = async () => {
  const customer = await validateAccessToken();
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
        
        {customer?.firstName ? (
        <>
        <Link href="/my-account"><FaUserCircle/></Link>
        <p>Hola! {customer.firstName}</p>
        <NoSSRShoppingCart />
        <NoSSRLogout />
        </>
        ) : (
        <>
        <Link href="/login">Login</Link>
        <Link href="/signup">Signup</Link>
        </>)}
        
      </div>
    </header>)
}