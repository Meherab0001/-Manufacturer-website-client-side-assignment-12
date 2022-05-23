import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blogs/Blog';
import AddReview from './pages/Dashboard/AddReview';
import Dashboard from './pages/Dashboard/Dashboard';
import MyOrder from './pages/Dashboard/MyOrder';
import MyProfile from './pages/Dashboard/MyProfile';
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
      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog />} />
        <Route path='/tools/:id' element={<RequrireAuth>
          <Purchase></Purchase>
        </RequrireAuth>}></Route>
        <Route path='/dashboard' element={<RequrireAuth>
          <Dashboard></Dashboard>
        </RequrireAuth>}>

          <Route index element={<MyProfile />}></Route>
          <Route path='orders' element={<MyOrder />}></Route>
          <Route path='review' element={<AddReview />}></Route>
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/singUp' element={<SignUP></SignUP>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
