import React, { useState } from 'react'
import { Rating } from '@mui/material';
import {useFactsContext} from "../Context/FactsContext"



const Fact = ({fact}: {fact: string}) => {
  const {containsFact,likeUnlike} = useFactsContext();

    return (
      <>
        <div className="max-w-[40rem] flex flex-col">
        <span>{fact}</span>
        </div>
        <Rating max={1} value={containsFact(fact)?1:0} onChange={()=>likeUnlike(fact)}/>
        </>
    )
}

export default Fact
