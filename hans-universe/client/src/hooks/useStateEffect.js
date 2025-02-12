import { useEffect, useRef } from "react"

function useStateEffect(effectFunction, dependencies) {
  const isMountingRef = useRef(false)

  useEffect(() => {
    isMountingRef.current = true
  }, [])

  useEffect(() => {
    if(!isMountingRef.current) {
      return effectFunction()
    } else {
      isMountingRef.current = false
    }
  }, dependencies)
}

export default useStateEffect