import React from 'react'
import '../../Assets/Styles/Layout/Header.css'
import logo from '../../Assets/Images/Logo/1.png'
import { getAuth, signOut } from "firebase/auth";
import {auth} from '../../Components/Auth/Firebase/config'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link, NavLink, useNavigate } from "react-router-dom";
function Index() {


  const navigate = useNavigate();
  const logoutUser = () => {
    signOut(auth).then(() => {
      toast.success("Hesabdan çıxış uğurla tamamlandı!");
      navigate('/')
      console.log("sa");
    }).catch((error) => {
      toast.error(error.message)
    });
  }

  return (
    <div className=''>
      <nav className="navbar navbar-light ">
        <div className="container container-fluid">
          <a href='/#'>
            <img src={logo} alt='' />
          </a>

          <form className="d-flex">
            <div className='d-flex search mx-4'>

              <i className="fa-solid mt-1 me-2 fa-magnifying-glass"></i>
              <a href='/job' className='fw-600'>İş Axtarın</a>
            </div>

            <div>
              <Link to='/login'>Daxil Olun</Link>
              <NavLink className='ms-1' onClick={logoutUser} to='/'>Çıxış</NavLink>
              <ToastContainer/>

            </div>
          </form>
        </div>
      </nav>

    </div>
  );
}

export default Index


