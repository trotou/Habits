import styled from "styled-components";
import {
	Box,
	AccordionSummary,
	Typography,
	ListItem,
	ListItemText,
	Divider,
	LinearProgress,
} from "@material-ui/core";
import {
	currentColor3,
	currentColor1,
	neutralColor,
} from "../../../styles/globalStyles";

export const LinearProgressStyled = styled(LinearProgress)`
	height: 15px !important;
`;

export const DividerStyled = styled(Divider)`
	background-color: rgb(253 250 250 / 56%);
`;

export const ListItemTextStyled = styled(ListItemText)`
	color: black;
`;

export const ListItemStyled = styled(ListItem)`
	display: flex !important;
	flex-direction: column !important;
	align-items: start !important;
`;

export const DivStyled = styled.div`
	display: flex;
	flex-direction: row;
`;

export const DivPerfil = styled.div`
	/* display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;

	@media (max-width: 600px) {
		flex-direction: column;
	} */
`;

export const CardUser = {
	root: {
		// width: "1420px",
		height: "300px",
		display: "flex",
		flexDirection: "row",
		justifyContent: "start",
		alignItems: "center",
		backgroundColor: currentColor1,
		boxShadow: `2px 2px 8px ${currentColor3}`,
	},
	topProfile: {
		position: "absolute",
		marginTop: "75px",
		display: "flex",
		flexDirection: "column",
		width: "300px",
		justifyContent: "center",
		alignItems: "center",
	},
	avatar: {
		width: "125px",
		height: "125px",
		border: "3px solid #FFF",
		backgroundColor: neutralColor,
	},

	banner: {
		width: "100%",
		height: "100%",
		borderBottom: `2px solid ${neutralColor}`,
	},
	bannerContainer: {
		backgroundColor: neutralColor,
		width: "300px",
		height: "150px",
	},
	userName: {
		color: neutralColor,
		margin: "5px",
		maxWidth: "285px",
		fontSize: "40px",
	},
};

export const TypographyStyled = styled(Typography)`
	width: 100% !important;
	color: black;
`;

export const BoxStyled = styled(Box)`
	/* flex-direction: column !important; */
	width: 100%;
`;

export const AccordionSummaryStyled = styled(AccordionSummary)`
	/* flex-direction: column !important; */
`;

export const DivItems = styled.div`
	width: 60%;
	height: 45%;
	display: flex;
	flex-direction: column;

	@media (max-width: 600px) {
		align-items: center;
		width: 90%;
	}
`;
