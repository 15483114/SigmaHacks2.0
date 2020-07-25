import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
export default function Profile(){
return(
   <div>
       <button>MY SCHEDULED ORDERS</button>
       <button>HISTORY</button>
       <button>PATREONS</button>
       <button type="submit"> <Link className="button" to="/"> RETURN</Link></button>
   </div>

);

}