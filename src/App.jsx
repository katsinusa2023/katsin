import React, {useEffect, useState} from 'react';
import { Route, Routes } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.scss';
import HomePage from './pages/homePage';
import Header from './components/header';
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import Socials from './components/socials';
import FoodMenuPage from './pages/foodMenuPage';
import DrinkMenuPage from './pages/drinkMenuPage';
import WelcomePage from './pages/welcomePage';
import JobsPage from './pages/jobsPage';
import ScrollToTop from './utils/scrollToTop';
import PrivacyPolicyPage from './pages/privacyPolicyPage';
import TermsOfServicesPage from './pages/termsOfServicesPage';
import AccessibilityPage from './pages/accessibilityPage';
import VipRoomPage from './pages/vipRoomPage';
import GiftCardPage from './pages/giftCardPage';
import EventsPage from './pages/eventsPage';
import ParkingPage from './pages/parkingPage';
import DressCodePage from "./pages/dressCodePage";
import {useLocation} from "react-router-dom";
import ReactGA from 'react-ga';

function App() {
    const TRACKING_ID = 'G-V6EXKBL0XP';
    let location = useLocation();
  const [showSideBar, setShowSideBar] = useState(false);
  const [sideRef, setSideRef] = useState();

    ReactGA.initialize(TRACKING_ID);
    useEffect(() => {
        ReactGA.pageview(location.pathname + location.search);
    }, [location.pathname, location.search]);

  return (
    <div className="App">
      <ScrollToTop />
      <Header showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} setSideRef={setSideRef} />
      <Routes>
        <Route path={'/'} element={<HomePage sideRef={sideRef} />} />
        <Route path={'/welcome'} element={<WelcomePage />} />
        <Route path={'/menu'} element={<FoodMenuPage />} />
        <Route path={'/bar'} element={<DrinkMenuPage />} />
        <Route path={'/events'} element={<EventsPage />} />
        <Route path={'/cards'} element={<GiftCardPage />} />
        <Route path={'/vip'} element={<VipRoomPage />} />
        <Route path={'/dress-code'} element={<DressCodePage />} />
        <Route path={'/parking'} element={<ParkingPage />} />

        <Route path={'/jobs'} element={<JobsPage />} />
        <Route path={'/privacy-policy'} element={<PrivacyPolicyPage />} />
        <Route path={'/terms-of-services'} element={<TermsOfServicesPage />} />
        <Route path={'/accessibility'} element={<AccessibilityPage />} />
      </Routes>
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
