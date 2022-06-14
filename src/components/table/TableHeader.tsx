import { FC } from "react"

import styles from '../../styles/Styles.module.scss';

interface IProps {
  text: string;
}

export const TableHeader: FC<IProps> = ({ text }) => {
  return <div className={styles.tableHeader}>{text}</div>
}