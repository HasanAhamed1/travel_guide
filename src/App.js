import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/about/About';
import Error from './Components/error/Error';
import Header from './Components/header/Header';
import Login from './Components/login/Login';
import Blogs from './Components/blogs/Blogs';
import Home from './Components/home/Home';
import CheckOut from './Components/checkout/CheckOut';

function App() {
  
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
        <Route path='/*' element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;
