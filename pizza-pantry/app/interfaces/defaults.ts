import type{ EmailAddress, User } from '@clerk/nextjs/server';
import { AddItemResults } from './api';
import { ObjectId } from 'mongodb';

export interface Item extends BaseItem{
    updatedAt : Date ;
    createdAt : Date ;
    createdBy : ClerkUser
}


interface DBObject {
    _id: ObjectId;
}
export interface BaseItem {
    name:string ;
    category:string;
    unit : string ;
    quantity: number ;
    reorderThreshold: number ;
    costPrice : number ;   
}



interface BaseItemFromDB extends DBObject,BaseItem{
}

export interface ItemFromDB extends Item,DBObject{}

export interface ClerkUser {
    firstName: string ;
    email : string  ;
}

export interface AddingOperation{
    addToDb : (data: Item) => Promise< AddItemResults>,
    onSuccess? : ()=>void
    user : ClerkUser
}
