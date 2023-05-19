

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'


const Profile = () => {

const { user } = useSelector((state) => state.userAuth)
//console.log(user)


const [name, setName] = useState(user?.user?.name)
const [email, setEmail] = useState(user?.user?.email)
const [born, setBorn] = useState(user?.user?.createdAt)
const [editForm, setEditForm] = useState(false)

/* 
const getData = async () => {
  
  try {
    const res = await axios.get('/api/user/profileGet', {email})
    console.log(res.data)
  } catch (error) {
    console.log(error)
  }
} */

/* 
const handleEdit = () => {
  setEditForm(!editForm)
  
  if(editForm === false) {
    setName(user?.user?.name)
  }
}

const handleSubmit = async (e) => {
  e.preventDefault()

  try {
    const res = await axios.put('/api/user/profileEdit', {name, email})
    console.log(res.data?.name)
    getData()
  } catch (error) {
    console.log(error)
  }
} */

  return (
    <>
      <h3 className='text-center mt-5 pt-5'>Profile</h3>

      <form >

         <p >Name: {name}</p>
         <p >Email: {email}</p> 
         <p >Created: {born}</p> 
      </form>
{/* 
      <button
         onClick={handleEdit}
         id='editBtn'
         className='btn btn-primary vstack mx-auto rounded-1 mt-3'>
        {editForm ? 'Close' : 'Edit'}
      </button>

     {
      editForm && (
         <form className='mt-5 border p-2' onSubmit={handleSubmit}>
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
     } */}


      <style>{`
       
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