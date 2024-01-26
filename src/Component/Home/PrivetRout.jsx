import { auth } from "firebaseui";
import { Authcontex } from "../Fairbase/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";


const PrivetRout = ({children}) => {
    const{user,loading}=useContext(Authcontex)
    const location=useLocation()
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user){
return children
    }
    return <Navigate to='/login' state={{from:location}} replace>

    </Navigate>
};

export default PrivetRout;