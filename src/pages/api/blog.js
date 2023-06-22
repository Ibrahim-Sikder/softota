


import client from './db_config'

const db = client.db('ghurunti')
const blog = async (req, res) =>{

     const agentCollection = db.collection('agen')
     if(req.method == "GET"){
          res.send({name: 'Ibrahim Sikder'})
     }
    
     else if(req.method == "POST"){
          const post = req.body;
          const result = await agentCollection.insertOne(post)
          res.status(201).send(result)
     }
}

export default blog