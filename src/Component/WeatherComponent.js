import React from "react"
const Weather = (props) =>{
    return(
<div className="container">
<div className="cards">
<h1>{props.city}</h1>
<h5 className="py-4">
    <i className={ props.weathericon}></i>
</h5>
{props.temp_celcious ?(
 <h1 className="py-2">{props.temp_celcious}&deg;</h1>
 ):null}
{/*show max & min temp*/ }
{minmaxTemp(props.temp_min,props.temp_max)}


<h4 className="py-3">{props.description}</h4>

</div>

   
</div>
    )
} 


const minmaxTemp =(min,max)=>{
   
   if(min && max){
       return(
        <h3>
        <span className="px-4">{min}&deg;</span>
        <span className="px-4">{max}&deg;</span>
                </h3>
       )
   }
   
    
}

export default Weather