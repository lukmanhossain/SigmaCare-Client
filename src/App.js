import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Community from "./components/Community/Community";
import AdminHomeMain from "./components/Dashboard/AdminDashboard/AdminHome/AdminHomeMain/AdminHomeMain";
import DashboardMain from "./components/Dashboard/DashboardMain/DashboardMain";
import AllDoctors from "./components/Dashboard/DoctorsDashboard/AllDoctors/AllDoctors/AllDoctors";
import DoctorProfile from "./components/Dashboard/DoctorsDashboard/DoctorProfile/DoctorProfile";
import Appointment from "./components/Home/Appointment/Appointment";
import PharmacyHome from "./components/Dashboard/Pharmacy/PharmacyHome/PharmacyHome";
import Footer from "./components/Home/Footer/Footer";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import Contact from "./components/Pages/Contact/Contact";
import FAQ from "./components/Pages/FAQ/FAQ";
import Team from "./components/Pages/Team/Team";
import Service from "./components/Service/Service";
import Header from "./components/Share/Header/Header";
import SingleDoctor from "./components/SingleDoctor/SingleDoctor";
import Audiologist from "./components/Specialization/Audiologist/Audiologist";
import Cardiologist from "./components/Specialization/Cardiologist/Cardiologist";
import ENTspecialist from "./components/Specialization/ENTspecialist/ENTspecialist";
import Neurologist from "./components/Specialization/Neurologist/Neurologist";
import neurologist from "./components/Specialization/Neurologist/Neurologist";
import Oncologist from "./components/Specialization/Oncologist/Oncologist";
import Psychiatrists from "./components/Specialization/Psychiatrists/Psychiatrists";
import AddDoctors from "./components/Dashboard/DoctorsDashboard/AllDoctors/AddDoctors/AddDoctors";
import PaymentForm from "./components/Share/Payment/PaymentForm/PaymentForm";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Cart from "./components/Dashboard/Pharmacy/Cart/Cart";
import History from "./components/Pages/History/History";
import Success from "./components/Share/Payment/Validation/Success";


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="/home" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/adminhome" element={<AdminHomeMain />} />
          <Route path="/paymentForm" element={<PaymentForm />} />
          <Route path="/success/:id" element={<Success />} />
          <Route path="/login" element={<Login />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/team" element={<Team />} />
          <Route path="/medicineCart" element={<Cart />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/about" element={<History />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleDoctor/:id" element={<SingleDoctor />} />
          <Route path="/team/:id" element={<SingleDoctor />} />
          <Route path="/specialization/oncologist" element={<Oncologist />} />
          <Route path="/specialization/neurologist" element={<Neurologist />} />
          <Route
            path="/specialization/ent-specialist"
            element={<ENTspecialist />}
          />
          <Route
            path="/specialization/cardiologist"
            element={<Cardiologist />}
          />
          <Route path="/specialization/audiologist" element={<Audiologist />} />
          <Route
            path="/specialization/psychiatrists"
            element={<Psychiatrists />}
          />
          <Route path="/Pharmacy" element={<PharmacyHome />} />

          {/* optional */}
          <Route path="/allDoctors/update/:id" element={<DoctorProfile />} />
          <Route path="/addDoctors" element={<AddDoctors />} />

          {/* dashboard */}
          <Route path="/dashboard" element={<DashboardMain />}>
            <Route path="/dashboard" element={<AdminHomeMain />}></Route>
            <Route
              path="/dashboard/appointment"
              element={<Appointment />}
            ></Route>
            <Route path="/dashboard/allDoctors" element={<AllDoctors />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
