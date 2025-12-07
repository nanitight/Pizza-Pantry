import z from "zod" 
import { BaseItem } from "../interfaces/item"

// : z.ZodType<BaseItem> 
export const BaseItemScehemeValidator = z.object({
    name: z.string().min(1, { message: "name is required." }),
    category: z.string().min(3, { message: "category is required." }),
    unit :  z.string().min(1, { message: "unit is required." }),
    quantity: z.number().min(1, { message: "Cannot add 0 items." }),
    reorderThreshold:  z.number(),
    _id:  z.string(),
    costPrice : z.number().min(1, { message: "Cannot have cost of 0." })
})

export type BaseItemScehema = z.infer<typeof BaseItemScehemeValidator>