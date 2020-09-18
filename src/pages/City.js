import React, { useState, useEffect } from 'react';

const City =({}) =>{
   // console.log(match)
    const [info, setInfo] = useState([])    

    const fetchCityInformation = async() =>{
        const data = await 
        fetch("https://tripadvisor1.p.rapidapi.com/locations/search?location_id=1&limit=30&sort=relevance&offset=0&lang=en_US&currency=USD&units=km&query=beograd", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
		"x-rapidapi-key": "3a41e73b67msh3835cf67055f37bp1fcf6ejsn149531416411"
	}
})
        const info = await data.json();
      console.log(info);
      setInfo(info.data);
      console.log(info)
        
        //setInfo(city.data)
        //console.log(info)
        /*const information = await city.data;
        console.log(information);
        const infoArray = information.map((item) => {
            setInfo(item.result_object)
            console.log(info)
        })*/
        //setInfo(infoArray)
        
        /*const name =  await information[0].result_object.name;
        console.log(name)
        setCity(name);*/
       // setCity(information.data)
       // console.log(city)

    }
    return(
        <div>
              <button onClick = {fetchCityInformation}>Info</button>
              {info.map((item) => {
                  return(
                      <div>{item.result_type}</div>
                  )
              })}
        </div>
    
    )
}

export default City;