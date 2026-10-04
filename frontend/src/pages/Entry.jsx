import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Entry() {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const response = await fetch(import.meta.env.VITE_API_URL + "/api/user", {
        credentials: "include",
      });

      if (response.ok) {
        setLoggedIn(true);
      }

      setLoading(false);
    };

    checkAuth();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (loggedIn) {
    return <Navigate to="/home" replace />;
  }

  return <Navigate to="/welcome" replace />;
}

export default Entry;
