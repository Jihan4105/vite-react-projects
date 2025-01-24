import { useEffect } from "react";

export default function useWindow(state, setState) {
  const detectSize = () => {
    setState({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [state]);
}
