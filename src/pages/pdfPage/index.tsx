import { useForm } from "react-hook-form";
import Flex from "../../components/Flex";
import Section from "../../components/Section";
import Title from "../../components/Title";
import { Container } from "../../global-styles";
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import { useState } from "react";


// Create styles
const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
});

interface Props {
    name: string
}
  
// Create Document Component
const MyDocument: React.FC<Props> = ({name}) => (
    <Document>
        <Page size="A4" style={styles.page}>
        <View style={styles.section}>
            <Text>Name: {name}</Text>
        </View>
        <View style={styles.section}>
            <Text>Section #2</Text>
        </View>
        </Page>
    </Document>
);

const PDFPage = () => {
    interface IMyForm {
        name: string;
    }
    
    const {
        register,
        handleSubmit,
        formState: {errors, isValid}, 
        reset,
    } = useForm<IMyForm>({
        mode: "onBlur",
    })
    
    const saveElement = (data: IMyForm) => {
        setTask(data);
        reset();
    }
    
    const [task, setTask] = useState<IMyForm>()

    return (
        <Container>
            <Section>
                <Flex direction="column" gap="15px">
                    <Title>
                        PDF
                    </Title>

                    <form onSubmit={handleSubmit(saveElement)}>
                        <input
                        {...register("name", {
                            required: "Поле обязательно для заполнения",
                            minLength: {
                            value: 5,
                            message: "Нужно больше символов"
                            }
                        }
                        )}
                        />

                        <div>{errors.name?.message}</div>
                        <button type="submit">Сохранить</button>
                    </form>
                </Flex>
            </Section>
            <Section>               
                {!!task?.name && 
                    <MyDocument name={task.name}/> 
                }
                {!!task?.name && 
                    
                    <PDFDownloadLink document={<MyDocument name={task.name}/>} fileName="somename.pdf">
                        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
                    </PDFDownloadLink>
                }
            </Section>
        </Container>
    )
}

export default PDFPage;