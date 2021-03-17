import React from "react";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepConnector from "@material-ui/core/StepConnector";
import {
	currentColor1,
	currentColor2,
	currentColor3,
} from "../../styles/globalStyles";

const useColorlibStepIconStyles = makeStyles({
	root: {
		backgroundColor: "#ccc",
		zIndex: 1,
		color: "#fff",
		width: 50,
		height: 50,
		display: "flex",
		borderRadius: "50%",
		justifyContent: "center",
		alignItems: "center",
	},
	active: {
		backgroundImage: `linear-gradient( 136deg, ${currentColor3}, ${currentColor3}, ${currentColor1} )`,
		boxShadow: `0 4px 10px 0 ${currentColor3}`,
	},
	completed: {
		backgroundImage: `linear-gradient( 136deg, ${currentColor1}, ${currentColor1}, ${currentColor3} )`,
	},
});

function ColorlibStepIcon(props) {
	const classes = useColorlibStepIconStyles();
	const {active, completed} = props;

	return (
		<div
			className={clsx(classes.root, {
				[classes.active]: active,
				[classes.completed]: completed,
			})}></div>
	);
}

const ColorlibConnector = withStyles({
	alternativeLabel: {
		top: 22,
	},
	active: {
		"& $line": {
			backgroundImage: `linear-gradient( 95deg, ${currentColor3}, ${currentColor3}, ${currentColor1} )`,
		},
	},
	completed: {
		"& $line": {
			backgroundImage: `linear-gradient( 95deg, ${currentColor3}, ${currentColor3}, ${currentColor1} )`,
		},
	},
	line: {
		height: 3,
		border: 0,
		backgroundColor: "#eaeaf0",
		borderRadius: 1,
	},
})(StepConnector);

function getSteps() {
	return ["DAY 1", "DAY 2", "DAY 3", "DAY 4"];
}

const HabitTrail = () => {
	const [activeStep, setActiveStep] = React.useState(1);
	const steps = getSteps();

	return (
		<Stepper
			style={{
				backgroundColor: currentColor2,
				width: "98vw",
				height: "98vh",
				display: "flex",
				alignItems: "center",
			}}
			alternativeLabel
			activeStep={activeStep}
			connector={<ColorlibConnector />}>
			{steps.map((label) => (
				<Step key={label}>
					<StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
				</Step>
			))}
		</Stepper>
	);
};

export default HabitTrail;
