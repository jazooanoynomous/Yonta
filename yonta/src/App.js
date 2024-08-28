

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Toast from './components/Notifications/Toast';
import Users from './screens/users';


function App() {
  

  return (
    <>
      {/* Toaster */}
      <Toast/>
    
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Users/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
