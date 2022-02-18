import React from 'react'
import "./season.css";


// const MonthFull = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const SeasonConfig = {
  summer: {
    text: "lets hit the Beach",
    iconName: "sun"
  },
  Winter: {
    text: "Burr it is Chilly",
    iconName: "snowflake"
  }

}  


function getSeason(lat, long, date){
  // let getMonth = MonthFull[date];
  if(date > 3 && date < 10){
    return lat && long > 0 ? "summer"  :  "Winter"
  }else{
     return lat && long > 0 ?  "Winter" :  "summer"
  }
}

 const Season = ({getLat, getLong}) => {
  const season = getSeason(getLat, getLong, new Date().getMonth() + 1);
  console.log(season);
  const {text, iconName} = SeasonConfig[season];
    
  return(
    <>
    <div className={`season-display ${season}`}>
    <i className={` ${iconName} icon massive icon-left`}/>
      <h1>{text}</h1>
      <i className={` ${iconName} icon massive icon-right` }/>
      </div>
    </>
   )

 }
 export default Season;
