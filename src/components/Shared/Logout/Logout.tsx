"use client";

import styles from './Logout.module.sass'
import { MdOutlineLogout } from "react-icons/md";
import { handleLogout } from 'src/actions';

export default function Logout() {

  const handleButton = async () => {
    try {
      await handleLogout();
    } catch (err) {
      throw new Error("could not log out");
    }
  }
  return (
    <div className={styles.Logout}>
      <button className={styles.Logout__log} onClick={handleButton}>
        <MdOutlineLogout />
      </button>
    </div>
  )
}