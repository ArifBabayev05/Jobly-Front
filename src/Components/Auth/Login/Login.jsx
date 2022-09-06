import React, { useState } from 'react'
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase/config'
import Loader from '../../Jobs/Loader'


function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();
    const loginUser = (e) => {
        e.preventDefault();
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                setLoading(false);
                toast.success("Uğurla Tamamlandı!");

                navigate("/")

            })
            .catch((error) => {
                setLoading(false);
                toast.error(error.message);
            });
    }

    return (
        <section className='container text-center'>
            <div className='form'>
                <h2>Login</h2>
                <form onSubmit={loginUser}>
                    <div>
                        <input type='text' className='m-2' placeholder='Emaili daxil edin.'
                            required value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type='text' className='m-2' placeholder='Şifrəni daxil edin.'
                            required value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    {loading && <Loader/>}
                    <button className='btn btn-primary'>Daxil Olun</button>
                    <div className='links'>
                        <Link to='/reset'>
                            Şifrəni Yenilə
                        </Link>
                    </div>
                    <p>-- və ya --</p>
                </form>
                <ToastContainer />
                <button type='submit' className='btn btn-danger'> Google ilə Daxil Olun</button>
                <p>
                    Hesabınız Yoxdur?
                    <Link to='/register'>Qeydiyyatdan Keçin</Link>
                </p>
            </div>
        </section>
    )
}

export default Login