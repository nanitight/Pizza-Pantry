import React from 'react'
import AddItemForm from '../../components/AddItemForm'
import { ClerkUser } from '@/app/interfaces/defaults'
import { submit } from '@/app/lib/db'
import { currentUser } from '@clerk/nextjs/server'
import { useClerkSimpleUser } from '@/app/re-use/useClerkUser'


const AddItem = async () =>  {
  const simp_user = await useClerkSimpleUser() ;
  return (
    <>
    {
        simp_user ? 
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