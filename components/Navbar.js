import React, { useEffect } from 'react'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router';
import { userLogOut } from '@/reduxFile/userSlice';
import { toast } from 'react-toastify';


const Navbar = () => {

const { user } = useSelector((state) => state.userAuth)

//console.log(user)


const router = useRouter()
const dispatch = useDispatch()

const handleLogOut = () => {

 if (typeof window !== "undefined") {
    window.localStorage.removeItem('auth')
  }

 dispatch(userLogOut(null))

 toast.success('Sign Out!')
  
 router.push('/')
}


  return (
    <>
     <nav>
      <h3 className='link'>NextJS</h3>
  
       <div className="btn-group">

         {
          user !== null &&  (
              <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                {/* <FiUser className='userIcon'/> */} User &nbsp;
              </button>
          )  
         }

         {
          user === null && (
            <Link href={'/login'}>
              <button type="button" className="btn btn-secondary login"
                 style={{textDecoration: 'none'}} >
                  Log In
              </button>
            </Link>
          )
         }
        
           {
             user !== null && ( 
                <>
                   <ul className="dropdown-menu ps-2">
                    <li>
                      <Link href={'/'}
                            className='my-2'
                            style={{textDecoration: 'none', color: 'black'}}>
                        Home
                      </Link>  
                    </li>

                    <li>
                      <Link href={'/profile'}
                            className='my-2'
                            style={{textDecoration: 'none', color: 'black'}}>
                        User Profile
                      </Link>  
                    </li>
                    
                    
                    <li>
                      <Link href={'/'}
                            className='my-2'
                            onClick={ () => handleLogOut()}
                            style={{textDecoration: 'none', color: 'black'}}>
                        Sign Out
                      </Link>  
                    
                    </li>
                  </ul>
                </>
              ) 
           }

        </div>

        
     </nav>

     <style>{`

     .login {
      position: relative;
      top: 7px;
      border-radius: 3px;
     }

     .userIcon {
      position: relative;
      top: -2px;
     }

     
     nav {
        position: fixed;
        width: 98%;
        left: 1%;
        top: 6px;
        height: 55px;
        background: #0b1142;
        border: 1px solid white;
        border-radius: 6px;
        z-index: 500;
        display: flex;
        justify-content: space-around;
        box-shadow: 1px 1px 11px gray;
       }

      
       .link {
        text-decoration: none;
        color: white;
        position: relative;
        padding-top: 9px;
        margin-left: 15px;
       }
       .link:hover {
        transition: all .4s;
        color: #ababab;
       }
       .active-link {
        color: white;
       }
      
     `}</style>
    </>
  )
}

export default Navbar