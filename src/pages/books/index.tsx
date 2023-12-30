import axios from "axios";
import { useEffect, useState } from "react"
import { Container } from "../../global-styles";
import Section from "../../components/Section";
import Title from "../../components/Title";
import Flex from "../../components/Flex";
import Table from "../../components/Table";
import { DefaultStyledButton } from "../../components/Buttons";
import ButtonBox from "../../components/ButtonBox";
import Condition from "../../components/condition";

// СТраница книг
const BooksPage = () => {
    const LIMIT_RECORDS = 5;  // Лимит получаемых данных
  
    // Структура получаемых данных
    interface DataType {
      pk: number,
      book_name: string,
      author: string,
      genre: number,
      year: number,
      annotation: string,
      image: string
    }
    
    // Определение столбцов таблицы
    const columns: {text: string, key: string}[] = 
    [
      {
        text: '№',
        key: 'pk'},
      {
        text: 'Название книги', 
        key: 'book_name'},
      {
        text: 'Автор', 
        key: 'author'},
      {
        text: 'Жанр', 
        key: 'genre'},
      {
        text: 'Год издания', 
        key: 'year'}
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
      <Container>
        <Section>
          <Flex direction="column" gap="15px">
            <Title>
              Книги
            </Title>
            <Condition condition={dataSource !== undefined}>  
              <Table headers={columns} contentRows={dataSource}/>
            </Condition>
            <ButtonBox>
              <DefaultStyledButton type="default" onClick={() => { setPage(page - 1); } } disabled={page === 1}>Назад</DefaultStyledButton>
              <p>Страница {page}</p>
              <DefaultStyledButton type="default" onClick={() => { setPage(page + 1); } } disabled={page === maxPage}>Вперед</DefaultStyledButton>
            </ButtonBox>
          </Flex>
        </Section>
      </Container>
      </>
    )
}

export default BooksPage;