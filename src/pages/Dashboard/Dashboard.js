import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user]=useAuthState(auth)
    const [admin]=useAdmin(user)
    return (
        <div>
          
            <div class="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content ">
               
                 <Outlet></Outlet>
                    

                </div>
                <div class="drawer-side">
                    <label for="dashboard-drawer" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                     
                        <li><Link to='/dashboard'>My Profile</Link></li>
                        <li><Link to='/dashboard/review'>Add Review</Link></li>
                        <li><Link to='/dashboard/orders'>My Orders</Link></li>
                      { admin &&
                        <li><Link to='/dashboard/users'>All Users</Link></li>
                    }
                      { admin &&
                        <li><Link to='/dashboard/addTools'>Add Tools</Link></li>
                    }
                        
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
