import { Avatar } from "@material-ui/core";
import { PerfilButtonStyle, CardUser, DivItems, DivPerfil } from "./styles";
import { Card } from "@material-ui/core";
import { Button } from "@material-ui/core";
import FullScreenDialog from "./dialog";
import FullScreenDialogGroup from "./dialogGroup";
import FullScreenUsers from "./dialogMyGroupList/dialog";
import ConfigDialog from "./dialogConfig";

const UserPerfil = () => {
  return (
    <DivPerfil>
      <Card style={CardUser.root} elevation={20}>
        <div style={CardUser.bannerContainer}>
          <img
            alt="Banner Pic"
            style={CardUser.banner}
            src="https://source.unsplash.com/random/300x150"
          />
        </div>
        <div style={CardUser.topProfile}>
          <Avatar variant="rounded" style={CardUser.avatar} />
          <h3 style={CardUser.userName}>Username</h3>
        </div>
      </Card>

      <DivItems>
        <Button variant="contained" style={PerfilButtonStyle}>
          EDITAR PERFIL
        </Button>
        <FullScreenDialog />
        <FullScreenDialogGroup />
        <FullScreenUsers />
        <ConfigDialog />
      </DivItems>
    </DivPerfil>
  );
};

export default UserPerfil;
