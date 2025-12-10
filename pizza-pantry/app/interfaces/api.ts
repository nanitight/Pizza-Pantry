import { Item, ItemFromDB } from "./defaults";

interface CanError{
    err: string ;
}

export interface AddItemResults extends CanError{
    success: string ;
}

export interface GetItemResults extends CanError{
    success: ItemFromDB[] ;
}

export interface EditItemResults extends CanError{
    success: Item | null;
}