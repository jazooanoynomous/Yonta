
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Toast from './components/Notifications/Toast';
import Dashboard from './screens/Dashboard';
import Users from './screens/users';
<<<<<<< HEAD
import ActivityAdd from './screens/Activity/activityAdd';
=======
import PodCasts from './screens/poscasts';
import DietPlans from './screens/dietPlans';
import AddUser from './screens/addUser';
>>>>>>> ae5b8f7d0fce988d13af0386780822fadcabeca6

function App() {  
  return (
    <>
      {/* Toaster */}
      <Toast/>
    
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Dashboard/>} />
        <Route path="/patients" element={<Users/>} />
        <Route path="/activity" element={<ActivityAdd/>} />
=======
        <Route path="/" element={<Users/>} />
        <Route path="/podcasts" element={<PodCasts/>}/>
        <Route path="/dietplans" element={<DietPlans/>}/>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/addUser" element={<AddUser/>}/>

>>>>>>> ae5b8f7d0fce988d13af0386780822fadcabeca6
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
