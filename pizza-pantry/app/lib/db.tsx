"use server"
import {  MongoClient, ObjectId, ServerApiVersion } from "mongodb";
import {  ItemFromDB, Item } from "../interfaces/defaults";
import { AddItemResults, GetItemResults } from "../interfaces/api";

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

const dbName = "pizza-pantry" ;
const collName = "items" ;

async function getCollection(collectionName:string) {
    try{
        const db = await getDB(dbName) ;
        if (db)
          return db.collection<Item>(collectionName) ;

    }
    catch(err) 
    {console.log(err) ;}
    return null
}


export const submit = async (data: Item) : Promise<AddItemResults>  =>{
  const res : AddItemResults = {
      success : "" ,
      err : "" 
  }

  const collection = await getCollection(collName) ;
  if ( collection == null ){
    res.err = "Server error!" ;
    return res; 
  }

  try{
    const adding = await collection.insertOne(data)
    res.success = adding.insertedId.toString() ;
        return res ;
  }
  catch(err){
    console.log("some ",err)
    res.err = "something wrong" ;
    return res ;
  }
}

export const getItems = async () : Promise<GetItemResults> =>  {
  const res : GetItemResults = {
      success : [] ,
      err : "" 
  }
  const db = await getDB(dbName) ;
        if (!db){
          return res ;
        }
        else{
          const collection = db.collection<ItemFromDB>(collName) ;
        
        if ( collection == null ){
          res.err = "Server error!" ;
          return res; 
        }

        try{
          const find = await collection.find({

          })
          .toArray() ;
          res.success = JSON.parse(JSON.stringify(find)) ;
              return res ;
  }
  catch(err){
    console.log("some ",err)
    res.err = "something wrong" ;
    return res ;
  }
}
}

export const deleteItem = async (item:ItemFromDB) : Promise<AddItemResults> =>  {
  const res : AddItemResults = {
      success : "" ,
      err : "" 
  }
  const db = await getDB(dbName) ;
  if (!db){
    return res ;
  }
  else{
    const collection = db.collection<ItemFromDB>(collName) ;
  
  if ( collection == null ){
    res.err = "Server error!" ;
    return res; 
  }

  try{

    const filter : Partial<ItemFromDB> = {
      _id : item._id
    }
    
    
    if (item._id && typeof item._id === 'string') {
      filter._id = new ObjectId(item._id);
    }
    const deleted = await collection.deleteOne(filter) ;
    if (deleted.deletedCount)
    {
      res.success =deleted.deletedCount+" deleted items" ;
        return res ;
    }  
    else{
    res.err = "some error when deleting. "+deleted.deletedCount+" deleted items" ;
    return res
    }
  }
  catch(err){
    console.log("some ",err)
    res.err = "something wrong" ;
    return res ;
  }
}
}