import './css/index.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import RegisterPage from './pages/registerPage';
import LoginPage from './pages/loginPage';
import HomePage from './pages/homePage';
import GrantCard from './components/GrantCard';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <Header/>
      <GrantCard 
        price='4000'
        partner='МОН РК, ОВПО, НПО' 
        start='01.01.2022' 
        title='Студенческие стипендии Фонда Нурсултана Назарбаева'
        participant='студенты очного обучения высших и средних специальных (искусство и культура) учебных заведений'
      />
      <GrantCard 
        price='3000'
        partner='МОН РК, ОВПО, НПО' 
        start='01.01.2022' 
        title='Студенческие стипендии Фонда Нурсултана Назарбаева'
        participant='студенты очного обучения высших и средних специальных (искусство и культура) учебных заведений'
      />
      {/* <BrowserRouter>   
        <Routes>
          <Route exact path='/' component={<HomePage />} />
          <Route exact path='/login' component={<LoginPage />} />
          <Route exact path='/register' component={<RegisterPage />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
