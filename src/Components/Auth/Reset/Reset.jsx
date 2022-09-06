import React from 'react'
import './Reset.css'
import { Link } from "react-router-dom";


function Reset() {
  return (
    <section className=' container text-center'>
    <div className='form'>
        <h2>Şifrəni Yenilə</h2>
        <form>
            <div>
            <input type='text' className='m-2' placeholder='Emaili daxil edin.' required />

            </div>
            <button className='btn btn-primary'>Şifrəni Yenilə</button>
            
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