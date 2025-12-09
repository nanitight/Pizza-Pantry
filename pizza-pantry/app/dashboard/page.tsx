import React from 'react'
import DashboardView from './views';
import { ClerkUser, ItemFromDB } from '../interfaces/defaults';
import { currentUser } from '@clerk/nextjs/server';
import { GetItemResults } from '../interfaces/api';
import { getItems } from '../lib/db';

const Dashboard = async () => {
    const user =await currentUser() ;
    const simp_user : ClerkUser=  {
        firstName : user && user.firstName ? user.firstName : "",
        email : user && user.primaryEmailAddress != null &&( typeof user.primaryEmailAddress === 'string' )? user.primaryEmailAddress : "",
    }
    const fetchItems = async ()=>{
            // setLoading(true) ;
            try{
                const apiResults : GetItemResults = await getItems() ;
                return apiResults.success ;
            }
            catch(err){
                return []
            }
            
            // setLoading(false) ;
            //setFetched(true);
        }
    const fetchedItems : ItemFromDB[] = await fetchItems()

 
 return (<DashboardView user={simp_user} items={fetchedItems} />)
}

export default Dashboard