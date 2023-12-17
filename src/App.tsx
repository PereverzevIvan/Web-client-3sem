import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainRouter from './app/routing';

// Главное приложение
function App() {
  const [isAuth, setIsAuth] = useState<boolean>(false)
  
  return (
    <>  
      <div className="App">
        <Header isAuth={isAuth} setIsAuth={setIsAuth}/>
        <main className="main wrapper-v">
          <div className="container wrapper-v">
            <MainRouter isAuth={isAuth}></MainRouter>
          </div>
        </main>
        <Footer/>
      </div>
    </>
  );
}

export default App;
