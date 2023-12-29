import styled from "styled-components";

const StyledTable = styled.table`
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;

    border: none;
    box-shadow: 0px 0px 0px 1px var(--black);
    border-radius: 10px;
    padding: 10px;
    color: inherit;
    text-align: center;
    overflow: hidden;

    .table__head {
        background-color: var(--four-color);
        border-bottom: 2px solid var(--black);
    }
    .table__body .table__row:nth-child(even) {
        background-color: var(--primary-color);
    }
    .table__body .table__row {
        background-color: var(--third-color);
    }
    .table__header {
        padding: 20px;
    }
    .table__cell {
        padding: 15px;
    }
`

interface TableProps {
    headers: {text: string, key: string}[],
    contentRows: object[] | undefined
}


function Table(props: TableProps) {
    return (
        <StyledTable className="table">
            <thead className="table__head">
                <tr className="table__row">
                    {props.headers.map((header) => (<th className="table__header">{header.text}</th>))}
                </tr>
            </thead>
            {props.contentRows === undefined ?
            <p>загрузка</p> :
            <tbody className="table__body">
                {props.contentRows.map((row: any) => (
                    <tr className="table__row">
                        {props.headers.map((header) => (<td className="table__cell">{row[header.key]}</td>))}  
                    </tr>
                ))}
            </tbody>
            }
        </StyledTable>
    );
}

export default Table;