import { useEffect, useRef } from "react";

export default function useTimer(state, setState, verifyStatus) {
  const isMountingRef = useRef(false)

  useEffect(() => {
    isMountingRef.current = true
  }, [])

  useEffect(() => {
    if(!isMountingRef.current) {
      if(verifyStatus === "unVerified") {
        if(state > 0) {
          const id = setInterval(() => {
            setState(c => c - 1)
          }, 1000)
          return () => {
            clearInterval(id)
          }
        }
      } 
    } else {
      isMountingRef.current = false;
    }
  }, [state])
}