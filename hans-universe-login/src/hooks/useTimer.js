import { useEffect, useRef } from "react";

export default function useTimer(state, setState, dependencies) {
  const isMountingRef = useRef(false)

  useEffect(() => {
    isMountingRef.current = true
  }, [])

  useEffect(() => {
    if(!isMountingRef.current) {
      if(state > 0) {
        const id = setInterval(() => {
          setState(c => c - 1)
        }, 1000)
        return () => {
          clearInterval(id)
        }
      } else {
        alert("Times UP!")
      }
    } else {
      isMountingRef.current = false;
    }
  }, dependencies)
}