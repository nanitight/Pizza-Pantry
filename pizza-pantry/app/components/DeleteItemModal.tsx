import React, { useEffect } from 'react'
import {  DeleteItemProps, DeleteModalProps, ItemModalProps } from '../interfaces/defaults'
import DeleteForm from './DeleteForm';
import { deleteItem } from '../lib/db';



const DeleteItemModal : React.FC<DeleteModalProps>= ({id,item,user,modalId,onReset,resetError}) => {
  // const simp_user = await useClerkSimpleUser() ;

 
  if (item == null || id == null){
      console.log("clicked while currItem from parent is null") ;
      return (<></>);
  }
  console.log(" mounted modal",item,id) ;
  return (
    <>
    <input type="checkbox" id={modalId} className="modal-toggle" />
    <div className="modal" role="dialog">
    <div className="modal-box">
        <h3 className="text-lg font-bold">Are you sure you want to delete {item.name}?</h3>
        <div className="modal-action">
          <label htmlFor={modalId} className="btn btn-error">Close!</label>
        </div>
        <DeleteForm onReset={onReset} resetError  user={user} id={item._id} item={item} deleteItem={deleteItem}/>
    </div>
    
    </div>
    </>
  )
}

export default DeleteItemModal