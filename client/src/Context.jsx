import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import GlobalContext from "./GlobalContext";

const AppContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState("");
  const [userAuth, setUserAuth] = useState(false);
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  const checkUser = (userRole, role) => {
    const token = localStorage.getItem("token");
    if (!token || userRole !== role) {
      navigate('/login');
    }
  };

  useEffect(() => {
    const authUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate('/login');
          return;
        }

        const response = await axios.get("/api/auth/verify", {
          headers: {
            token: token,
          },
        });

        const details = response.data.userDetails;
        const userId = details._id;

        let userResponse;
        if (details.role === "student") {
          userResponse = await axios.get("/api/student/findStudent", {
            params: { id: userId },
          });
        } else if (details.role === "teacher") {
          userResponse = await axios.get("/api/teacher/findTeacher", {
            params: { id: userId },
          });
        }

        if (userResponse) {
          const userDetails = userResponse.data;
          setUser(userDetails);
        }

        setUserId(userId);
      } catch (error) {
        console.error(error);
        navigate('/login');
      }
    };

    authUser();
  }, [navigate]);

  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        userId,
        userAuth,
        login,
        setLogin,
        setUserAuth,
        checkUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
