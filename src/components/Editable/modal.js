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
import { usePersonalGroups } from "../../Providers/ListGroups";
import { useListActivitiesGoals } from "../../Providers/ListActivitiesGoals";

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

export default function PersonalDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { groups, handleAdd, handleSub, handleSubscribe, counter } =
    usePersonalGroups() || "";
  const { change, setChange } = useListActivitiesGoals();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseSubscribe = (id) => {
    handleSubscribe(id);
    setChange(!change);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <div>
      <p>Subscribe to/or change to a group</p>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        subscribe
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
              All groups that you can subscribe
            </Typography>
          </Toolbar>
        </AppBar>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "space-around",
          }}
        >
          {groups !== "" &&
            groups.map((item, i) => (
              <div key={i}>
                {item.name}
                <button onClick={() => handleCloseSubscribe(item.id)}>
                  Inscreva-se
                </button>
              </div>
            ))}
        </div>
        {counter < 9 && <button onClick={handleAdd}>Next</button>}
        {counter > 1 && <button onClick={handleSub}>Previous</button>}
      </Dialog>
    </div>
  );
}
