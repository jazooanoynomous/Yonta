
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
import Experts from './screens/experts/experts';
import AddExpertBoard from './screens/experts/addExpertBoard';
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
// import Report from './screens/reports';
import AdminDashboard from './screens/settings/adminDashboard';
import AddAdmin from './screens/settings/addAdmin';
import Analytics from './screens/analytics';
import Subscription from './screens/subscription';
import Product from './screens/product';
import VideoHome from './screens/videos/videohome';
import ExpertProfileScreen from './screens/experts/expertProfile';
import ECommerce from './screens/ecommerce/eCommerce';
import VendorDashboard from './screens/vendor/vendorDashboard';
import VendorProfile from './screens/vendor/vendorProfile';
import VendorInfo from './screens/vendor/vendorInfo';
import VendorBusinessdetails from './screens/vendor/vendorBusinessdetails';
import Banner from './screens/banner/banner';
import EditBanner from './screens/banner/editBanner';
import Report from './screens/report';

import OrderDetail from './screens/ecommerce/orderDetail';

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
        <Route path="/expert-profile" element={<ExpertProfileScreen/>}/>
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
        {/* <Route path="/report" element={<Report/>}/> */}
        <Route path="/settings" element={<AdminDashboard/>}/>
        <Route path="/settings/addadmin" element={<AddAdmin/>}/>

        <Route path="analytics" element={<Analytics/>}/>
        <Route path="/subscription" element={<Subscription/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/videos" element={<VideoHome/>}/>
        <Route path="/orders" element={<ECommerce/>}/>
        <Route path="/orderdetail" element={<OrderDetail/>}/>
        <Route path="/vendors" element ={<VendorDashboard/>}/>
        <Route path="/vendorprofile" element={<VendorProfile/>}/>
       <Route path="/vendorinfo" element={<VendorInfo/>}/> 
       <Route path="venderbusinessdetails" element={<VendorBusinessdetails/>}/>
       <Route path="/banner" element ={<Banner/>}/>
       <Route path="/editbanner" element={<EditBanner/>}/>
       <Route path="/report" element={<Report/>}/>




        </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
