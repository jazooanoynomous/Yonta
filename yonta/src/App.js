

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Toast from './components/Notifications/Toast';
import Dashboard from './screens/Dashboard';
import Users from './screens/users';
import ActivityAdd from './screens/Activity/activityAdd';

function App() {  
  return (
    <>
      {/* Toaster */}
      <Toast/>
    
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/patients" element={<Users/>} />
        <Route path="/activity" element={<ActivityAdd/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
