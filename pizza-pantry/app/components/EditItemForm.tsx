"use client" ;
import React, { useEffect, useState } from 'react'
import { BaseItem, EditingOperation, Item, ItemFromDB } from '../interfaces/defaults'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation';
import { AddItemResults, EditItemResults } from '../interfaces/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { BaseItemScehemeValidator } from '../dashboard/validation';
import Image from 'next/image';



const EditItemForm  :React.FC<EditingOperation> = ({
    saveEditToDb,id,item,closeModalButton,onReset,resetError
}) => {
    const [loading,setLoading] = useState(false)
    const [reqError, setError] = useState("")
    const {register,handleSubmit,reset,formState : {errors},} = useForm<BaseItem>({
        defaultValues : {...item},
        resolver : zodResolver(BaseItemScehemeValidator)
    })

    const router = useRouter() ;
    
    const editItem = async (data : ItemFromDB) =>{
        
        const item : Item = 
        {
            ...data ,
            updatedAt : new Date(),
        }
        if (!id)
        {    
            console.log('id is null or undefined',id) ; 
            return ;
        }
        console.log('edit og',data, 'save: ',item) ;
        if (!saveEditToDb)
            return ;
        setLoading(true) ;
        const res : EditItemResults = await saveEditToDb(id,item) ;
        console.log(res, item)
        setLoading(false) ;
        if (res.success != null)
            closeModalButton?.click() ;
        else
            setError(res.err)
        
    }

    useEffect(()=>{
        if (item)
            reset({...item}) ;
    },[item,reset])

        useEffect(()=>{
            if (resetError){
                console.log("reset the error")
                setError("")
            }
        },[resetError,onReset])

    if (!item)
        return <>
        <h1 className="text-lg text-error-content"> No item to edit</h1>
        </>

    if (!id)
        return <>
        <h1 className="text-lg text-error-content"> Id of item is {id}...</h1>
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

            {
                item.createdBy?
                <>
                    <p className="text-xs uppercase font-semibold opacity-60">Created By:</p>
                    <div className='list bg-base-100 rounded-box shadow-md'>
                        <div className='list-row'>
                            <div><Image src={""} alt='Profile avatar'/></div>
                            <div>{item.createdBy.firstName} =&gt {item.createdBy.email}</div>
                            {item.createdAt ? 
                                <div className='list-col-wrap'>{item.createdAt.toString()}</div>
                            : <></>
                            }
                        </div>
                    </div>
                </>
                : <></>

            }
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