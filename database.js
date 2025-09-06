
// Eg6Wh3nSUUgWWFIH
const {MongoClient}= require("mongodb");
const URI="mongodb+srv://imagine231216_db_user:8ShbD0zYCBNUBQDU@cluster0.ktd7iqz.mongodb.net/";
const client  = new MongoClient(URI);

const dbName ="test";
async function main(){
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("users");
    const result = await collection.insertOne({name:"John",age:30});
    console.log(result);
}
main()
.then(console.log)
.catch(console.error)
.finally(()=>client.close());


//go to mongodb website
//create a clusture
//create a mo database
//create a collection users
//create a document
//insert a document
//query a document
//update a document
//delete a document
//close the connection
//print the result

