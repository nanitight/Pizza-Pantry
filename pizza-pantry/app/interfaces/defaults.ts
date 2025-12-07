import type{ EmailAddress, User } from '@clerk/nextjs/server';
export interface ItemDBRecord extends BaseItem{
    updatedAt : Date ;
    createdAt : Date ;
    createdBy : ClerkUser
}

export interface BaseItem{
    _id: string ;
    name:string ;
    category:string;
    unit : string ;
    quantity: number ;
    reorderThreshold: number ;
    costPrice : number ;
    
}

export interface ClerkUser {
    firstName: string ;
    email : string  ;
}

export interface AddingOperation{
    addToDb : (data: ItemDBRecord) => Promise< AddItemResults>,
    onSuccess? : ()=>void
    user : ClerkUser
}

export interface AddItemResults{
    err: string ;
    success: string ;
}