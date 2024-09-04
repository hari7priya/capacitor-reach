import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthRoute from "./Auth";
import HomeRoute from "./Home";

const AppNavigator: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthRoute />} />
        <Route path="/home" element={<HomeRoute />} />
      </Routes>
    </Router>
  );
};

export default AppNavigator;
