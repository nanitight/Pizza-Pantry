import React, { useRef, useState } from 'react'
import {  ItemModalProps } from '../interfaces/defaults'
import DeleteForm from './DeleteForm';
import { deleteItem } from '../lib/db';



const DeleteItemModal : React.FC<ItemModalProps>= ({id,item,user,modalId}) => {
  // const simp_user = await useClerkSimpleUser() ;

    const [resetError,setResetError] = useState(false);  
    const closeBtnRef = useRef<HTMLLabelElement>(null) ;
    const onResetError = () => setResetError(false) ;
 
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
          <label ref={closeBtnRef} onClick={()=>setResetError(true)} htmlFor={modalId} className="btn btn-neutral">Close!</label>
        </div>
        <DeleteForm onReset={onResetError} resetError  user={user} id={item._id} item={item} deleteItem={deleteItem} closeModalButton={closeBtnRef.current}/>
    </div>
    
    </div>
    </>
  )
}

export default DeleteItemModal