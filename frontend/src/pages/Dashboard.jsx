import DashboardCard from "../components/DashboardCard";
import AIRecommendation from "../components/AIRecommendation";
import ExpenseChart from "../components/ExpenseChart";

function Dashboard(){


return(

<div>


<h1 className="text-4xl font-bold mb-10">

Welcome Back Traveler 👋

</h1>



<div className="grid md:grid-cols-3 gap-1">


<DashboardCard

title="Total Trips"

value="12"

color="border-blue-100"

/>


<DashboardCard

title="Total Budget"

value="3500/="

color="border-green-500"

/>


<DashboardCard

title="Upcoming Trips"

value="1"

color="border-purple-500"

/>


</div>



<div className="mt-10">

<AIRecommendation/>

</div>

<div className="mt-10">

<ExpenseChart/>

</div>



<div className="mt-10 bg-white p-6 rounded-xl shadow">


<h2 className="text-2xl font-bold mb-4">

Upcoming Trips

</h2>


<ul className="space-y-3">


<li>
🇱🇰 Ella Trip - August 2026
</li>


<li>
🇯🇵 Japan Trip - December 2026
</li>


<li>
🇮🇳 India Trip - March 2027
</li>


</ul>


</div>



</div>

)

}


export default Dashboard;