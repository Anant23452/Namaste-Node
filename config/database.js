const { MongoClient } = require("mongodb");

// Replace with your actual credentials and cluster name
const URI = "mongodb+srv://imagine231216_db_user:8ShbD0zYCBNUBQDU@cluster0.ktd7iqz.mongodb.net/";
const client = new MongoClient(URI);

const dbName = "test";

const connectDb= async ()=> {
    try {
        // 1. Connect to MongoDB Atlas
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection("users");

        // 2. Insert a document
        const insertResult = await collection.insertOne({ name: "John", age: 30 });
        console.log("Insert result:", insertResult);

        // 3. Find the inserted document by name
        const findResult = await collection.findOne({ name: "John" });
        console.log("Found document:", findResult);

        // 4. Update the document
        const updateResult = await collection.updateOne(
            { name: "John" },
            { $set: { age: 31 } }
        );
        console.log("Update result:", updateResult);

        // 5. Find the updated document
        const updatedDoc = await collection.findOne({ name: "John" });
        console.log("Updated document:", updatedDoc);

        // 6. Delete the document
        const deleteResult = await collection.deleteOne({ name: "John" });
        console.log("Delete result:", deleteResult);

        // 7. Verify deletion
        const deletedDoc = await collection.findOne({ name: "John" });
        console.log("Document after deletion:", deletedDoc); // Should be null

    } catch (error) {
        console.error("Error:", error);
    } finally {
        // 8. Close the connection
        await client.close();
        console.log("Connection closed.");
    }
}
module.exports = connectDb;


