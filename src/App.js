import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blogs/Blog';
import Home from './pages/Home/Home';
import Footer from './pages/SharedComponent/Footer';

import Navbar from './pages/SharedComponent/Navbar';


function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar/>
    <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/blog' element={<Blog/>}/>
     </Routes>
   <Footer></Footer>
    </div>
  );
}

export default App;
