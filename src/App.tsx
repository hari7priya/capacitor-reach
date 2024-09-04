import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import AppNavigator from "./routes/Main";

const App: React.FC = () => {
  const [isLoadingComplete, setLoadingComplete] = useState<boolean>(false);
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

const styles = {
  container: {
    display: "flex",
    // flex: 1,
  },
};

export default App;
