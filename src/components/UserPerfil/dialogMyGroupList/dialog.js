import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import {useGroup} from "../../../Providers/Group";
import {
	BoxStyled,
	TypographyStyled,	
	ListItemStyled,
	DividerStyled,
	LinearProgressStyled,
} from "./styles";
import {Box} from "@material-ui/core";
import {PerfilButtonStyle} from "../styles";

const useStyles = makeStyles((theme) => ({
	appBar: {
		position: "relative",
	},
	title: {
		marginLeft: theme.spacing(2),
		flex: 1,
	},
}));

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialogUsers() {
	const classes = useStyles();

	const {group} = useGroup();	

	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button
				variant="contained"
				style={PerfilButtonStyle}
				onClick={handleClickOpen}>
				ESTATÍSTICAS DE USUÁRIO
			</Button>
			<Dialog
				fullScreen
				open={open}
				onClose={handleClose}
				TransitionComponent={Transition}>
				<AppBar className={classes.appBar}>
					<Toolbar>
						<IconButton
							edge="start"
							color="inherit"
							onClick={handleClose}
							aria-label="close">
							<CloseIcon />
						</IconButton>
						<Typography variant="h6" className={classes.title}>
							Habits
						</Typography>
					</Toolbar>
				</AppBar>
				<List>
					{group &&
						group.users
							.sort((a, b) => (a.id > b.id ? -1 : 1))
							.map((userProfile, index) => {
								return (
									<div key={index}>
										<List>
											<ListItemStyled>
												<TypographyStyled>{`${userProfile.username} #${
													index + 1
												}`}</TypographyStyled>

												<BoxStyled display="flex" alignItems="center">
													<Box width="150%" mr={1}>
														<LinearProgressStyled
															variant="determinate"
															color="primary"
															{...{
																value: `${
																	group?.users[index].id / 10 > 100
																		? 100
																		: group?.users[index].id / 10
																}`,
															}}
														/>
													</Box>
													<Box minWidth={35}>
														<TypographyStyled variant="body2">
															{`${group?.users[index].id / 10}%`}
														</TypographyStyled>
													</Box>
												</BoxStyled>
												<TypographyStyled>{`Text me! ${userProfile.email}`}</TypographyStyled>
											</ListItemStyled>
										</List>
										<DividerStyled />
									</div>
								);
							})}
				</List>
			</Dialog>
		</div>
	);
}
