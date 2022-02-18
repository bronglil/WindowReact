import React from 'react'
import "./error.css"

const Error = (props) => {
  return(
    <div className='error' style={{border: `2px solid ${props.color}`,}}>
        <h1>
            {props.err}
        </h1>
    </div>
   )

 }
 export default Error;