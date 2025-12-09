import React from 'react'
import { ClerkUser, ItemModalProps } from '../interfaces/defaults'
import EditItemForm from './EditItemForm';



const EditItemModal : React.FC<ItemModalProps>= ({id,item,user,modalId}) => {
  // const simp_user = await useClerkSimpleUser() ;

   
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
        <EditItemForm  user={user} item={item} />
    </div>
    <label className="modal-backdrop" htmlFor={modalId}>Close</label>
    </div>
    </>
  )
}

export default EditItemModal