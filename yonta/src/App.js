

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
        <Route path="/activity" element={<ActivityAdd/>} />
        <Route path="/podcasts" element={<PodCasts/>}/>
        <Route path="/dietplans" element={<DietPlans/>}/>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/addUser" element={<AddUser/>}/>
        <Route path="/experts" element={<Experts/>}/>
        <Route path="/expertsBoard" element={<AddExpertBoard/>}/>

        </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
