import {
  Routes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import Profille1 from "./pages/Profille1";
import Profille from "./pages/Profille";
import Exercises from "./components/Exercises";
import Exercises1 from "./components/Exercises1";
import Layout from "./components/Layout";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import Profille2 from "./pages/Profille2";
import CreateAccountPage from "./components/Form/SignUpPage";
import AccountLayout from "./components/Form/AccountLayout";
import AuthenticationPage from "./components/LandingPage/AuthenticationPage";
import LoginPage from "./components/Authentication/LoginPage";

function App() {
  // axios.defaults.baseURL = 'https://workout-app-3hjb.onrender.com';
  axios.defaults.baseURL = 'http://localhost:4000'
  axios.defaults.withCredentials = true;
  return (
    <UserContextProvider>
      <Routes>
          <Route path="/login" element={<LoginPage/>} />
          <Route path ="/signup" element={<CreateAccountPage/> }/>
          <Route path="/signupprofile" element={<Profille2/>} />
          <Route path="/account/:subpage?" element={<AccountLayout/>} />
        <Route element={<Layout />}>
          <Route path ="/" element={<AuthenticationPage/> }/>
          <Route path="/profile" element={<Profille1/>} />
          <Route path="/profille/:id" element={<Profille />} />
          <Route path="/exercises" element={<Exercises/>} />
          <Route path="/exercises1/:id" element={<Exercises1/>} />
        </Route>
      </Routes>
      </UserContextProvider>
  );
}
export default App;
