import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
export default function Schedule(){
return(
    <div>
        
        <form>
        <h1>Start new order</h1>  
        <h3>Select a restaurant</h3>  
        <input type="text" placehoder= "choose a restaurant"></input>
        <h3>Select a date</h3>  
        <input type="text" placehoder= "date"></input>
        <h3>Select a time period (minimum time 2 hours)</h3>  
        <input type="text" placehoder= "time period"></input>
        <button >Schedule</button>
        <button type="submit"> <Link className="button" to="/"> CANCEL</Link></button>
        </form> 
        

</div>

);

}