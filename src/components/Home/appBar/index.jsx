import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {ToolbarStyled, useStyles} from "../appBar/styles";

const HomeAppBar = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar>
				<ToolbarStyled>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu">
						<MenuIcon />
					</IconButton>
				</ToolbarStyled>
			</AppBar>
		</div>
	);
};
export default HomeAppBar;
