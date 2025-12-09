"use client" ;
import React, { useEffect, useState } from 'react'
import { BaseItem, EditingOperation, Item } from '../interfaces/defaults'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation';
import { AddItemResults } from '../interfaces/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { BaseItemScehemeValidator } from '../dashboard/validation';



const EditItemForm  :React.FC<EditingOperation> = ({
    saveEditToDb,user,item
}) => {
    const [loading,setLoading] = useState(false)
    const [reqError, setError] = useState("")
    const {register,handleSubmit,reset,formState : {errors},} = useForm<BaseItem>({
        defaultValues : {...item},
        resolver : zodResolver(BaseItemScehemeValidator)
    })

    const router = useRouter() ;
    
    const editItem = async (data : Item) =>{
        const item : Item = 
        {
            ...data ,
            updatedAt : new Date(),
        }
        console.log('edit og',data, 'save: ',item) ;
        if (!saveEditToDb)
            return
        setLoading(true) ;
        const res : AddItemResults = await saveEditToDb(item) ;
        console.log(res, item)
        setLoading(false) ;
        if (res.success && res.success.length > 0)
            router.push("/dashboard");
        else
            setError(res.err)
        
    }

    useEffect(()=>{
        if (item)
            reset({...item}) ;
    },[item,reset])


    if (!item)
        return <>
        <h1 className="text-lg text-error-content"> No item to edit</h1>
        </>

  return (
    <div>
        <h1> Add Items </h1>
        <>{
            loading ? <><span className="loading loading-ring loading-xl"></span></> 
            :
        <form onSubmit={handleSubmit((d)=>editItem({...item,...d}))} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            {/* Name */}
            <div className=" fieldset flex flex-col gap-1">
            <label className='label' htmlFor="name">Name</label>
            <input
                type="text"
                placeholder="Enter name of item"
                {...register("name", {
                required: "Name is required",
                })}
            />
            <p className="text-center text-red-500">{errors.name?.message}</p>
            </div>

            {/* Category */}
            <div className=" fieldset flex flex-col gap-1">
            <label className='label' htmlFor="category">Category</label>
            <input
                type="text"
                placeholder="Enter Category of item"
                {...register("category", {
                required: "Category is required",
                })}
            />
            <p className="text-center text-red-500">{errors.category?.message}</p>
            </div>

            {/* Unit */}
            <div className=" fieldset flex flex-col gap-1">
            <label className='label' htmlFor="unit">Unit</label>
            <input
                type="text"
                placeholder="Enter Unit of item"
                {...register("unit", {
                required: "Unit is required",
                })}
            />
            <p className="text-center text-red-500">{errors.unit?.message}</p>
            </div>

            {/* Cost */}
            <div className=" fieldset flex flex-col gap-1">
            <label className='label' htmlFor="costPrice">Cost Price</label>
            <input  
                type="number" step={"0.01"}
                {...register("costPrice", {
                required: "Cost Price is required",
                valueAsNumber : true
                })}
            />
            <p className="text-center text-red-500">{errors.costPrice?.message}</p>
            </div>

            {/* Quantity */}
            <div className=" fieldset flex flex-col gap-1">
            <label className='label' htmlFor="quantity">Quantity</label>
            <input
                type="number"
                {...register("quantity", {
                required: "Quantity is required",
                valueAsNumber : true
                })}
            />
            <p className="text-center text-red-500">{errors.quantity?.message}</p>
            </div>

             {/* threshhold */}
            <div className=" fieldset flex flex-col gap-1">
            <label className='label' htmlFor="reorderThreshold">Reorder Threshold</label>
            <input
                type="number"
                {...register("reorderThreshold",{
                    valueAsNumber : true
                })}
            />
            <p className="text-center text-red-500">{errors.reorderThreshold?.message}</p>
            </div>

            {/* Actions */}
            <button className="btn btn-neutral mt-4" type="submit">Submit</button>
            <button className="btn btn-ghost mt-1" type="reset">Reset</button>
            <h1 className='text-6xl text-error'>{reqError}</h1>
        </form>
        }</>
    </div>
  )
}

export default EditItemForm ;