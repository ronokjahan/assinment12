import { Link } from 'react-router-dom';
import logo from './../../assets/bistro-2/Zio_Alberto_–_Just_another_WordPress_site/logo.png'
import { useContext } from 'react';

import { Authcontex } from '../Fairbase/AuthProvider';


const Navbar = () => {
  const{user,singouts}=useContext(Authcontex)

  const handellogout=()=>{
    singouts()
    .then(() => {
      
    })
    .catch((error) => {
    console.log(error);
    });
  }
    const navar=<>
    <Link to='/'><li ><a>Home</a></li></Link>
   <Link to='/Instructors'  > <li ><a>Instructors</a></li></Link>
   <Link to='/enrollcart'  > <li ><a>Enrolled</a></li></Link>
   
   
   {user?.email?<>
    <Link   > <button onClick={handellogout}><li ><a>LogOut</a></li></button></Link>
  
   </>:<>
   <Link to='/login'  > <li ><a>Login</a></li></Link>
   </>}
  
  
   
           
    </>
    return (
      <div>
        <div className="navbar bg-black ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  bg-white rounded-box w-52">
              {navar}
            </ul>
          </div>
          <img className="btn btn-ghost text-xl text-white" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">
            {navar}
          </ul>
        </div>
        <div className="navbar-end">
         <Link to='/singup'> <a className="btn">SingUp</a></Link>
        </div>
       
      </div>
      

      </div>
    );
};

export default Navbar;