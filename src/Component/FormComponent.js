import React from "react"
const Form =(props)=>{
    return(
        
     <div className="container">
         <div className="row">
             <div className="col-sm-12 col-md-12 ">
                 <div className="col-sm-12 col-md-12 col-lg-8 " style={{margin:"auto"}}>
    <div>{props.error ? error():null}</div>
         <form onSubmit={props.loadweather}>
             <div className="col-sm-12 col-md-5 box_input ">
<input type="text" className="formcontrol" name="city" autoComplete="off" placeholder="city"/>

             </div>
             <div className="col-sm-12 col-md-5 box_input">
             <input type="text" className="formcontrol" name="country" autoComplete="off" placeholder="country"/>

             </div>
             <div className="col-sm-12 col-md-2 box_input PRight">
                 <button className="btn btn-warning">Get Weather</button>
             </div>
             </form>
             </div>
             </div>
         </div>
     </div>
    
    )
}

const error =()=>{
    return(
        <div className="alert alert-danger mx-5" role="alert">
            Please Enter City and country 
        </div>
    )
}
export default Form