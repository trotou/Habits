import {addPoints} from "../../store/modules/score/actions";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import {IconButton} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {useState} from "react";

const Task = ({task}) => {
	const dispatch = useDispatch();
	const [number, setNumber] = useState(10);

	return (
		<div>
			{task.title}
			<IconButton onClick={() => dispatch(addPoints(number))}>
				<AddCircleOutlineIcon />
			</IconButton>
		</div>
	);
};
export default Task;
