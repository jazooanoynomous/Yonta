

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Toast from './components/Notifications/Toast';
import Users from './screens/users';
import PodCasts from './screens/poscasts';
import DietPlans from './screens/dietPlans';

function App() {  
  return (
    <>
      {/* Toaster */}
      <Toast/>
    
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Users/>} />
        <Route path="/podcasts" element={<PodCasts/>}/>
        <Route path="/dietplans"element={<DietPlans/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
