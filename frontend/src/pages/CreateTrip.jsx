import TripForm from "../components/TripForm";
import {createTrip} from "../services/tripService";


function CreateTrip(){


async function submit(data){

await createTrip(data);

alert(
"Trip Created Successfully"
);

}



return(

<div>


<h1 className="text-3xl font-bold mb-6">

Create New Trip

</h1>


<TripForm
submitHandler={submit}
/>


</div>

)


}


export default CreateTrip;