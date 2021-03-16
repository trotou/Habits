import {Avatar} from "@material-ui/core";
import {CardItem, CardUser, DivItems, DivPerfil} from "./styles";
import {Card} from "@material-ui/core";
import FullScreenDialog from "./dialog";
import {useHabits} from "../../Providers/Habits";
import FullScreenDialogGroup from "./dialogGroup";
import DialogMyGroupList from "./dialogMyGroupList";

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
				<CardItem />
				<CardItem>
					Hábitos <FullScreenDialog />
				</CardItem>
				Grupo <FullScreenDialogGroup />
				<CardItem />
				<CardItem>
					LISTAGEM DO MEU GRUPO
					<DialogMyGroupList />
				</CardItem>
				<CardItem />
			</DivItems>
		</DivPerfil>
	);
};

export default UserPerfil;
