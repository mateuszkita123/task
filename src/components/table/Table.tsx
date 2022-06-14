import { useState } from 'react';

import styles from '../../styles/Styles.module.scss';
import { Form } from './Form';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

export interface IUser {
  firstName: string;
  lastName: string;
}

export const Table = () => {
  const [data, setData] = useState<IUser[]>([]);
  const [validation, setValidation] = useState("");

  const saveUser = (user: IUser) => {
    setData([...data, user]);
  }

  return <><div className={styles.table}>
    <TableHeader text="Pracownicy" />
    {data.map(item => <TableRow firstName={item.firstName} lastName={item.lastName} />)}
  </div>
    {validation ? <p className={styles.validation}>{validation}</p> : null}
    <Form saveData={saveUser} />
  </>
}