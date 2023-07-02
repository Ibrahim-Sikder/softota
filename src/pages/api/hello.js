// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }





import client from './db_config'

const db = client.db('ghurunti')
const blog = async (req, res) =>{

     const userCollection = db.collection('users')
     if(req.method == "GET"){
          res.send({name: 'Ibrahim Sikder'})
     }
     else if(req.method == "POST"){
          const post = req.body;
          const result = await userCollection.insertOne(post)
          res.status(201).send(result)
     }
}

export default blog