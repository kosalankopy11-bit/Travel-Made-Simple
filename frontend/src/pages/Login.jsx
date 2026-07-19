import {useState} from "react";

import {useNavigate, Link} from "react-router-dom";


import {useAuth} from "../context/AuthContext";




function Login(){


const navigate=useNavigate();


const {login}=useAuth();



const [form,setForm]=useState({

email:"",

password:""

});



const [error,setError]=useState("");





function handleChange(e){


setForm({

...form,

[e.target.name]:e.target.value

});


}





async function handleSubmit(e){


e.preventDefault();



try{


await login(form);



navigate("/dashboard");



}

catch(err){


setError(

"Invalid email or password"

);


}


}





return (

<div className="auth-container">


<h1>

Travel-Made-Simple

</h1>



<h2>

Login

</h2>



{

error &&

<p style={{color:"red"}}>

{error}

</p>

}



<form onSubmit={handleSubmit}>


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



<button type="submit">

Login

</button>



</form>



<p>

New user?

<Link to="/register">

 Register

</Link>


</p>


</div>

)


}


export default Login;