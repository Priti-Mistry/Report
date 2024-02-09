
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes, useRoutes } from 'react-router-dom';
import Report from './components/Report';
import Home from './components/Home';
import ReservationsReport from './components/ReservationsReport';
import Guests from './components/Guests';
import RoomStatus from './components/RoomStatus';

function App() {
  let paths = useRoutes([
    {
      path: '/',
      element: <Home />
    },{
      path: '/report',
      element: <Report />
    }, {
      path: '/reservation',
      element: <ReservationsReport />
    },{
      path: '/guest',
      element: <Guests />
    }, {
      path: '/roomStatus',
      element: <RoomStatus />
    }
  ]);
  return (
    <>
      {/* <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/report" element={<Report/>} />
    </Routes> */}
      <Navbar />
      {paths}

    </>
  );
}

export default App;
