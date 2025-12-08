import React from 'react'
import DashboardView from './views';
import { ClerkUser, ItemFromDB } from '../interfaces/defaults';
import { currentUser } from '@clerk/nextjs/server';

const Dashboard = async () => {
    const user =await currentUser() ;
    const simp_user : ClerkUser=  {
        firstName : user && user.firstName ? user.firstName : "",
        email : user && user.primaryEmailAddress != null &&( typeof user.primaryEmailAddress === 'string' )? user.primaryEmailAddress : "",
    }
 
 return (<DashboardView item={{} as ItemFromDB} user={simp_user} />)
}

export default Dashboard