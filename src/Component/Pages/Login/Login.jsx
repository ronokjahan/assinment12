import { useContext } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { Authcontex } from "../../Fairbase/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { TbFidgetSpinner } from "react-icons/tb";


const Login = () => {
  const navigate=useNavigate()
  const location=useLocation()
  const froms=location.state?.from?.pathname || '/'
  const {singups,
    singin,
    user,loading,singouts, googles}=useContext(Authcontex)
    const singins=event=>{
      event.preventDefault()
      const from=event.target 
      const email=from.email.value 
      const password=from.password.value
      const all={email,password}
      console.log(all);
      singin(email,password)
      .then((result) => {
      
        
       
        const user = result.user;
        console.log(user);
       navigate(froms,{replace:true})
        
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
        
       
      });
      
    }
    const googlehamdel=()=>{
      googles()
      .then((result) => {
      
        
       
        const user = result.user;
        console.log(user);
        navigate(froms,{replace:true})
        
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
        
       
      });
    
      
    }
    return (
       <div>
         <div className="hero min-h-screen bg-base-200 ">
        <div className=" ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold mb-4">Login now!</h1>
           
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={singins} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button  className="btn btn-primary "> {loading?(<TbFidgetSpinner size={24}/>):('Login')}</button>
              </div>
              <div>
              <div onClick={googlehamdel} className=" flex items-center justify-center border space-x-2  m-3 border-rounded border-gray-200 cursor-pointer">
                <FcGoogle size={32}></FcGoogle>
                <p className="px-6 text-center text-orange-500  text-xl">Contenue google </p>
              </div>
              </div>
            </form>
            <div className="mb-2">
            <h1 className="text-3xl text-center">Do,t Have A Account <Link className="text-center" to='/singup'><span className="font-extrabold text-amber-800">SingUp Now</span></Link></h1>
            </div>
          </div>
        </div>
      </div>
      
       </div>
    );
};

export default Login;