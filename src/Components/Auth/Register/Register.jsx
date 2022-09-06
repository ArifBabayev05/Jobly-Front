import React,{useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css'
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../Firebase/config'
import Loader from '../../Jobs/Loader'


function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cPassword, setCPassword] = useState("")
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
 const registerUser = (e) => { 
  e.preventDefault();
  if(password !==cPassword){
    toast.error("Şifrədə yanlışlıq var!")
  }
  setLoading(true);
  // else{
  //   toast.success("Qeydiyyat Uğurludur!")
  // }

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    toast.success("Qeydiyyat Uğurludur!")
    const user = userCredential.user;
    setLoading(false);
    console.log(user);
    navigate('/login')
    
  })
  .catch((error) => {
    toast.error(error.message)
    setLoading(false);
  });
  }

  return (
    <section className='container text-center'>
            <div className='form'>
                <h2>Qeydiyyat</h2>
                <form onSubmit={registerUser}>
                    <div>
                    <input type='text' className='m-2' placeholder='Emaili daxil edin.' 
                     required value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <input type='password' className='m-2' placeholder='Şifrəni daxil edin.' required value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <input type='password' className='m-2' placeholder='Şifrəni yenidən daxil edin.' required value={cPassword} onChange={(e)=>setCPassword(e.target.value)} />

                    </div>
                    {loading && <Loader/>}
                    <button type='submit' className='btn btn-primary'>Qeydiyaytdan Keçin</button>
                    <ToastContainer />

                </form>
                <p>
                    Hesabınız Var? 
                    <Link to='/login'>Daxil Olun</Link>
                </p>



            </div>
        </section>
  )
}

export default Register