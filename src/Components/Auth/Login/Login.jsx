import React, { useState } from 'react'
import './Login.css'
import { Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <section className='container text-center'>
            <div className='form'>
                <h2>Login</h2>
                <form onSubmit>
                    <div>
                        <input type='text' className='m-2' placeholder='Emaili daxil edin.'
                          required value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type='text' className='m-2' placeholder='Şifrəni daxil edin.'
                          required value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className='btn btn-primary'>Daxil Olun</button>
                    <div className='links'>
                        <Link to='/reset'>
                            Şifrəni Yenilə
                        </Link>
                    </div>
                    <p>-- və ya --</p>
                </form>
                <button className='btn btn-danger'> Google ilə Daxil Olun</button>
                <p>
                    Hesabınız Yoxdur?
                    <Link to='/register'>Qeydiyyatdan Keçin</Link>
                </p>
            </div>
        </section>
    )
}

export default Login