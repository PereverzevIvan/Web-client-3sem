import './App.css';
import Table from 'antd/es/table/Table';
import type { ColumnsType } from 'antd/es/table';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'antd/es/button';
import { Link } from 'react-router-dom';
import { UNIVERSITIES_ROUTE, USERS_ROUTE } from './app/routing/config';
import MainRouter from './app/routing';

// Главное приложение
function App() {
  const LIMIT_LIST_SCHOOL = 3;  // Лимит полученных данных

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

  const getUniversity = async (page: number, limit: number) => {
    const response = await axios.get(`http://127.0.0.1:8000/api/v1/books?offset=${(page-1)*limit}&limit=${limit}`)
    const count = response.data.count;
    setMaxPage(count % LIMIT_LIST_SCHOOL === 0 ? Math.floor(count / LIMIT_LIST_SCHOOL) : Math.floor(count / LIMIT_LIST_SCHOOL) + 1);
    setDataSource(response.data.results);
  }

  // Функция, вызываемая по нажатии кнопки
  useEffect(() => {
    getUniversity(page, LIMIT_LIST_SCHOOL)
  }, [page]);


  return (
    <>   
      <div className="container">
        <div className="App">
          <main className="main">
            <Table dataSource={dataSource} columns={columns} pagination={false} />
            <div className="button-box">
              <Button onClick={() => { setPage(page - 1); } } disabled={page === 1}>Назад</Button>
              <p>Страница {page}</p>
              <Button onClick={() => { setPage(page + 1); } } disabled={page === maxPage}>Вперед</Button>
            </div>
          </main>
        </div>
      </div>

      <Link to='/'>Home</Link>
      <Link to={USERS_ROUTE}>Users</Link>
      <Link to={UNIVERSITIES_ROUTE}>University</Link>

      <MainRouter></MainRouter>
    </>
  );
}

export default App;
