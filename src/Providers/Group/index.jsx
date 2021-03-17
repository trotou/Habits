import {createContext, useContext, useEffect, useState} from "react";
import api from "../../Services";

const GroupContext = createContext();

export const GroupProvider = ({children}) => {
	const [group, setGroup] = useState(() => {
		api
			.get("/groups/26/")
			.then((response) => setGroup(response.data))
			.catch((err) => console.log(err));
	});

  const [activities, setActivities] = useState([])
  const [goals, setGoals] = useState([])
  const [average, setAverage] = useState({})
    
  useEffect(()=>{
    api.get("/groups/26/")
      .then((response) => {
        setGroup(response.data)
        activities.length < response.data.activities.length && setActivities(response.data.activities)
        goals.length < response.data.goals.length && setGoals(response.data.goals)
        // handleAverage(response.data.activities)
      })
      .catch((err) => console.log(err));
  }, [activities, goals]);

	useEffect(() => {
		api
			.get("/groups/26/")
			.then((response) => {
				setGroup(response.data);
				activities.length < response.data.activities.length &&
					setActivities(response.data.activities);
				goals.length < response.data.goals.length &&
					setGoals(response.data.goals);
				handleAverage(response.data.activities);
			})
			.catch((err) => console.log(err));
	}, [activities, goals]);

	const handleGoals = (title) => {
		console.log(title, goals);
		const currentGoal = goals.filter((e) => title === e.title)[0];
		alert(currentGoal.id);
		const newGoal = {
			how_much_achieved: currentGoal.how_much_achieved + 1,
		};
		api
			.patch(`/goals/${currentGoal.id}/`, newGoal)
			.then(() => setGoals([]))
			.catch((err) => console.log(err));
	};

  const sevenDays = () => {
    const array = []
    for(let i = 0; i < 7; i++) {
      array.push(new Date(new Date().getTime() - (86400000*i)).toLocaleDateString())
    }
    return array
  }

	const handleActivities = (title) => {
		const data = {
			title: title,
			realization_time: new Date().toISOString(),
			group: 26,
		};
		api
			.post("/activities/", data)
			.then(() => setActivities([]))
			.catch((e) => console.log(e));
	};

	const handleAverage = (acti) => {
		const averageObj = {};
		acti.forEach((e) => {
			if (averageObj[e.realization_time.substring(0, 10)] === undefined) {
				averageObj[e.realization_time.substring(0, 10)] = [];
				averageObj[e.realization_time.substring(0, 10)].push(e.title);
			} else averageObj[e.realization_time.substring(0, 10)].push(e.title);
		});
		setAverage(averageObj);
	};

  return (
    <GroupContext.Provider value={{ group, goals, activities, sevenDays, handleGoals, handleActivities }}>
      {children}
    </GroupContext.Provider>
  );
};

export const useGroup = () => useContext(GroupContext);
