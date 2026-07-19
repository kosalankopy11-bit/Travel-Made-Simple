import {useState} from "react";

import {useNavigate,Link} from "react-router-dom";


import api from "../services/api";





function Register(){


const navigate=useNavigate();



const [form,setForm]=useState({

name:"",

email:"",

password:""

});



const [message,setMessage]=useState("");





function handleChange(e){


setForm({

...form,

[e.target.name]:e.target.value

});


}





async function handleSubmit(e){


e.preventDefault();



try{


await api.post(

"/auth/register",

form

);



setMessage(

"Registration successful"

);



setTimeout(()=>{


navigate("/login");


},1000);



}

catch(error){


setMessage(

"Registration failed"

);


}


}





return (

<div className="auth-container">


<h1>

Travel Made Simple

</h1>



<h2>

Create Account

</h2>



{

message &&

<p>

{message}

</p>

}



<form onSubmit={handleSubmit}>


<input

type="text"

name="name"

placeholder="Full Name"

value={form.name}

onChange={handleChange}

/>



<input

type="email"

name="email"

placeholder="Email"

value={form.email}

onChange={handleChange}

/>



<input

type="password"

name="password"

placeholder="Password"

value={form.password}

onChange={handleChange}

/>



<button>

Register

</button>



</form>



<p>

Already have account?

<Link to="/login">

 Login

</Link>

</p>



</div>

)


}


export default Register;