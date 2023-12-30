import Title from "../../components/Title";
import Section from "../../components/Section";
import { Container } from "../../global-styles";
import { SubmitHandler, useForm } from "react-hook-form";
import Flex from "../../components/Flex";
import { useState } from "react";
import { GreenStyledButton } from "../../components/Buttons";
import { StyledErrorContainer, StyledFieldset, StyledForm, StyledInput, StyledLabel, StyledLegend, StyledTextarea } from "../../components/forms";
import Condition from "../../components/condition";
import { CommentList } from "../../components/comments";


// Домашняя страница
const HomePage = () => {
    interface IMyForm {
        commentTitle: string;
        commentText: string;
    }

    const {
        register, // метод для регистрации вашего инпута, для дальнейшей работы с ним
        handleSubmit, // метод для получения данных формы, если валидация прошла успешна
        formState: {errors, isValid}, // errors - список ошибок валидации для всех полей формы
        reset, // метод для очистки полей формы
    } = useForm<IMyForm>({
        mode: "onBlur", // парметр onBlur - отвечает за запуск валидации при не активном состоянии поля
    })

    const saveElement = (data: IMyForm) => {
        setTasks((prev) => [...prev, data])
        reset();
    }

    const [tasks, setTasks] = useState<IMyForm[]>([])

    return (
        <Container>
            <Section>
                <Flex direction="column" gap="20px">
                    <Title>
                        Рекомендательная система книг
                    </Title>
                    <StyledForm className="form" onSubmit={handleSubmit(saveElement)}>
                        <Flex direction="column" gap="20px">
                            <StyledLegend className="form__legend">Добавить комментарий</StyledLegend>
                            <StyledFieldset className="form__fieldset">
                                <Flex direction="column" gap="10px">  
                                    <Flex direction="column" gap="5px">
                                        <StyledLabel className="form__label" htmlFor="commentTitle">Заголовок:</StyledLabel>
                                        <StyledInput type="text" className="form__input" id="commentTitle"
                                            {...register('commentTitle', {
                                                required: "Поле обязательно для заполнения",
                                                minLength: {
                                                    value: 5,
                                                    message: "Поле должно содержать как минимум 5 символов"
                                                }
                                            })}
                                        />
                                        <Condition condition={errors.commentTitle !== undefined}>    
                                            <StyledErrorContainer className="form__errors">{errors.commentTitle?.message}</StyledErrorContainer>
                                        </Condition>
                                    </Flex>
                                    <Flex direction="column" gap="5px">
                                        <StyledLabel className="form__label" htmlFor="commentTitle">Текст:</StyledLabel>
                                        <StyledTextarea className="form__input" id="commentText"
                                            {...register('commentText', {
                                                required: "Поле обязательно для заполнения",
                                                minLength: {
                                                    value: 10,
                                                    message: "Поле должно содержать как минимум 10 символов"
                                                }
                                            })}
                                        />
                                        <Condition condition={errors.commentText !== undefined}>    
                                            <StyledErrorContainer className="form__errors">{errors.commentText?.message}</StyledErrorContainer>
                                        </Condition>
                                    </Flex>
                                </Flex>
                            </StyledFieldset>
                            <GreenStyledButton disabled={!isValid} type="default" htmlType="submit">Сохранить</GreenStyledButton>
                        </Flex>
                    </StyledForm>
                    <Condition condition={tasks.length !== 0}>
                        <CommentList comments={tasks}/>
                    </Condition>
                </Flex>
            </Section>
        </Container>
    )
}

export default HomePage;