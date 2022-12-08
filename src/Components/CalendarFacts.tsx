import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker'
import  React, {useState, useEffect} from 'react'
 import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';
import moment from "moment"
import Fact from "./Fact"


export default () => {

    const [dayPicked, updateDayPicked] = useState<Date>(new Date())
    const [fact, updateFact] = useState<string>("")
    const api = "http://numbersapi.com/"

    // asyncronous funtion to fetch api and return text
    const getFact = async (num:number) => {
          const response = await fetch(api+num)
          const data = await response.text()
          updateFact(data)
    }

    // only updates date if its not undefined
    const checkDate = (date: Date | undefined) =>{
        if (date!=undefined){
            updateDayPicked(date)
        }

    } 

    // gets new fact whenever dayPicked is changed (whenever user clicks date on calendar)
    useEffect(()=>{
        getFact(dayPicked.getDate())
    },[dayPicked])


    return (
        <div className="flex flex-col items-center justify-center">
            
            <div className="pb-10">
            <LocalizationProvider dateAdapter = {AdapterMoment}>
            <CalendarPicker   onChange = {(a)=>checkDate(a?.toDate())} date={moment(dayPicked)} className ="shadow-xl bg-white " disableHighlightToday />
            </LocalizationProvider>
            </div>
            <Fact fact= {fact}/>

        </div>
    )
}
