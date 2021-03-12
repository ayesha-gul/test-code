
  
import React, { useState, useEffect } from 'react'
import NativeSelect from '@material-ui/core/NativeSelect';


// export const CountryPicker = () => {


//     const [ccdata, setcdata] = useState([])
//     //    const [cload, csetload] = useState([false])
//     useEffect(() => {
//         async function fetchcdata() {
//             //          csetload(true);
//             const cresponse = await fetch('https://disease.sh/v3/covid-19/countries');
//             const cdata = await cresponse.json();
//         //    console.log(cdata);
//             setcdata(cdata);
//             //  csetload(false);
//         } fetchcdata();
//     }, [])


//     let cc;
//     let [index, setIndex] = useState(0);

//     return (
//         <div>
//             <br></br>
//             <NativeSelect id="select" onChange={(e) =>{ cc=e.target.value;
//             index = ccdata.findIndex(x=>x.country===cc);
//                 setIndex(index);
//             }}>
//                 {ccdata && ccdata.map(({ country }, index) => <option key={index} value={country}>{country}</option>)}
//             </NativeSelect>
           
//         </div>
//     )
// }





// import React,{useEffect,useState} from 'react'
// import NativeSelect from '@material-ui/core/NativeSelect';


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

