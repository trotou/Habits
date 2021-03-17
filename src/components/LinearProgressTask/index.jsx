import {Box, LinearProgress, Typography} from "@material-ui/core";
import {useSelector} from "react-redux";

const LinearProgressTask = (props) => {
	const score = useSelector((store) => store.score);

	return (
		<Box display="flex" alignItems="center">
			<Box width="100%" mr={1}>
				<LinearProgress variant="determinate" {...props} />
			</Box>
			<Box minWidth={35}>
				<Typography variant="body2" color="textSecondary">
					{`${score.score}%`}
				</Typography>
			</Box>
		</Box>
	);
};
export default LinearProgressTask;
