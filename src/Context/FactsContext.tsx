import {createContext, ReactNode, useContext, useState} from "react"
import FavouriteList from "../Components/FavouriteList"

type FactsProviderProps = {
    children: ReactNode
}

type FactsContext = {
    likeUnlike : (fact: string) => void
    containsFact: (fact: string) => boolean
    factsList : string[]
    openList: ()=>void 
    closeList: ()=>void

}


const FactsContext = createContext({} as FactsContext)

export const useFactsContext = () =>{
    return useContext(FactsContext)
}

export const FactsContextProvider = ({children} : FactsProviderProps) =>{
    const [factsList,updateFactsList] = useState<string[]>([])
    const [isListOpen, updateListIsOpen] = useState<boolean>(false)

    const likeUnlike = (fact:string) => {
        updateFactsList(currFacts =>{
            if (currFacts.find(e => e===fact)==null){
                return [...factsList,fact]
            }
            else{
                return currFacts.filter(e => e!==fact)
            }

        })
    }

    const containsFact = (fact: string) =>{
       return factsList.includes(fact)

    }

    const openList =() =>{
        updateListIsOpen(true)
    }

    const closeList =() =>{
      updateListIsOpen(false)
    }

return (
<FactsContext.Provider value={{likeUnlike,factsList,containsFact, openList, closeList}}>

    {children}
<FavouriteList isOpen={isListOpen}/>
</FactsContext.Provider>
)

}