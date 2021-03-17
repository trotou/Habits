import { createContext, useContext, useState } from "react";
import api from "../../Services";

const GroupContext = createContext();

export const GroupProvider = ({ children }) => {
  const [group, setGroup] = useState(() => {
    api
      .get("/groups/26/")
      .then((response) => setGroup(response.data))
      .catch((err) => console.log(err));
  });

  return (
    <GroupContext.Provider value={{ group, setGroup }}>
      {children}
    </GroupContext.Provider>
  );
};

export const useGroup = () => useContext(GroupContext);
