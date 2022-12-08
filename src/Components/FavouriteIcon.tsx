import React from 'react'
import {StarIcon}  from "@heroicons/react/24/solid"
import { useFactsContext } from '../Context/FactsContext'


// Icon displayed in the top right - responisble for opening the favourite facts list


const FavouriteIcon = () => {

 
    const {openList,factsList, isListOpen, closeList} = useFactsContext();

    return (
        <div className =" flex items-center justify-center hover:cursor-pointer" onClick ={isListOpen? closeList: openList}>
            
  <StarIcon className="w-[4rem] h-[4rem] flex items-center justify-center relative fill-yellow-400"/>
  {factsList.length>0 && <span className="absolute  text-black font-bold text-lg">
       
        {factsList.length}
  
  </span>}
        </div>
    )
}

export default FavouriteIcon
