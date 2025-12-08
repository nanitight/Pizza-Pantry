import { currentUser } from "@clerk/nextjs/server";
import { ClerkUser } from "../interfaces/defaults";

export async function useClerkSimpleUser():Promise<ClerkUser>{
      const user =await currentUser() ;
    const simp_user : ClerkUser=  {
        firstName : user && user.firstName ? user.firstName : "",
        email : user && user.primaryEmailAddress != null &&( typeof user.primaryEmailAddress === 'string' )? user.primaryEmailAddress : "",
    }
    return simp_user
}