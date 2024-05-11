import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainRouter from "./app/routing";
import { AppWrapper, Main } from "./global-styles";

// Главное приложение
function App() {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  return (
    <AppWrapper>
      <Header isAuth={isAuth} setIsAuth={setIsAuth} />
      <Main>
        <MainRouter isAuth={isAuth}></MainRouter>
      </Main>
      <Footer />
    </AppWrapper>
  );
}

export default App;
