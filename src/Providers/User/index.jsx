import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import api from "../../Services";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { usePersonalGroups } from "../ListGroups";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [error, setError] = useState(false);
  const [group, setGroup] = useState();
  const { handleSubscribe } = usePersonalGroups();

  useEffect(() => {
    api.get(`/users/${JSON.parse(localStorage.getItem("id"))}/`).then((res) => {
      setUserName(res.data.username);
      setGroup(res.data.group);
    });
  }, []);

  const handleChangeUserName = (choosename) => {
    api
      .patch(`/users/${JSON.parse(localStorage.getItem("id"))}/`, {
        username: choosename,
      })
      .then(() => setUserName(choosename))
      .then(() => setError(false))
      .catch((e) => setError(true));
  };
  // const group = await axios.get(
  //   `https://kabit-api.herokuapp.com/users/${id}/`,
  //   {
  //     Authorization: `Bearer ${result.data.access} `,
  //   }
  // );
  // const groupId = JSON.stringify(group.data.group);

  const login = (userData, setError, history, reset) => {
    const fetchData = async () => {
      localStorage.clear();
      const result = await api.post("/sessions/", userData);
      const token = JSON.stringify(result.data.access);
      const id = JSON.stringify(jwt_decode(token).user_id);

      api.post("/groups/26/subscribe/", {
        Authorization: `Bearer ${result.data.access}`,
      });

      localStorage.setItem("token", token);
      localStorage.setItem("id", id);
      localStorage.setItem("groupId", JSON.stringify(26));
      reset();
      history.push("/home");
    };
    fetchData();
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
