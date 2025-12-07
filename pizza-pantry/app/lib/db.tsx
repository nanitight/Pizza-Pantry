"use server"
import { Collection, MongoClient, ServerApiVersion } from "mongodb";
import { AddItemResults, BaseItem, ItemDBRecord } from "../interfaces/defaults";

const uri = process.env.DB_URI ;  

if (!uri){
    throw new Error("Mongo URI not found")
}
console.log("URI: ",uri)
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function getDB(dbName:string) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    console.log("Connected DB");
    return client.db(dbName);
  } catch(err) {
    console.log("Error: ",err);
  }
  // finally{
  //   client.close();
  // }
}

async function getCollection(collectionName:string) {
    try{
        const db = await getDB('pizza-pantry') ;
        if (db)
          return db.collection<ItemDBRecord>(collectionName) ;
    }
    catch(err) 
    {console.log(err) ;}
    return null
}

export async function saveItem(item: BaseItem){

}

export const submit = async (data: ItemDBRecord) : Promise<AddItemResults>  =>{
  var res : AddItemResults = {
      success : "" ,
      err : "" 
  }

  const collection = await getCollection("items") ;
  if ( collection == null ){
    res.err = "Server error!" ;
    return res; 
  }

  try{
    const adding = await collection.insertOne(data)
    res.success = adding.insertedId
        return res ;
  }
  catch(err){
    console.log("some ",err)
    res.err = "something wrong" ;
    return res ;
  }
}