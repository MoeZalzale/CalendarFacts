import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker'
import  React, {useState, useEffect} from 'react'
 import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';
import moment, {Moment} from "moment"
import Fact from "./Fact"


export default () => {

    const [dayPicked, updateDayPicked] = useState<Date | undefined>(new Date())
    const [fact, updateFact] = useState<string>("")
    const api = "http://numbersapi.com/"

    const getFact = async (num:number|undefined) => {
        console.log(api+num)
          const response = await fetch(api+num)
          const data = await response.text()
          updateFact(data)
    }

    useEffect(()=>{
        getFact(dayPicked?.getDate())
    },[dayPicked])


    return (
        <div className="flex flex-col items-center justify-center">
            
            <div className="pb-10">
            <LocalizationProvider dateAdapter = {AdapterMoment}>
            <CalendarPicker   onChange = {(a)=>updateDayPicked(a?.toDate())} date={moment(dayPicked)} className ="shadow-xl bg-white " disableHighlightToday />
            </LocalizationProvider>
            </div>
            <Fact fact= {fact}/>

        </div>
    )
}
