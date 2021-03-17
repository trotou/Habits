import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services";

const ListActivitiesGoalsContext = createContext();

export const ActivitiesGoalsProvider = ({ children }) => {
  const [goals, setGoals] = useState("");
  const [value, setValue] = useState("");
  const [change, setChange] = useState(true);
  const [title, setTitle] = useState();
  const [activitiesGroup, setActivitiesGroup] = useState("");
  const group = JSON.parse(localStorage.getItem("groupId"));

  useEffect(() => {
    api
      .get(`/groups/${group}/`)
      .then((response) => {
        setTitle(response.data.name);
        setGoals(response.data.goals);
        setActivitiesGroup(response.data.activities);
      })
      .catch((err) => console.log(err));
  }, [group, value, change]);

  const handleGoalDelete = (id) => {
    api.delete(`/goals/${id}/`).then(() => setChange(!change));
  };

  const handleActivieDelete = (id) => {
    api.delete(`/activities/${id}/`).then(() => setChange(!change));
  };

  const handleActivieEdit = (value, id) => {
    api
      .patch(`/activities/${id}/`, {
        title: value,
      })
      .then(() => setValue(""));
  };

  const handleGoalEdit = (value, id) => {
    api
      .patch(`/goals/${id}/`, {
        title: value,
      })
      .then(() => setValue(""));
  };

  const handleActivitieCreation = (event, group) => {
    api
      .post("/activities/", {
        title: event,
        realization_time: new Date().toISOString(),
        group: group,
      })
      .then(() => setValue(""));
  };

  const handleGoalCreation = (event, group) => {
    api
      .post("/goals/", {
        title: event,
        difficulty: "easy",
        how_much_achieved: 0,
        group: group,
      })
      .then(() => setValue(""));
  };

  return (
    <ListActivitiesGoalsContext.Provider
      value={{
        change,
        setChange,
        goals,
        title,
        activitiesGroup,
        setValue,
        value,
        handleActivieDelete,
        handleGoalDelete,
        handleActivieEdit,
        handleGoalEdit,
        handleActivitieCreation,
        handleGoalCreation,
      }}
    >
      {children}
    </ListActivitiesGoalsContext.Provider>
  );
};

export const useListActivitiesGoals = () =>
  useContext(ListActivitiesGoalsContext);
