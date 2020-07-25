import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export default function Main(){
return(
    <div className= "mainDiv">
       
        <button type="button">  <Link className="button" to="/schedule"> START NEW ORDER</Link> </button>
        <button >  <Link className="button" to="/profile"> BECOME A LOCAL PATREON</Link> </button>
        <div > <h1>JOIN AN ORDER</h1>
        <button type="submit" className="button2" > <Link className="button" to="/join">America Bar August, 5  5pm-7pm</Link></button>
        
        <button type="submit" className="button2" > Local Burguer - August, 22 - 1pm-2:30pm</button>
        <button type="submit" className="button2" > Pasta Pasta! - July, 31 - 7pm-9pm</button>
        <button type="submit" className="button2" > Coffe Co. - July, 30 - 7am-9am</button>
        </div>    
</div>
    
);

}