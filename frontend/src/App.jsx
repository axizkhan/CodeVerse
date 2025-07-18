import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';

import Home from './pages/Home';
import About from './pages/About';
import Tutorials from './pages/Tutorials';
import GetStarted from './pages/GetStarted';
import Checkout from './pages/CheckOut.jsx';
import TutorialDetail from './pages/TutorialDetail.jsx';
import Login from './pages/LoginPage.jsx';
import SignUp from './pages/SignUpPage.jsx';
import AddLanguage from './pages/AddLanguage';
import AddChapter from './pages/AddChapter.jsx';
import Admin from './Admin.jsx';



function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
 
      <div className="min-h-screen flex flex-col">
        {!isAdminRoute && <NavBar />}
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/checkout/:planName" element={<Checkout />} />
            <Route path="/tutorials/:language" element={<TutorialDetail />} />
            <Route path="/tutorials/:language/:topic" element={<TutorialDetail />} />
            
            <Route path='/Login' element={<Login />} />
            <Route path='/SignUp' element={<SignUp />} />
            <Route path="/admin/*" element={<Admin />} />
            {/* <Route path="/admin/add-language" element={<AddLanguage />} />
            <Route path="/admin/add-chapter" element={<AddChapter />} /> */}
            {/* Add more routes as needed */}
          </Routes>
        </div>
        {!isAdminRoute && <Footer />}
        
      </div>

  );
}

export default App;
