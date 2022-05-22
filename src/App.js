import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blogs/Blog';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Purchase from './pages/Purchases/Purchase';
import Footer from './pages/SharedComponent/Footer';

import Navbar from './pages/SharedComponent/Navbar';


function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar/>
    <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/blog' element={<Blog/>}/>
       <Route path='/purchase' element={<Purchase></Purchase>}></Route>
       <Route path='/login' element={<Login/>}/>
     </Routes>
   <Footer></Footer>
    </div>
  );
}

export default App;
