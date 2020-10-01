import React from 'react';

const Rating = (props) => {
    return(
        <div>
        {(props.rate === 5)? 
            <div>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            </div>: (props.rate === 4)?
            <div>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            </div>: (props.rate === 3)?
            <div>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            </div>: (props.rate === 2)?
            <div>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star "></span>
            <span className="fa fa-star "></span>
            <span className="fa fa-star"></span>
            </div>: (props.rate === 1)?
            <div>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            </div>:
            <div>There is not user rating!</div>                
            }
            </div>
   )
}

export default Rating;