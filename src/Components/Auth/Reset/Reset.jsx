import React,{useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Reset.css'
import {auth} from '../Firebase/config'
import Loader from '../../Jobs/Loader'
import { sendPasswordResetEmail } from 'firebase/auth';


function Reset() {
  const [email, setEmail] = useState("")
  const resetPassword =(e)=>{
    e.preventDefault();
    sendPasswordResetEmail(auth,email)
    .then(()=>{
      toast.success("Email ünvanınıza yeni şifrə göndərildi.")
    }).catch(()=>{
      toast.error("Bu email ünvanı ilə qeydiyyatdan keçilməyib.")
    });
  }
  return (
    <section className=' container text-center'>
    <div className='form'>
        <h2>Şifrəni Yenilə</h2>
        <form onSubmit={resetPassword}>
            <div>
            <input type='text' className='m-2' placeholder='Emaili daxil edin.' required
              value={email} onChange={(e)=>setEmail(e.target.value)} />

            </div>
            <button type='submit' className='btn btn-primary'>Şifrəni Yenilə</button>
            <ToastContainer/>
        </form>
        <p>
            <Link to='/login'>Daxil Olun</Link>
            <Link to='/register'>Qeydiyyatdan Keçin</Link>

        </p>



    </div>
</section>
  )
}

export default Reset