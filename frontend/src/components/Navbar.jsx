import {useNavigate} from "react-router-dom";

import {useAuth} from "../context/AuthContext";


function Navbar(){


const {logout}=useAuth();

const navigate=useNavigate();



function handleLogout(){


logout();


navigate("/login");


}




return(

<nav className="navbar">


<h2>

🌍 Travel-Made-Simple

</h2>


<button onClick={handleLogout}>

Logout

</button>



</nav>

)


}


export default Navbar;