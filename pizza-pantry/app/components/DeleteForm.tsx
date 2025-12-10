"use client" ;
import React, { useEffect, useState ,Ref,forwardRef} from 'react'
import { DeleteItemProps, DeletingItemOperation, ItemFromDB} from '../interfaces/defaults'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation';
import { AddItemResults } from '../interfaces/api';




const DeleteItemForm  :React.FC<DeletingItemOperation> = ({
    deleteItem,id,item,onReset,resetError,closeModalButton
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
        try{
            const res : AddItemResults = await deleteItem(id) ;
            console.log("res: ",res, id,closeModalButton)
            setLoading(false) ;
            if (res.success && res.err.length <= 0){
                router.refresh();
                if (closeModalButton)
                    closeModalButton.click() ;
            }
            else
                setError(res.err)
        }
        catch(err){
            console.log("eroor:",err) ;
            setError("An error occured")
        }
    }

 useEffect(()=>{
    if (resetError){
        console.log("reset the error")
        setError("")
    }
  },[resetError,onReset])

   
    if (!id)
        return <>
        <h1 className="text-lg text-error-content"> Cannot delete object of {id} ID</h1>
        </>

  return (
    <div>
        {/* <h1> Add Items </h1> */}
        <>{
            loading ? <><span className="loading loading-ring loading-xl"></span></> 
            :
        <form onSubmit={handleSubmit(async()=>{await deleteItemFunc(item);})} >
          
            {/* Actions */}
            <button className="btn btn-error mt-4" type="submit">Delete!</button>
            <h1 className='text-6xl text-error'>{reqError}</h1>
        </form>
        }</>
    </div>
  )
}

export default DeleteItemForm ;