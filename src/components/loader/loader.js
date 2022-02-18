import React from 'react'
import "./loader.css";

const Loader = (props) => {
  return(
     <div className='fullLoader'>
    <div className='spinner'> 
        <div></div>
        <div></div>
    </div>
    <br/>
    <div>{props.message}</div>
    </div>
   )
 };

 Loader.defaultProps = {
   message: "loading..."
 }
 export default Loader; 