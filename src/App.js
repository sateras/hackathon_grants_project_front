import './css/index.css'
import { Route, Routes} from 'react-router-dom';
import RegisterPage from './pages/registerPage';
import LoginPage from './pages/loginPage';
import MainPage from './pages/mainPage';
import ProjectsPage from './pages/progectsPage';
import MyProjectsPage from './pages/myProgectsPage';
import PostProjectsPage from './pages/postProjectsPage';
import NotFoundPage from './pages/notFound';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/' element={<MainPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/myprojects' element={<MyProjectsPage />} />
        <Route path='/postproject' element={<PostProjectsPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer/>
    </div>
    
  );
}

export default App;
