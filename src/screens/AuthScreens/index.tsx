import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { endpoints } from "../../request/Endpoints";

const Auth: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();
  const loginUrl = endpoints.loginUrl;

  useEffect(() => {
    if (authenticated) {
      navigate("/home");
    }
  }, [authenticated, navigate]);

  useEffect(() => {
    window.addEventListener("message", (event) => {
      if (event.origin === loginUrl) {
        if (event.data) {
          console.warn(event.data.jwt);
          axios.defaults.headers.common["Authorization"] =
            `Bearer ${event.data.jwt}`;

          setAuthenticated(true);
        }
      }
    });
  }, []);

  const showActivityIndicator = () => setIsLoading(true);
  const hideActivityIndicator = () => setIsLoading(false);

  return (
    <div className="h-screen w-full">
      <iframe
        src={loginUrl}
        className="h-full w-full"
        title="Login"
        onLoad={() => hideActivityIndicator()}
        onError={() => {
          // Handle error
        }}
      />
    </div>
  );
};

export default Auth;
