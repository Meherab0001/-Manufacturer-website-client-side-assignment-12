import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Blog from './pages/Blogs/Blog';
import AddReview from './pages/Dashboard/AddReview';
import AddTools from './pages/Dashboard/AddTools';
import Dashboard from './pages/Dashboard/Dashboard';
import MyOrder from './pages/Dashboard/MyOrder';
import MyProfile from './pages/Dashboard/MyProfile';
import Payment from './pages/Dashboard/Payment';
import UpdateProfile from './pages/Dashboard/UpdateProfile';
import Users from './pages/Dashboard/Users';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import RequireAdmin from './pages/Login/RequireAdmin';
import RequrireAuth from './pages/Login/RequrireAuth';
import SignUP from './pages/Login/SingUp';
import MyPortfolio from './pages/MyPortfolio';
import NotFound from './pages/NotFound';
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
        <Route path='/portfolio' element={<MyPortfolio />} />
        <Route path='/tools/:id' element={<RequrireAuth>
          <Purchase></Purchase>
        </RequrireAuth>}></Route>
        <Route path='/dashboard' element={<RequrireAuth>
          <Dashboard></Dashboard>
        </RequrireAuth>}>

          <Route index element={<MyProfile />}></Route>
          <Route path='profile' element={<UpdateProfile />}></Route>
          <Route path='orders' element={<MyOrder />}></Route>
          <Route path='order/:id' element={<Payment />}></Route>
          <Route path='review' element={<AddReview />}></Route>
          <Route path='users' element={<RequireAdmin>
            <Users />
          </RequireAdmin>}></Route>
          <Route path='addTools' element={<RequireAdmin>
            <AddTools />
          </RequireAdmin>}></Route>
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/singUp' element={<SignUP></SignUP>}></Route>
        <Route to='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
