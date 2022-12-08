import React from 'react'
import {Offcanvas, OffcanvasTitle} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import { useFactsContext } from '../Context/FactsContext'
import ListItem from './ListItem'
import { Rating, List } from '@mui/material';


const FavouriteList = ({isOpen}: {isOpen:boolean}) => {

    const {closeList, factsList} = useFactsContext()

    const renderList = (): JSX.Element[] => {
    return factsList.map(fact => {
            
            return (<ListItem fact={fact}/>)
            
        })
    }

    return (
     <Offcanvas show={isOpen} placement="end" onHide={closeList} backdrop={false}>
         <Offcanvas.Header closeButton>
        <OffcanvasTitle>Favourite Facts</OffcanvasTitle>
        </Offcanvas.Header>
        <List className="overflow-auto">
        {renderList()}
        </List>
    </Offcanvas>
    )
}

export default FavouriteList
