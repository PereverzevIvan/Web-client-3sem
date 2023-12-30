import Flex from "../../components/Flex";
import Section from "../../components/Section";
import Title from "../../components/Title";
import { Container } from "../../global-styles";


// Страница жанров книг
const GenresPage = () => {
    return (
        <Container>
            <Section>
                <Flex direction="column" gap="15px">
                    <Title>
                        Жанры
                    </Title>
                </Flex>
            </Section>
        </Container>
    )
}

export default GenresPage;