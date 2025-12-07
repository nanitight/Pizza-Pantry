import type{ EmailAddress, User } from '@clerk/nextjs/server';
export interface ItemToDBRecord extends BaseItem{
    updatedAt : Date ;
    createdAt : Date ;
    createdBy : ClerkUser
}
interface DBObject {
    _id: string ;
}
export interface BaseItem {
    name:string ;
    category:string;
    unit : string ;
    quantity: number ;
    reorderThreshold: number ;
    costPrice : number ;
    
}

interface BaseItemFromDB extends DBObject{
}

export interface ClerkUser {
    firstName: string ;
    email : string  ;
}

export interface AddingOperation{
    addToDb : (data: ItemToDBRecord) => Promise< AddItemResults>,
    onSuccess? : ()=>void
    user : ClerkUser
}

export interface AddItemResults{
    err: string ;
    success: string ;
}