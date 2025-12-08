import React, { useEffect } from 'react'
import { ClerkUser, EditingOperation, Item, ItemFromDB } from '../interfaces/defaults'
import { id } from 'zod/locales';
import { defaultModalId } from '../data/defaults';
import EditItemForm from './EditItemForm';
import { useClerkSimpleUser } from '../re-use/useClerkUser';

interface EditItemModalProps extends EditingOperation{
    id:string ;
    item: ItemFromDB;
}

const EditItemModal : React.FC<EditItemModalProps>= ({id,item,user}) => {

   
    if (item == null || id == null){
        console.log("clicked while currItem from parent is null") ;
        return (<></>);
    }
        console.log(" mounted modal",item,id) ;
  return (
    <>
    <input type="checkbox" id={id} className="modal-toggle" />
    <div className="modal" role="dialog">
    <div className="modal-box">
        <h3 className="text-lg font-bold">Hello!</h3>
        <p className="py-4">This modal works with a hidden checkbox!</p>
        <EditItemForm  user={user} />
    </div>
    <label className="modal-backdrop" htmlFor={id}>Close</label>
    </div>
    </>
  )
}

export default EditItemModal