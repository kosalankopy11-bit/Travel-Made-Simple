import { Link } from "react-router-dom";


function Home(){


return(

<section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-teal-400">


<div className="text-center text-white">


<h1 className="text-5xl font-bold mb-6">

AI Powered Smart Travel Planning

</h1>


<p className="text-xl mb-8">

Plan trips, manage expenses and explore destinations
with AI assistance.

</p>


<Link
to="/register"
className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold"
>

Start Your Journey

</Link>


</div>


</section>

)


}


export default Home;