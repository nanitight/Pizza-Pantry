import { useRef, useState } from "react";

export const useModalState = ()=>{

    const [resetError,setResetError] = useState(false);  
    const closeBtnRef = useRef<HTMLLabelElement>(null) ;
    const onResetError = () => setResetError(false) ;

    return {resetError,setResetError,closeBtnRef,onResetError}
}