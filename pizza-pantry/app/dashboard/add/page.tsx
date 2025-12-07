"use client" ;
import React from 'react'
import { BaseItem } from '../../interfaces/item'
import { zodResolver } from '@hookform/resolvers/zod'
import { BaseItemScehema, BaseItemScehemeValidator } from '../validation'
import { useForm } from 'react-hook-form'

const AddItemForm = () => {
    const {register,handleSubmit,formState : {errors}} = useForm<BaseItem>({
        defaultValues : {
            unit: "A2",
            name: "Item Test",
            quantity:0 ,
            reorderThreshold:0 ,
            costPrice : 0.0,
            _id:""
        },
        resolver : zodResolver(BaseItemScehemeValidator)
    })
  return (
    <div>
        <h1> Add Items </h1>
        <form onSubmit={handleSubmit((d)=>console.log('c',d))} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
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
            <label className='label' htmlFor="re">Reorder Threshold</label>
            <input
                type="number"
                {...register("reorderThreshold",{
                    valueAsNumber : true
                })}
            />
            <p className="text-center text-red-500">{errors.quantity?.message}</p>
            </div>

            {/* Actions */}
            <button className="btn btn-neutral mt-4" type="submit">Submit</button>
            <button className="btn btn-ghost mt-1" type="reset">Reset</button>
        </form>
    </div>
  )
}

export default AddItemForm