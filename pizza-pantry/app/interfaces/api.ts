import { ItemFromDB } from "./defaults";

export interface AddItemResults{
    err: string ;
    success: string ;
}

export interface GetItemResults{
    err: string ;
    success: ItemFromDB[] ;
}