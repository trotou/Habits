import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services";

const PersonalGroupsContext = createContext();

export const ListGroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState("");
  const [counter, setCounter] = useState(1);
  const [groupId, setGroupId] = useState();

  useEffect(() => {
    api
      .get(`/groups/?page=${counter}`)
      .then((response) => {
        setGroups(response.data.results);
      })
      .catch((err) => console.log(err));
  }, [counter]);
  console.log(groups);

  const handleSubscribe = (id) => {
    api
      .post(`/groups/${id}/subscribe/`)
      .then(() => setGroupId(id))
      .then(localStorage.setItem("groupId", JSON.stringify(id)))
      .catch((e) => console.log(e));
  };

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSub = () => {
    setCounter(counter - 1);
  };

  return (
    <PersonalGroupsContext.Provider
      value={{
        groups,
        handleSubscribe,
        counter,
        handleAdd,
        handleSub,
        groupId,
      }}
    >
      {children}
    </PersonalGroupsContext.Provider>
  );
};

export const usePersonalGroups = () => useContext(PersonalGroupsContext);
