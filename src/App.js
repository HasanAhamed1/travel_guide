import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/about/About';
import Blog from './Components/blogs/Blog';
import Error from './Components/error/Error';
import Header from './Components/header/Header';
import Home from './Components/home/home';
import Login from './Components/login/Login';

function App() {
  
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/*' element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;
