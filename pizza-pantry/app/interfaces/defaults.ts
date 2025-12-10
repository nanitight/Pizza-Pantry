import { AddItemResults, EditItemResults } from './api';
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



export interface BaseItemFromDB extends DBObject,BaseItem{
}

export interface ItemFromDB extends Item,DBObject{}

export interface ClerkUser {
    firstName: string ;
    email : string  ;
}

export interface RecordedOperation{
    user : ClerkUser
}

export interface DashboardViewProps extends RecordedOperation {
    items : ItemFromDB[]
}

export interface AddingOperation extends RecordedOperation{
    addToDb : (data: Item) => Promise< AddItemResults>,
}

interface ItemRecordedOperation extends RecordedOperation{
    item: ItemFromDB;
}
export interface ItemModalProps extends ItemRecordedOperation{
    id:string ;
    modalId:string ;
}

export interface FailureFeedbackResponse{
    resetError: boolean ;
    onReset : ()=>void
}

export interface OperateOnItemObjID{
    id : ObjectId ;
}

export interface ModalOpenedComp{
    closeModalButton: HTMLLabelElement | null
}

export interface EditingOperation extends ItemRecordedOperation,OperateOnItemObjID,ModalOpenedComp,FailureFeedbackResponse{
    saveEditToDb? : (id:ObjectId,data: Item) => Promise< EditItemResults>;
}

export interface DeletingItemOperation extends ItemRecordedOperation,FailureFeedbackResponse,ModalOpenedComp{
    deleteItem? : (item: ItemFromDB) => Promise< AddItemResults>,
    id: ObjectId;
}

