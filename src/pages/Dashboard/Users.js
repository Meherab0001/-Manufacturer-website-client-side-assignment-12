import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../SharedComponent/Loading';
import UserRaw from './UserRaw';

const Users = () => {

    const { data: users, isLoading ,refetch} = useQuery('users', () => fetch('https://young-fjord-38482.herokuapp.com/users',{
        method:'GET',
       headers:{
           authorization:`Bearer ${localStorage.getItem('accessToken')}`
       }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
          
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
             
                      <tbody>
                      {
                            users.map((user,index) =><UserRaw
                            key={user._id}
                            user={user}
                            index={index}
                            refetch={refetch}
                            ></UserRaw>)
                        }
                      </tbody>
            
                 
                </table>
            </div>
        </div>
    );
};

export default Users;