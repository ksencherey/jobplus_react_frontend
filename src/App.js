import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes, useHistory } from "react-router-dom";
//in react-router-dom v6, routes has replaced Switch
// import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cookie from "./components/Cookie";
import Home from "./pages/Home";
import JobListings from "./pages/JobListings";
import JobApplications from "./pages/JobApplications";
import Search from "./pages/Search";
import Notifications from "./pages/Notifications";
import SavedJobs from "./pages/SavedJobs";

function App() {
  //this returned Attempted import error: 'useHistory' is not exported from 'react-router-dom' error
  //  let history = useHistory();
  // let navigate = useNavigate();

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route exact path='/' render={props => <Home {...props} />} /> */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/job-listings" element={<JobListings />} />
        <Route exact path="/job-applications" element={<JobApplications />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/notification" element={<Notifications />} />
        <Route exact path="/saved-jobs" element={<SavedJobs />} />
      </Routes>
      <Cookie />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
