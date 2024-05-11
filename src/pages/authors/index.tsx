import Title from "../../components/Title";
import Flex from "../../components/Flex";
import Section from "../../components/Section";
import { Container } from "../../global-styles";


// Страница авторов
const AuthorPage = () => {
    return (
        <Container>
            <Section>
                <Flex direction="column" gap="15px">
                    <Title>
                        Авторы
                    </Title>
                </Flex>
            </Section>
        </Container>
    )
}

export default AuthorPage;