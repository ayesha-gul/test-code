
  
import React, { useState, useEffect } from 'react'
import NativeSelect from '@material-ui/core/NativeSelect';


export const DropDown = () => {
    const[data,setData] = useState()
    const[fetching,setFetching] = useState(false)

  useEffect(() => {
    async function fetchCountryData () {
          setFetching(true)

        const CoResp = await fetch('https://disease.sh/v3/covid-19/countries')
        console.log('CountryREsp =', CoResp)

         const coData=  await CoResp.json() 


       // setData(coData);
       var arr = []
       for (var i =0; i<220; i++) {
         arr.push(
           coData[i]
         )
       }
       console.log(arr)
       setData(arr)
       console.log(typeof data)
       console.log(data)
      
        setFetching(false);

    
    
    
        } fetchCountryData();



  },[])
    
    
    return (
        <div>
   <NativeSelect >
      
   {data && data.map(({country},index) => {
    <option key= {index}>
        {country}
    </option>
 


         })}
   



   </NativeSelect>
            
        </div>
    )
}

