import db from "@/utils/db"
import User from "@/models/User"


const handler = async (req, res) => {
  
  await db.connect()

  const email = req.body.email
  console.log(email)

  const user = await User.findOne({ email })

  res.status(200).send(user)

}

export default handler