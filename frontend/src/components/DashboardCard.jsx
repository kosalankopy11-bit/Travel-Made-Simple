import Navbar from "../components/Navbar";

import Sidebar from "../components/Sidebar";


import {

Plane,

Wallet,

MapPin,

Bot

}

from "lucide-react";




function Dashboard(){



const cards=[


{

title:"Total Trips",

value:"12",

icon:<Plane/>

},



{

title:"Total Expenses",

value:"₹25,000",

icon:<Wallet/>

},



{

title:"Places Visited",

value:"8",

icon:<MapPin/>

},



{

title:"AI Plans",

value:"5",

icon:<Bot/>

}



];





return(

<div>



<Navbar/>



<div className="dashboard-layout">


<Sidebar/>



<div className="dashboard-content">


<h1>

Welcome Traveller 🌍

</h1>



<p>

Plan your trips easily with AI assistance.

</p>



<div className="cards">


{

cards.map((card,index)=>(


<div className="card" key={index}>


<div>

{card.icon}

</div>



<h3>

{card.title}

</h3>



<h2>

{card.value}

</h2>



</div>


))


}



</div>


</div>


</div>


</div>

)


}


export default Dashboard;