import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../firebase.init";

const useUpdateProfile=()=>{
    const [user, loading, error] = useAuthState(auth);
        const [updateProfile,setUpdateProfile]=useState('')
    const { data: profile, isLoading,refetch } = useQuery('profile', () => fetch(`https://young-fjord-38482.herokuapp.com/profile/${user.email}`,{
        method: "GET",
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        setUpdateProfile(profile)
        return res.json()}))
   
 return [updateProfile]


}

export default useUpdateProfile;