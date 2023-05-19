import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { toast } from 'react-toastify'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { userInside } from '@/reduxFile/userSlice';



const Login = () => {

   const dispatch = useDispatch()
   
   const [email, setEmail ] = useState('')
   const [password, setPassword ] = useState('')
   const router = useRouter()

  const data = { email, password }

  const handleSubmit = async (e) => {
    e.preventDefault()
 
   const config = {
        headers: {
          "Content-Type": "application/json",
        }
      }
  
  try {
    const res = await axios.post('/api/user/login', data, config)
    console.log(res.data)

    // treba overit ci to ide :)
    dispatch(userInside(res.data))
    if (typeof window !== "undefined") {
    window.localStorage.setItem('auth', JSON.stringify(res.data))
    }

    toast.success(res.data.message)
    router.push('/')

    setEmail('')
    setPassword('')
    
  } catch (error) {
    console.log(error)
    toast.error(error.message)
  }

}



  return (
    <>
      <div className="formBox">

        <form  onSubmit={handleSubmit}>

            <h3 className='text-center mb-3'>Log In</h3>

              <input type="email" 
                     placeholder='Email'
                     className='w-100  px-2 py-1'
                     value={email}
                     onChange={e => setEmail(e.target.value)}/>

              
                <input type="password"
                     placeholder='Password'
                     value={password}
                     onChange={e => setPassword(e.target.value)}
                     className='w-100 mt-2 px-2 py-1' /> 

             
              <button className='btn btn-primary w-100 rounded-1 mt-3'
                      disabled={email === '' || password === ''}
                      type='submit'>
                Log In
              </button>


              <p className='text-center mt-2'>Don&apos;t have account? 
                 <Link href='/register' 
                       className='ms-2'
                       style={{textDecoration: 'none'}}>
                    Sign Up
                 </Link> 
              </p>
              

                  

              {/* <Link href={'/forgotPassword'} 
                    style={{textDecoration: 'none'}}>
               Forgot password?
              </Link> */}
            
       </form>
      </div>
    
    <style>{`

      .btnview {
        position: relative;
        width: 40px;
        height: 36px;
        background: white;
        border: .5px solid gray;
        top: 7.5px;
      }
      
      .formBox {
        position: relative;
        width: 100%;
      }
 
     
      .textOr {
        position: relative;
        top:-40px!important;
        padding: 10px;
        width: 36px;
        background-color: white;
        margin: 0 auto;
      }
      
      form {
        position:relative;
        width: 375px;
        margin: 0 auto;
        top: 200px;
   
      }

      .user-icon {
        font-size: 40px;
        background-color: #e3e3e3;
        border-radius: 50%;
        padding:15px;
        color:#303030;
      }
    `}</style>

     
    </>
  )
}  

 export default Login 