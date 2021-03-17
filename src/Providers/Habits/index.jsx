import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services";

const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const [personHabits, setPersonHabits] = useState(false);

  useEffect(() => {
    if (!personHabits) {
      api
        .get("/habits/personal/")
        .then((response) => setPersonHabits(response.data))
        .catch((err) => console.log(err));
    }
  }, [personHabits]);

  const handleHabit = (title, date) => {
    const currentHabit = personHabits.filter((e) => title === e.title)[0];
    if (currentHabit === undefined) {
      const data = {
        title: title,
        category: "Progamação",
        difficulty: "Muito díficil",
        frequency: `{"7": "${new Date().getTime()}","0":1,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0}`,
        achieved: true,
        how_much_achieved: 1,
        user: localStorage.getItem("id"),
      };

      api
        .post(`/habits/`, data)
        .then(() => setPersonHabits(false))
        .catch((err) => console.log(err));
    } else {
      let information = JSON.parse(currentHabit.frequency);

      const currentDay = Math.floor(
        (new Date().getTime() - parseInt(information[7])) /
          (1000 * 60 * 60 * 24)
      );

      if (currentDay > 6) {
        information = {
          7: information[7],
          0: 1,
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
        };
      } else {
        information[currentDay]++;
      }

      const newInformation = JSON.stringify(information);

      const data2 = {
        title: currentHabit.title,
        category: currentHabit.category,
        difficulty: currentHabit.difficulty,
        frequency: newInformation,
        achieved: currentHabit.achieved,
        how_much_achieved: currentHabit.how_much_achieved + 1,
      };
      api
        .patch(`/habits/${currentHabit.id}/`, data2)
        .then(() => setPersonHabits(false))
        .catch((err) => console.log(err));
    }
  };

  const averageHabits = () => {
    const accumFrequency = {};
    if (personHabits[0]) {
      personHabits.forEach((element) => {
        const informations = JSON.parse(element.frequency);
        for (let inf in informations) {
          if (accumFrequency[inf] === undefined) {
            accumFrequency[inf] = informations[inf];
          } else {
            accumFrequency[inf] += informations[inf];
          }
        }
      });
    }
    return accumFrequency;
  };

  return (
    <HabitsContext.Provider
      value={{ personHabits, setPersonHabits, handleHabit, averageHabits }}
    >
      {children}
    </HabitsContext.Provider>
  );
};

export const useHabits = () => useContext(HabitsContext);
