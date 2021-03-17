import CustomizedProgressBars from './progres';
import { useGroup } from '../../Providers/Group'

const GraphicGroup = ({ day }) => {

  const { activities, group } = useGroup();

  const filterActivities = activities.filter(act => new Date(act.realization_time).toLocaleDateString() === day)

  const qtdUsers = group.users.length

  const qtdGoals = group.goals.length

  const average = Math.floor((filterActivities.length*100) / (qtdUsers*qtdGoals))

  const arrayFrequency = []

  filterActivities.forEach(element => {
    const index = arrayFrequency.findIndex(e=>e.atividade===element.title)
    if(index === -1) {
      arrayFrequency.push({atividade: element.title, quantidade: 1})
    }
    else{
      arrayFrequency[index].quantidade++
    }
  });

  return (
    <div>
      {<h3>{day}</h3>}
      <CustomizedProgressBars xp={average} porcent={average}/> 
      <br></br>
      {arrayFrequency.map(register=><p>{register.atividade}: {register.quantidade}</p>)}
    </div>
  );
};

export default GraphicGroup;
