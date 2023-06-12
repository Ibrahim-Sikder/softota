


import client from './db_config'

const db = client.db('ghurunti')
const blog = async (req, res) =>{
     const userCollection = db.collection('tourist')
     if(req.method == "GET"){
          res.send({name: 'Ibrahim Sikder'})
     }
     else if(req.method == "POST"){
          console.log(req.body)
          const post = req.body;
          const result = await userCollection.insertOne(post)
          res.status(201).send(result)
     }
}

export default blog