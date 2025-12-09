import React from 'react'
import { ClerkUser, EditItemModalProps } from '../interfaces/defaults'
import EditItemForm from './EditItemForm';



const EditItemModal : React.FC<EditItemModalProps>= ({id,item,user}) => {
  // const simp_user = await useClerkSimpleUser() ;

   
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
        <EditItemForm  user={user} item={item} />
    </div>
    <label className="modal-backdrop" htmlFor={id}>Close</label>
    </div>
    </>
  )
}

export default EditItemModal