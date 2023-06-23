import {AppTitle} from "../../Styles/Titles";
import {HomePageBody, HomeBoxButtons} from '../../Styles/PageStyles'
import MainButton from "../buttons/MainButtons";
import {
  faUserPlus,
  faUserPen,
  faUsersViewfinder,
  faUserMinus,
} from "@fortawesome/free-solid-svg-icons";
import { Home } from "../../Styles/PageStyles";

function HomePage() {
  return (
    <>
      <HomePageBody />
      <Home>
        <AppTitle>Users Control</AppTitle>
        <HomeBoxButtons>
          <MainButton
            LinkTo={"/adicionar"}
            ButtonText="Adicionar"
            icon={faUserPlus}
          />
          <MainButton
            LinkTo={"/visualizar"}
            ButtonText="Visualizar"
            icon={faUsersViewfinder}
          />
          <MainButton LinkTo={"/editar"} ButtonText="Editar" icon={faUserPen} />
          <MainButton
            LinkTo={"/remover"}
            ButtonText="Remover"
            icon={faUserMinus}
          />
        </HomeBoxButtons>
      </Home>
    </>
  );
}

export default HomePage;
