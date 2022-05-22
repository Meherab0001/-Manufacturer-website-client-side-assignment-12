import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blogs/Blog';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import RequrireAuth from './pages/Login/RequrireAuth';
import SignUP from './pages/Login/SingUp';
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
       <Route path='/purchase' element={<RequrireAuth>
        <Purchase></Purchase>
       </RequrireAuth>}></Route>
       <Route path='/login' element={<Login/>}/>
       <Route path='/singUp' element={<SignUP></SignUP>}></Route>
     </Routes>
   <Footer></Footer>
    </div>
  );
}

export default App;
