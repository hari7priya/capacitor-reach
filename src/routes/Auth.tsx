import * as React from "react";
import AuthHomeScreen from "../screens/AuthScreens/index";

// Define styles if needed
const styles = {
  header: {
    backgroundColor: "#023B5C",
    color: "white",
  },
  title: {
    color: "white",
    fontSize: 15,
  },
};

const AuthRoute: React.FC = () => {
  return (
    <div style={styles.header}>
      <div style={{ padding: "5px" }}>
        <h1 style={styles.title}>{"Login"}</h1>
        <AuthHomeScreen />
      </div>
    </div>
  );
};

export default AuthRoute;
