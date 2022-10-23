import React from 'react';
import Figure from './Figure';

const SectionFirst  = ({info, position, header}) =>{
    console.log(header.category_counts);
    return(
        <section className="section-first">
            <div className = {position}>
            {info.map(figure => <Figure 
                                    name = {figure.name} 
                                    source = {figure.source} 
                                    handleOnClick = {figure.handleOnClick} 
                                    alt = {figure.alt} 
                                    go  = {figure.go}
                                    key = {figure.name}
                                    header = {header} 
                                />
            )}                    
            </div>   
        </section>
    )    
}

export default SectionFirst;