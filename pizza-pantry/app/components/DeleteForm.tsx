"use client" ;
import React, { useEffect, useState } from 'react'
import { BaseItem, BaseItemFromDB, DeleteItemProps, DeletingItemOperation, ItemFromDB} from '../interfaces/defaults'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation';
import { AddItemResults, GetItemResults } from '../interfaces/api';
import { ObjectId } from 'mongodb';



const DeleteItemForm  :React.FC<DeletingItemOperation> = ({
    deleteItem,id,item,onReset,resetError
}) => {
    const [loading,setLoading] = useState(false)
    const [reqError, setError] = useState("")
    const {handleSubmit} = useForm<DeleteItemProps>({
        defaultValues : id,
    })

    const router = useRouter() ;
    
    const deleteItemFunc =async (id:ItemFromDB)=>{
        
        console.log('delete og',id) ;
        if (!deleteItem)
            return
        setLoading(true) ;
        const res : AddItemResults = await deleteItem(id) ;
        console.log("res: ",res, id)
        setLoading(false) ;
        if (res.success && res.err.length > 0)
            router.push("/dashboard");
        else
            setError(res.err)
    }

 useEffect(()=>{
    if (resetError)
      console.log("reset the error")
  },[resetError,onReset])

   
    if (!id)
        return <>
        <h1 className="text-lg text-error-content"> Cannot delete object of {id} ID</h1>
        </>

  return (
    <div>
        <h1> Add Items </h1>
        <>{
            loading ? <><span className="loading loading-ring loading-xl"></span></> 
            :
        <form onSubmit={handleSubmit(async(d)=>{await deleteItemFunc(item);})} >
            {/* className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"> */}
          
            {/* Actions */}
            <button className="btn btn-neutral mt-4" type="submit">Submit</button>
            <h1 className='text-6xl text-error'>{reqError}</h1>
        </form>
        }</>
    </div>
  )
}

export default DeleteItemForm ;