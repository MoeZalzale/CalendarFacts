import React, { useState } from 'react'
import { Rating } from '@mui/material';
import {useFactsContext} from "../Context/FactsContext"

/* component responsible for rendering the fact text
 and favourite button functionality */


type Fact = {
  fact: string
}


const Fact = ({fact}: Fact) => {
  const {containsFact,likeUnlike} = useFactsContext();

    return (
      
        <div className="max-w-[40rem] flex flex-col items-center space-y-2">
        <span>{fact}</span>
        <Rating max={1} value={containsFact(fact)?1:0} onChange={()=>likeUnlike(fact)}/>
        </div>
        
    )
}

export default Fact
