import { FC } from "react"

import styles from '../../styles/Styles.module.scss';
import { IUser } from "./Table";

export const TableRow: FC<IUser> = ({ firstName, lastName }) => {
  return <>
    <div className={styles.tableRow}>{firstName}</div>
    <div className={styles.tableRow}>{lastName}</div>
  </>
}