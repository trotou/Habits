import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services";

const PersonalContext = createContext();

export const PersonalProvider = ({ children }) => {
  const [activities, setActivities] = useState();
  const [goalsGroup, setGoalsGroup] = useState();
  const [random, setRandom] = useState();

  function getRandomInt() {
    const min = Math.ceil(1);
    const max = Math.floor(9);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  useEffect(() => {
    const fetchData = async () => {
      setRandom(getRandomInt);
      const activieResponse = await api.get(`/activities/?page=2`);
      setActivities(activieResponse.data.results);
      const goalsResponse = await api.get(`/goals/?page=1`);
      setGoalsGroup(goalsResponse.data.results);
    };
    fetchData();
  }, []);

  return (
    <PersonalContext.Provider value={{ activities, goalsGroup }}>
      {children}
    </PersonalContext.Provider>
  );
};

export const usePersonal = () => useContext(PersonalContext);
