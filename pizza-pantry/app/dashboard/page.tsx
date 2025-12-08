import React from 'react'
import DashboardView from './views';
import { useClerkSimpleUser } from '../re-use/useClerkUser';
import { ItemFromDB } from '../interfaces/defaults';

const Dashboard = async () => {
 
  const simp_user = await useClerkSimpleUser() ;
 
 return (<DashboardView item={{} as ItemFromDB} user={simp_user} />)
}

export default Dashboard