import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Authcontex } from "../../Fairbase/AuthProvider";
import { Navigate } from "react-router-dom";

const Singup = () => {
  const{singups,singin,user,loading,singouts,googles,updateProfile}=useContext(Authcontex)
  const singup=event=>{
    event.preventDefault()
    const from=event.target 
    const email=from.email.value 
    const password=from.password.value 
    const all={email,password}
    console.log(all);
    singups(email,password)
    .then((result) => {
      
        
       
      const user = result.user;
      console.log(user);
     Navigate('/')
      
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
      
     
    });
  
  }
    return (
        <div className="hero min-h-screen bg-base-200 ">
        <div className=" ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold mb-4">Sing Up Now!</h1>
           
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={singup} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email"  className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Singup</button>
              </div>
              <div className=" flex items-center justify-center border space-x-2  m-3 border-rounded border-gray-200 cursor-pointer">
                <FcGoogle size={32}></FcGoogle>
                <p className="px-6 text-center text-orange-500  text-xl">Contenue google </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Singup;