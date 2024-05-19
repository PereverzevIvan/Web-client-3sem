import axios from "axios";
import { useEffect, useState } from "react";
import Table from "../../components/Table/Table";
import Button from "../../components/Button/Button";
import ButtonBox from "../../components/ButtonBox/ButtonBox";

// СТраница книг
const BooksPage = () => {
  const LIMIT_RECORDS = 5; // Лимит получаемых данных

  // Структура получаемых данных
  interface IDataType {
    pk: number;
    book_name: string;
    author: string;
    genre: number;
    year: number;
    annotation: string;
    image: string;
  }

  // Определение столбцов таблицы
  const columns: Array<{ text: string; key: string }> = [
    {
      text: "№",
      key: "pk",
    },
    {
      text: "Название книги",
      key: "book_name",
    },
    {
      text: "Автор",
      key: "author",
    },
    {
      text: "Жанр",
      key: "genre",
    },
    {
      text: "Год издания",
      key: "year",
    },
  ];

  const [page, setPage] = useState<number>(1);
  const [dataSource, setDataSource] = useState<IDataType[]>();
  const [maxPage, setMaxPage] = useState<number>(-1);

  const getData = async (page: number, limit: number) => {
    const offset = (page - 1) * limit;
    const response = await axios.get(`http://127.0.0.1:8000/api/v1/books?offset=${offset}&limit=${limit}`);
    const count = response.data.count;
    setMaxPage(count % LIMIT_RECORDS === 0 ? Math.floor(count / LIMIT_RECORDS) : Math.floor(count / LIMIT_RECORDS) + 1);
    setDataSource(response.data.results);
  };

  // Функция, вызываемая по нажатии кнопки
  useEffect(() => {
    getData(page, LIMIT_RECORDS);
  }, [page]);

  return (
    <section>
      <div className="container content">
        <h1 className="title">Книги</h1>
        {dataSource !== undefined && <Table headers={columns} contentRows={dataSource} />}
        <ButtonBox>
          <Button
            onClick={() => {
              setPage(page - 1);
            }}
            disabled={page === 1}
          >
            Назад
          </Button>
          <p>Страница {page}</p>
          <Button
            onClick={() => {
              setPage(page + 1);
            }}
            disabled={page === maxPage}
          >
            Вперед
          </Button>
        </ButtonBox>
      </div>
    </section>
  );
};

export default BooksPage;
