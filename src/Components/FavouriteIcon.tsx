import React from 'react'
import {StarIcon}  from "@heroicons/react/24/solid"
import { useFactsContext } from '../Context/FactsContext'

const FavouriteIcon = () => {

    const {openList,factsList} = useFactsContext();

    return (
        <div className ="absolute top-10 right-20 flex items-center justify-center hover:cursor-pointer" onClick ={openList}>
            
  <StarIcon className="w-[4rem] h-[4rem] text-yellow-400 flex items-center justify-center relative"  />
  {factsList.length>0 && <span className="absolute  text-black font-bold text-lg">
       
        {factsList.length}
  
  </span>}
        </div>
    )
}

export default FavouriteIcon
