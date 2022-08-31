import { useState, useEffect } from "react"

export default function useTema(key, initialState) {
  const [ state, setState ] = useState(() => {
    const storage = localStorage(key);

    if(storage){
        return JSON.parse(storage)
    }else{
        return initialState;
    }
  })

  useEffect(() =>{
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [ state, setState]
}