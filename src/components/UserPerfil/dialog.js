import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { useHabits } from '../../Providers/Habits'
import { Divider, ListItem } from "@material-ui/core";
import Graphic from '../DailyHabit'
import { PerfilButtonStyle } from './styles'

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

export default function FullScreenDialog() {
  const classes = useStyles();

  const { personHabits } = useHabits()

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" style={PerfilButtonStyle} onClick={handleClickOpen}>
        ESTATÍSTICAS DE USUÁRIO 
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Habits
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
            {personHabits && personHabits.map((item, i) => (
              <div>
                <ListItem key={i}>
                  <Graphic id={item.id} />
                </ListItem>
                <Divider />
              </div>
            ))}
        </List>
      </Dialog>
    </div>
  );
}
