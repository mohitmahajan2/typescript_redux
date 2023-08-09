import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "./Screens/Dashboard/Index";
import Login from "./Screens/Login/Index";

const App = () => {
  const isAuth = useSelector((state: any) => {
    const { response, authToken } = state.login;
    return response && authToken;
  });


  return (
    <Router>
      <Routes>
        <Route path={`/`} element={<Login />} />
        <Route path={`/login`} element={<Login />} />
        <Route
          path="/*"
          element={isAuth ? <AuthRoute /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

const AuthRoute = () => {
  return (
    <Routes>
      <Route path={"/user-home"} element={<Dashboard />} />;
    </Routes>
  );
};

export default App;
