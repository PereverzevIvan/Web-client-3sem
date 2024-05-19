import { useState, useContext } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainRouter from "./app/routing";
import { AppThemeContext } from "./context/AppThemeContext";

// Главное приложение
function App() {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const { theme } = useContext(AppThemeContext);

  return (
    <div className={`app ${theme}`}>
      <Header isAuth={isAuth} setIsAuth={setIsAuth} />
      <main className="main">
        <MainRouter isAuth={isAuth}></MainRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;
