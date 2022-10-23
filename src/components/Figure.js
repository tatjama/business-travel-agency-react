import React from 'react';

const Figure = (props)=>{
    const countTotal = (name) => {
        let total;
        switch(name) {
            default:
                total = props.header.category_counts[name.toLowerCase()].total;
                break;
            case 'Airports':
                total = props.header.category_counts[name.toLowerCase()];
                break;
            case 'Hotels':
                total = props.header.category_counts.accommodations.total;
                break;            
        }
        console.log(total)
        return total;
    }
    return(
        <figure href={props.go} onClick = {props.handleOnClick}>        
          <img src = {props.source}  alt={props.alt}/>
          <figcaption>{props.name}</figcaption>
          <figcaption className="figcaption-total">{countTotal(props.name)}</figcaption>        
        </figure>
    )
}

export default Figure;