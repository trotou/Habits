import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { useHabits } from "../../Providers/Habits";
import { useGroup } from "../../Providers/Group";
import CircularTimer from "../CircularTimer/index";
import { appBarStyle, titleStyle, modalStyle, buttonStyle } from "./style";
import { usePersonalGroups } from "../../Providers/ListGroups";

const useStyles = makeStyles((theme) => ({
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ title }) {
  const classes = useStyles();

  const {handleSubscribe} = usePersonalGroups()

  const { handleActivities, handleGoals } = useGroup();

  const { handleHabit, averageHabits } = useHabits();

  const [open, setOpen] = React.useState(false);
  const [timer, setTimer] = React.useState({
    choseTime: false,
    timeChosen: 10,
  });

  const handleClickOpen = async () => {
    await handleSubscribe(26)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTimer({
      choseTime: false,
      timeChosen: 10,
    });
  };

  const createActions = () => {
    handleActivities(title);
    handleHabit(title, new Date());
    handleGoals(title);
    handleClose();
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        GO!
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar style={appBarStyle}>
          <Toolbar>
            <IconButton
              edge="start"
              style={titleStyle}
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" style={titleStyle}>
              Tarefa diária
            </Typography>
          </Toolbar>
        </AppBar>
        {timer.choseTime ? (
          <div style={modalStyle}>
            <CircularTimer howMuchTime={timer.timeChosen} />
            <Button
              variant="contained"
              style={buttonStyle}
              onClick={() => createActions()}
            >
              Tarefa concluída
            </Button>
          </div>
        ) : (
          <div style={modalStyle}>
            <h1>Escolha um temporizador:</h1>
            <Button
              variant="contained"
              style={buttonStyle}
              onClick={() => setTimer({ choseTime: true, timeChosen: 60 })}
            >
              1 minuto
            </Button>
            <Button
              variant="contained"
              style={buttonStyle}
              onClick={() => setTimer({ choseTime: true, timeChosen: 300 })}
            >
              5 minutos
            </Button>
            <Button
              variant="contained"
              style={buttonStyle}
              onClick={() => setTimer({ choseTime: true, timeChosen: 600 })}
            >
              10 minutos
            </Button>
            <Button
              variant="contained"
              style={buttonStyle}
              onClick={() => setTimer({ choseTime: true, timeChosen: 1800 })}
            >
              30 minutos
            </Button>
          </div>
        )}
      </Dialog>
    </div>
  );
}
