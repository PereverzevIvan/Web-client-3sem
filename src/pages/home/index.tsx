import { useForm } from "react-hook-form";
import { useState } from "react";
import Button from "../../components/Button/Button";
import { CommentList } from "../../components/Comments/Comments";

// Домашняя страница
const HomePage = () => {
  interface IMyForm {
    commentTitle: string;
    commentText: string;
  }

  const {
    register, // метод для регистрации вашего инпута, для дальнейшей работы с ним
    handleSubmit, // метод для получения данных формы, если валидация прошла успешна
    formState: { errors, isValid }, // errors - список ошибок валидации для всех полей формы
    reset, // метод для очистки полей формы
  } = useForm<IMyForm>({
    mode: "onBlur", // парметр onBlur - отвечает за запуск валидации при не активном состоянии поля
  });

  const saveElement = (data: IMyForm) => {
    setTasks((prev) => [...prev, data]);
    reset();
  };

  const [tasks, setTasks] = useState<IMyForm[]>([]);

  return (
    <section>
      <div className="container content">
        <h1 className="title">Рекомендательная система книг</h1>
        <form className="form" onSubmit={handleSubmit(saveElement)}>
          <legend className="form__legend">Добавить комментарий</legend>
          <fieldset className="form__fieldset">
            <label className="form__label" htmlFor="commentTitle">
              Заголовок:
            </label>
            <input
              type="text"
              className="form__input"
              id="commentTitle"
              {...register("commentTitle", {
                required: "Поле обязательно для заполнения",
                minLength: {
                  value: 5,
                  message: "Поле должно содержать как минимум 5 символов",
                },
              })}
            />
            {errors.commentTitle !== undefined && (
              <div className="form__errors">{errors.commentTitle?.message}</div>
            )}
            <label className="form__label" htmlFor="commentTitle">
              Текст:
            </label>
            <textarea
              className="form__input"
              id="commentText"
              {...register("commentText", {
                required: "Поле обязательно для заполнения",
                minLength: {
                  value: 10,
                  message: "Поле должно содержать как минимум 10 символов",
                },
              })}
            />
            {errors.commentText !== undefined && (
              <div className="form__errors">{errors.commentText?.message}</div>
            )}
          </fieldset>
          <Button type="submit" disabled={!isValid}>
            Сохранить
          </Button>
        </form>
        {tasks.length !== 0 && <CommentList comments={tasks} />}
      </div>
    </section>
  );
};

export default HomePage;
