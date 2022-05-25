import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/133293740-manufacture-welding-robot-line-icon-linear-style-sign-for-mobile-concept-and-web-design-conveyor-bel.jpg'
import auth from '../../firebase.init';

const Navbar = () => {
  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken')
  };
  const [user, loading, error] = useAuthState(auth);

  const menuItem = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/portfolio">Our-Portfolio</Link></li>
    <li><Link to="/blog">Blogs</Link></li>

    <li><Link to="/contact">Contact Us</Link></li>
    {
      user && <>
      
        <li><Link to="/dashboard">Dashboard</Link></li>
        
      </>
    }
    <li>{user ?
      <>
      <button onClick={logout} class="btn btn-ghost">SingOUt</button> 
      <p className='uppercase text-xl font-bold mt-2 text-info'>Login by:{user?.displayName}</p>
       </>
      : <Link to="/login">Login</Link>}</li>
 
  </>
  return (
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {
              menuItem
            }


          </ul>
        </div>
        <Link to="/"> <img className='w-32 h-12' src={logo} alt="" /></Link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          {
            menuItem
          }


        </ul>
      </div>
      <div className="navbar-end">

        <label tabIndex="1" for="dashboard-drawer" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>


      </div>

    </div>
  );
};

export default Navbar;