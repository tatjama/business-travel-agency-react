import React, { useState, useEffect } from 'react';

const City =({}) =>{
   // console.log(match)
    const [info, setInfo] = useState([])  
    const [header, setHeader] = useState([])  
    const [items, setItems] = useState([])
    const [isFetch, setIsFetch] = useState(false);

    const fetchCityInformation = async() =>{
        const data = await 
     
fetch("https://tripadvisor1.p.rapidapi.com/locations/search?location_id=1&limit=30&sort=relevance&offset=0&lang=en_US&currency=USD&units=km&query=belgrade", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
		"x-rapidapi-key": "3a41e73b67msh3835cf67055f37bp1fcf6ejsn149531416411"
	}
})
        const info = await data.json();
        setIsFetch(true)
      console.log(info);
      setInfo(info.data);
      console.log(info)
      setHeader(info.data[0].result_object)
      console.log(header)
      setItems(info.data[0].result_object.category_counts)
        

    }
    return(
        <div>
              <button onClick = {fetchCityInformation}>Info</button>
              {console.log(header.category_counts)}
              {console.log(items.restaurants)}
              {isFetch && <div>
             <h1>City: {header.name}</h1> 
             <h2>LONGITUDE: {header.longitude}</h2>
             <h2>LATITUDE: {header.latitude}</h2>

             <h2>DESCRIPTION: {header.geo_description}</h2>
             </div>}
            {/**
             * <p>Restaurants: {header.category_counts.restaurants.total}</p>
            <p><ul>Accommodations
                <li>Hotels: {header.category_counts.accommodations.hotels}</li>
                <li>BBS Inns: {header.category_counts.accommodations.bbs_inns}</li>
                <li>Others: {header.category_counts.accommodations.others}</li>
                Total: {header.category_counts.accommodations.total}
            </ul></p>
    <p><ul>Attractions: Total {header.category_counts.attractions.total}
                <li>Activities: {header.category_counts.attractions.activities}</li>
                <li>Attractions: {header.category_counts.attractions.attractions}</li>
                <li>Shopping: {header.category_counts.attractions.shopping}</li>
                <li>Nightlife: {header.category_counts.attractions.nightlife}</li>
    </ul></p>
             */} 
    
              {info.map((item) => {
                  return(
                      
                      <div>
                          {info[0].result_object.name}
                          
                          <h1>Name: {item.result_object.name}</h1>
                          <span>Type: {item.result_type}</span>                        
                      </div>
                  )
              })}
        </div>
    
    )
}

export default City;