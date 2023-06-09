/* eslint-disable @next/next/no-img-element */


import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios'
import { toast } from 'react-toastify'
import { userImage } from '@/reduxFile/userSlice';


const Profile = () => {

const { user, userImg } = useSelector((state) => state.userAuth)
//console.log(user)
const dispatch = useDispatch()


const [editForm, setEditForm] = useState(false)
const [name, setName] = useState(user?.user?.name)
const [email, setEmail] = useState(user?.user?.email)

const [born, setBorn] = useState(user?.user?.createdAt || '')

//console.log(born) // 2023-05-21T04:55:14.482Z
const created = born.substring(0,10)
//console.log(created)

const yr = created.slice(0,4)  
//console.log(yr) // 2023

const d = created.slice(8,10)
//console.log(d) // 21

const m = created.slice(5,7)
//console.log(m) //05

const resDate = m + '-' + d + '-' + yr
//console.log(resDate) 
 




const handleEdit = () => {
  setEditForm(!editForm)
  
  if(editForm === false) {
    setName(user?.user?.name)
  }
}

const handleEditImage = async (imgID) => {

  try {
      await axios.put('/api/user/profileEdit' , {email, imgID})
  } catch (error) {
    console.log(error)
    toast.error('Something wrong! Please try it later.')
  }


}


  return (
    <>
      <h3 className='text-center mt-5 pt-5'>Profile</h3>

      <form >
          <p>Image Profile: </p> 
          <img src={userImg} className='imgMush' alt="img" />
          {
            editForm && (
              <>
                <p className='fw-semibold text-danger'>Select Profile Image:</p>
                <div className="my-2">
                  <img src={'/mush.jpg'}
                       className='setPImg1' 
                       onClick={() => [ handleEditImage('/mush.jpg'),
                                        dispatch(userImage('/mush.jpg'))] }
                       alt="img" />

                  <img src={'/mickey.png'} 
                       onClick={() => [handleEditImage('/mickey.png'),
                                       dispatch(userImage('/mickey.png'))]} 
                       className='setPImg2 mx-3' 
                       alt="img" />

                  <img src={'/dog.jpg'} 
                       onClick={() => [handleEditImage('/dog.jpg'),
                                       dispatch(userImage('/dog.jpg'))]} 
                       className='setPImg3' 
                       alt="img" />
                </div>
              </>
            )
          }
         <p >Name: {name}</p>
         <p >Email: {email}</p> 
         <p >Created: {resDate}</p> 
      </form>
 
      <button
         onClick={handleEdit}
         id='editBtn'
         className='btn btn-primary vstack mx-auto rounded-1 mt-3'>
        {editForm ? 'Close' : 'Edit'}
      </button>

     {/* {
      editForm && (
         <form className='mt-5' onSubmit={handleSubmit}>
              <h3 className='text-center'>Edit Name</h3>
              <input type="text"
                    value={name}
                    className='ps-2 py-1 w-100'
                    onChange={e => setName(e.target.value)} />

              <br />       

              <button className='btn btn-primary rounded-1 w-100 mt-2'
                      type='submit'>
                Change  
              </button>       
            </form>
      )
     }  */}


      <style>{`
     
      .setPImg1  {
        position: relative;
        width: 40px;
        cursor: pointer;
      }
      .setPImg2  {
        position: relative;
        width: 40px;
        cursor: pointer;
      }
      .setPImg3  {
        position: relative;
        width: 60px;
        cursor: pointer;
      }

      .imgMush {
        position: relative;
        width: 100px;
      }
       
       form {
        position:relative;
        width: 375px;
        margin: 0 auto;
       }
       
       .noBorder {
        border: 1px solid white;
        pointer-events:none;
       }



      `}</style>

    </>
  )
}

export default Profile