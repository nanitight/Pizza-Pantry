import React, { useRef } from 'react'
import { ClerkUser, ItemModalProps } from '../interfaces/defaults'
import EditItemForm from './EditItemForm';
import { editItem } from '../lib/db';
import { useModalState } from './ModalState';



const EditItemModal : React.FC<ItemModalProps>= ({id,item,user,modalId}) => {
  const {closeBtnRef,setResetError,resetError,onResetError} = useModalState() ;
   
  if (item == null || id == null){
      console.log("clicked while currItem from parent is null") ;
      return (<></>);
  }
  console.log(" mounted modal",item,modalId) ;
  return (
    <>
    <input type="checkbox" id={modalId} className="modal-toggle" />
    <div className="modal" role="dialog">
    <div className="modal-box">
        <h3 className="text-lg font-bold">Edit Item {item.name}!</h3>
        <EditItemForm resetError={resetError} onReset={onResetError} id={item._id} user={user} item={item} closeModalButton={closeBtnRef.current} saveEditToDb={editItem}/>
    </div>
    <label ref={closeBtnRef}  onClick={()=>setResetError(true)} className="modal-backdrop" htmlFor={modalId}>Close</label>
    </div>
    </>
  )
}

export default EditItemModal