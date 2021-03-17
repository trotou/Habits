import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { IconButton } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { useListActivitiesGoals } from "../../Providers/ListActivitiesGoals";
import { useProviderUser } from "../../Providers/User";
import EditIcon from "@material-ui/icons/Edit";

export default function FormDialog({ present, edit, id }) {
  const [open, setOpen] = React.useState(false);
  const {
    handleActivieEdit,
    handleGoalEdit,
    setValue,
    value,
    handleActivitieCreation,
    handleGoalCreation,
  } = useListActivitiesGoals() || [];
  const { group } = useProviderUser();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseActivitie = (value, group) => {
    handleActivitieCreation(value, group);
    setTimeout(() => {
      setOpen(false);
    }, 400);
  };

  const handleCloseGoal = (value, group) => {
    handleGoalCreation(value, group);
    setTimeout(() => {
      setOpen(false);
    }, 400);
  };

  const handleEditGoal = (value, id) => {
    handleGoalEdit(value, id);
    setOpen(false);
  };

  const handleEditActivitie = (value, id) => {
    handleActivieEdit(value, id);
    setOpen(false);
  };

  return (
    <div>
      {edit === "meta" || edit === "activitie" ? (
        <IconButton
          variant="outlined"
          color="primary"
          onClick={handleClickOpen}
        >
          <EditIcon />
        </IconButton>
      ) : (
        <IconButton
          variant="outlined"
          color="primary"
          onClick={handleClickOpen}
        >
          <AddCircleOutlineIcon />
        </IconButton>
      )}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome dado"
            fullWidth
            onChange={(e) => setValue(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          {present === "goal" && (
            <Button
              onClick={() => handleCloseGoal(value, group)}
              color="primary"
            >
              Criar Meta
            </Button>
          )}

          {present === "activitie" && (
            <Button
              onClick={() => handleCloseActivitie(value, group)}
              color="primary"
            >
              Criar Atividade
            </Button>
          )}

          {edit === "activitie" && (
            <Button
              onClick={() => handleEditActivitie(value, id)}
              color="primary"
            >
              Editar Atividade
            </Button>
          )}

          {edit === "meta" && (
            <Button onClick={() => handleEditGoal(value, id)} color="primary">
              Editar Meta
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
