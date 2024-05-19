import styles from "./table.module.scss";

interface TableProps {
  headers: { text: string; key: string }[];
  contentRows: object[] | undefined;
}

function Table(props: TableProps) {
  return (
    <table className={styles.table}>
      <thead className={styles.table__head}>
        <tr className={styles.table__row}>
          {props.headers.map((header) => (
            <th className={styles.table__header}>{header.text}</th>
          ))}
        </tr>
      </thead>
      {props.contentRows === undefined ? (
        <p>загрузка</p>
      ) : (
        <tbody className={styles.table__body}>
          {props.contentRows.map((row: any) => (
            <tr className={styles.table__row}>
              {props.headers.map((header) => (
                <td className={styles.table__cell}>{row[header.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      )}
    </table>
  );
}

export default Table;
