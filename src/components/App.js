import '../App.css';
import Footer from './Footer';
import Header from './Header';
import Landing from './Landing';
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import ErrorPage from "./ErrorPage";
import Welcome from "./Welcome"
import ForgetPassword from "./ForgetPassword";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/forgetPassword" element={<ForgetPassword/>}/>
          <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
