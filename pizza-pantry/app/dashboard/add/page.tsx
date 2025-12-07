import React from 'react'
import AddItemForm from '../../components/AddItemForm'
import { ClerkUser } from '@/app/interfaces/defaults'
import { submit } from '@/app/lib/db'
import { currentUser } from '@clerk/nextjs/server'


const AddItem = async () =>  {
    const user =await currentUser() ;
    const simp_user : ClerkUser=  {
        firstName : user && user.firstName ? user.firstName : "",
        email : user && user.primaryEmailAddress != null &&( typeof user.primaryEmailAddress === 'string' )? user.primaryEmailAddress : "",
    }
  return (
    <>
    {
        user ? 
        <AddItemForm user={simp_user} addToDb={submit} />
        :
        <> 
        <h2>Please Log In</h2>
        </>
    }
    </>
  )
}

export default AddItem