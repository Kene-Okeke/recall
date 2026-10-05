import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Entry() {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("recall_token");

      // No token means the user is not logged in.
      if (!token) {
        setLoading(false);
        return;
      }

      const response = await fetch(import.meta.env.VITE_API_URL + "/api/user", {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setLoggedIn(true);
      } else {
        // Token is no longer valid.
        localStorage.removeItem("recall_token");
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
