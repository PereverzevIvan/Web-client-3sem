import { Button } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import axios from "axios";
import { useEffect, useState } from "react"

// СТраница книг
const BooksPage = () => {
    const LIMIT_RECORDS = 3;  // Лимит получаемых данных
  
    // Структура получаемых данных
    interface DataType {
      pk: number,
      book_name: string,
      author: string,
      genre: number,
      year: number,
      annotation: string
    }
    
    // Определение столбцов таблицы
    const columns: ColumnsType<DataType> = [
      {
        title: '№',
        dataIndex: 'pk',
        key: 'pk',
      },
      {
        title: 'Название книги',
        dataIndex: 'book_name',
        key: 'book_name',
      },
      {
        title: 'Автор',
        dataIndex: 'author',
        key: 'author',
      },
      {
        title: 'Жанр',
        dataIndex: 'genre',
        key: 'genre',
      },
      {
        title: 'Год издания',
        dataIndex: 'year',
        key: 'year',
      },
    ]
  
    const [page, setPage] = useState<number>(1);
    const [dataSource, setDataSource] = useState<DataType[]>();
    const [maxPage, setMaxPage] = useState<number>(-1);
  
    const getData = async (page: number, limit: number) => {
      const offset = (page-1)*limit
      const response = await axios.get(`http://127.0.0.1:8000/api/v1/books?offset=${offset}&limit=${limit}`)
      const count = response.data.count;
      setMaxPage(count % LIMIT_RECORDS === 0 ? Math.floor(count / LIMIT_RECORDS) : Math.floor(count / LIMIT_RECORDS) + 1);
      setDataSource(response.data.results);
    }
  
    // Функция, вызываемая по нажатии кнопки
    useEffect(() => {
      getData(page, LIMIT_RECORDS)
    }, [page]);

    return (
        <>
            <div className="">Книги</div>
            <Table dataSource={dataSource} columns={columns} pagination={false} />
            <div className="button-box">
            <Button onClick={() => { setPage(page - 1); } } disabled={page === 1}>Назад</Button>
            <p>Страница {page}</p>
            <Button onClick={() => { setPage(page + 1); } } disabled={page === maxPage}>Вперед</Button>
            </div>
        </>
    )
}

export default BooksPage;