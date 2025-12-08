import React ,{ useState} from "react";

export function useAPIRequster(){
  const [loading, setLoading] = useState<boolean>(false)
  const loadingScreen = loading ? 
    (
      <><span className="loading loading-ring loading-xl"></span></> 
    )
    :null;
//   const withAPIRequester = useCallback(
//     async <T>(fn : ()=> Promise<T>):Promise<T> =>{

//     }
//     ,[])
  return {loading, setLoading,loadingScreen}
}
