import { useRickAndMortyCharacters } from "@/hooks/useRickAndMortyCharacters";
import React, { createContext } from "react";
export const ContextAPI = createContext<any>({
  characters:[],
  isLoading:false
})

export function ContextAPIProvider({children} : {children : React.ReactNode}){
  const {data, isLoading} = useRickAndMortyCharacters()
  const characters = data?.results || []
  

  return (
    <ContextAPI.Provider value={{characters, isLoading}}>
      {children}
    </ContextAPI.Provider>
  )
}