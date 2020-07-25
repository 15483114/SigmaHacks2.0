import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
export default function Join(){
return(
   <div>
       <h1>America Bar, August 5, 5pm-7pm</h1>
       <button className="button4"> Considering: 12 users</button>
       <button className="button4">Confirmed: 5 users</button>
       <button className="button4">Estimated Price of delivery: R$1,50</button>
       <button type="submit">I'm Considering</button>
       <button type="submit">I'll Confirm</button>
       <button type="submit"> <Link className="button" to="/"> RETURN</Link></button>
   </div>

);

}