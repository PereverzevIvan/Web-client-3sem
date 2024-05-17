import { PDFDownloadLink } from "@react-pdf/renderer";
import { useState } from "react";
import { useForm } from "react-hook-form";
import MyDocument from "./document";
import Button from "../../components/Button/Button";

function PDFPage() {
  interface IMyForm {
    name: string;
    picture: FileList;
  }

  const [task, setTask] = useState<IMyForm>();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IMyForm>({
    mode: "onBlur",
  });

  const saveElement = (data: IMyForm) => {
    setTask(data);
    console.log(data);
  };

  return (
    <section className="section">
      <div className="container content">
        <h1 className="title">Генерация PDF</h1>
        <form className="form" onSubmit={handleSubmit(saveElement)}>
          <label className="form__label" htmlFor="name">
            Имя пользователя:
          </label>
          <input
            type="text"
            id="name"
            {...register("name", {
              required: "Поле обязательно для заполнения",
              minLength: {
                value: 5,
                message: "Нужно больше символов",
              },
            })}
          />
          {errors.name !== undefined && (
            <div className="form__errors">{errors.name.message}</div>
          )}

          <label className="form__label" htmlFor="picture">
            Изображение:
          </label>
          <input
            type="file"
            accept="image/*"
            id="picture"
            {...register("picture", {
              required: "Required",
            })}
          />

          {!!task?.name && isValid && (
            <PDFDownloadLink
              style={{ color: "var(--font-color)" }}
              document={<MyDocument name={task.name} picture={task.picture} />}
              fileName="file.pdf" // Или любое другое название
            >
              {({ loading }) => (loading ? "Загрузка..." : "Скачать")}
            </PDFDownloadLink>
          )}

          <Button disabled={!isValid} type="submit">
            Сохранить
          </Button>
        </form>
      </div>
    </section>
  );
}

export default PDFPage;
