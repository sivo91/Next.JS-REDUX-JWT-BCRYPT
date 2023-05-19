
import db from "@/utils/db";
import User from "@/models/User";
import {hash} from 'bcrypt'


const handler = async (req, res) => {

  if (req.method !== 'POST') {
    return 
  }

  const name = req.body.name
  const email = req.body.email
  const password = req.body.password

 console.log(name, email, password)

 await db.connect();
 
 const hashedPassword = await hash(password, 12)

  const newUser = new User({
    name,
    email,
    password : hashedPassword
  });

  const user = await newUser.save();

  await db.disconnect();

  res.status(201).send({
    message: 'Created user!',
    _id: user._id,
    name: user.name,
    email: user.email,
  });

  
} 

export default handler