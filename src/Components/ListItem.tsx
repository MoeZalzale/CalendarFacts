import React from 'react'
import { Rating, ListItem as Item, ListItemText, ListItemIcon, Divider} from '@mui/material';
import { useFactsContext } from '../Context/FactsContext';

const ListItem = ({fact} : {fact:string}) => {

    const {likeUnlike, containsFact } = useFactsContext()

    
    return (
        <>  
            <Divider/>
             <Item>
           <ListItemIcon><Rating max={1} value={containsFact(fact)?1:0} onChange={()=>likeUnlike(fact)} className="flex-[0.1]"/></ListItemIcon> 
            <ListItemText primary={fact}/>
            </Item>
        </>

    )
}

export default ListItem
