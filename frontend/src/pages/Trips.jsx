import {useEffect,useState} from "react";


import Navbar from "../components/Navbar";

import Sidebar from "../components/Sidebar";


import {

createTrip,

getTrips,

deleteTrip

}

from "../services/tripService";





function Trips(){



const [trips,setTrips]=useState([]);



const [form,setForm]=useState({


destination:"",

start_date:"",

end_date:"",

budget:"",

description:""

});





async function loadTrips(){


const data=await getTrips();


setTrips(data);


}





useEffect(()=>{


loadTrips();


},[]);






function handleChange(e){


setForm({

...form,

[e.target.name]:e.target.value

});


}





async function submitTrip(e){


e.preventDefault();



await createTrip({

...form,

budget:Number(form.budget)

});



setForm({

destination:"",

start_date:"",

end_date:"",

budget:"",

description:""

});



loadTrips();


}





async function removeTrip(id){


await deleteTrip(id);


loadTrips();


}






return(

<div>


<Navbar/>


<div className="dashboard-layout">


<Sidebar/>


<div className="dashboard-content">



<h1>

✈️ My Trips

</h1>



<div className="trip-form">


<h2>

Create New Trip

</h2>



<form onSubmit={submitTrip}>


<input

name="destination"

placeholder="Destination"

value={form.destination}

onChange={handleChange}

/>



<input

name="start_date"

placeholder="Start Date"

value={form.start_date}

onChange={handleChange}

/>



<input

name="end_date"

placeholder="End Date"

value={form.end_date}

onChange={handleChange}

/>



<input

name="budget"

placeholder="Budget"

value={form.budget}

onChange={handleChange}

/>



<textarea

name="description"

placeholder="Description"

value={form.description}

onChange={handleChange}

/>



<button>

Add Trip

</button>


</form>


</div>





<h2>

My Travel Plans

</h2>



<div className="trip-list">


{

trips.map((trip)=>(


<div className="card" key={trip.id}>


<h3>

{trip.destination}

</h3>



<p>

📅 {trip.start_date} - {trip.end_date}

</p>



<p>

💰 Budget: ₹{trip.budget}

</p>



<p>

{trip.description}

</p>



<button

onClick={()=>removeTrip(trip.id)}

>

Delete

</button>



</div>


))


}



</div>


</div>


</div>


</div>

)


}


export default Trips;