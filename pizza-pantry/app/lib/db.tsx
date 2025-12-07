"use server"
import { Collection, MongoClient, ServerApiVersion } from "mongodb";
import { AddItemResults, BaseItem } from "../interfaces/defaults";

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
  finally{
    client.close();
  }
}

async function getCollection(collectionName:string) : Promise<Collection<Document> | null>  {
    try{
        const db = await getDB('pizza-pantry') ;
        if (db)
            return db.collection(collectionName) ;
    }
    catch(err) 
    {console.log(err) ;}
    return null
}

export async function saveItem(item: BaseItem){

}

export const submit = async (data: BaseItem) : Promise<AddItemResults>  =>{
        var res : AddItemResults = {
            success : "" ,
            err : "" 
        }
            return res ;
    }

export default getCollection ;