
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Toast from './components/Notifications/Toast';
import Dashboard from './screens/Dashboard';
import Users from './screens/users';
import ActivityAdd from './screens/Activity/activityAdd';
import PodCasts from './screens/poscasts';
import DietPlans from './screens/dietPlans';
import AddUser from './screens/addUser';
import AddWorkout from './screens/Activity/addWorkout';
import Experts from './screens/experts';
import AddExpertBoard from './screens/addExpertBoard';
import DayDiet from './screens/dayDiet';
import Questionaris from './screens/questionars';
import ActivityHome from './screens/Activity/activityHome';
import FitnessHome from './screens/Fitness/fitnessHome';
import Ingredient from './screens/ingredient/ingredient';
import AddIngredient from './screens/ingredient/addIngredient';
import HealthyRecipes from './screens/healthRecipes/healthyRecipes';
import AddRecipes from './screens/healthRecipes/addRecipes';
import Agility from './screens/agility';
import Blog from './screens/blog/blog';
import AddBlog from './screens/blog/addBlog';
import CouponsAddX from './screens/coupons/couponsAddX';
import CouponsAddOrder from './screens/coupons/couponsAddOrder';
import Notification from './screens/notification/notification';
import CouponsAdd from './screens/coupons/couponsAdd';
import AddNotification from './screens/notification/addNotification';
import Coupons from './screens/coupons/coupons';
import Report from './screens/reports';

function App() {  
  return (
    <>
      {/* Toaster */}
      <Toast/>
    
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/patients" element={<Users/>} />
        <Route path="/add-workout" element={<AddWorkout/>} />
        <Route path="/activityadd" element={<ActivityAdd/>} />
        <Route path="/podcasts" element={<PodCasts/>}/>
        <Route path="/dietplans" element={<DietPlans/>}/>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/addUser" element={<AddUser/>}/>
        <Route path="/experts" element={<Experts/>}/>
        <Route path="/expertsBoard" element={<AddExpertBoard/>}/>
        <Route path="/dayDiet" element={<DayDiet/>} />
        <Route path="/questionars" element={<Questionaris/>}/>
        <Route path="/activity" element={<ActivityHome/>}/>
        <Route path="/fitness" element={<FitnessHome/>}/>
        <Route path="/ingredients" element={<Ingredient/>} />
        <Route path="addingredient" element={<AddIngredient/>}/>
        <Route path="/healthyrecipes" element={<HealthyRecipes/>}/>
        <Route path="/addrecipes" element={<AddRecipes/>}/>
        <Route path="/agility" element={<Agility/>}/>
        <Route path="/coupons" element={<Coupons/>}/>
        <Route path="/blogs" element={<Blog/>} />
        <Route path="/addblog"element={<AddBlog/>}/>
        <Route path="/couponsadd" element={<CouponsAdd/>}/>
        <Route path="/couponsaddx" element={<CouponsAddX/>}/>
        <Route path="/couponsaddorder" element={<CouponsAddOrder/>}/>
        <Route path="/notification" element={<Notification/>}/>
        <Route path="/addnotification" element={<AddNotification/>}/>
        <Route path="/report" element={<Report/>}/>


        </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
