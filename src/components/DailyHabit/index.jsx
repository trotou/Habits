import { useState } from "react";
import { useEffect } from "react";
import CustomizedProgressBars from "./progess";
import api from "../../Services";

const Graphic = ({ id }) => {
  const [media, setMedia] = useState(0);
  const [startDate, setStartDate] = useState(0)

  const currentDate = new Date().getTime();

  const handleMedia = (diffDays, points) => {
    diffDays > 0 ? setMedia((points/diffDays)*100) : setMedia(points*100)
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(`/habits/${id}/`);
      const initialDate = new Date(JSON.parse(result.data.frequency).day0).getTime();
      setTitle(result.data.title);
      setStartDate(initialDate)
      const points = result.data.how_much_achieved;
      const diffDays = Math.floor((currentDate - initialDate) / (1000*60*60*24))

      handleMedia(diffDays, points);
    };
    fetchData();
  }, []);

  const [title, setTitle] = useState("");

  return (
    <div>
      {<h3>{title}</h3>}
      <CustomizedProgressBars xp={media} />
      {`sua média entre ${new Date(startDate).toLocaleDateString()} e ${new Date(currentDate).toLocaleDateString()} : ${Math.floor(media)}%`}
      <br></br>
      <p>Obtenha 100pts diários para manter um aproveitamento de 100%</p>
    </div>
  );
};

export default Graphic;
