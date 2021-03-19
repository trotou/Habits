import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import api from "../../Services";
import jwt_decode from "jwt-decode";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [error, setError] = useState(false);
  const [group, setGroup] = useState();

  useEffect(() => {
    api.get(`/users/${JSON.parse(localStorage.getItem("id"))}/`).then((res) => {
      setUserName(res.data.username);
      setGroup(res.data.group);
    });
  }, [userName]);

  const handleChangeUserName = (choosename) => {
    api
      .patch(`/users/${JSON.parse(localStorage.getItem("id"))}/`, {
        username: choosename,
      })
      .then(() => setUserName(choosename))
      .then(() => setError(false))
      .catch((e) => setError(true));
  };

  const login = (userData, setError, history, reset) => {
    const fetchData = async () => {
      localStorage.clear();
      const result = await api.post("/sessions/", userData);
      const token = JSON.stringify(result.data.access);
      const id = JSON.stringify(jwt_decode(token).user_id);

      localStorage.setItem("token", token);
      localStorage.setItem("id", id);
      localStorage.setItem("groupId", JSON.stringify(26));
      reset();
      window.location.reload();
      history.push("/home");
    };
    fetchData().catch((e) => setError(true));
  };

  return (
    <UserContext.Provider
      value={{ userName, handleChangeUserName, error, login, group }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useProviderUser = () => useContext(UserContext);
