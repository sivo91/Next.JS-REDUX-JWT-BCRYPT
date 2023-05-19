
import db from "@/utils/db"
import User from "@/models/User"


const handler = async (req, res) => {
  
  await db.connect()
  
  const newName = req.body.name
  const email = req.body.email

  const user = await User.findOne({ email })

  user.name = newName

  res.status(200).send(user)

}

export default handler