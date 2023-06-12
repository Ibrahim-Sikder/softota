
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ghurunti:qQIsDDxIyBADOmG9@cluster0.fomplst.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
dbConnect()

async function dbConnect() {
  try {
    
    await client.connect();
     console.log('Database connected successfully')
    
  } finally {
    
  }
}
export default client;
