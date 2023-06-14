import AppTitle from "../Styles/AppTitle";
import { BodyStyle ,BoxButtons } from "../Styles/HomeStyle";
import MainButton from "./MainButtons";
import { faUserPlus, faUserPen, faUsersViewfinder, faUserMinus } from "@fortawesome/free-solid-svg-icons";
import { Home } from "../Styles/HomeStyle";

function HomePage() {

  const add =()=> {
    console.log('hello')
  }

  return ( 
    <>
      <BodyStyle/>
      <Home>
        <AppTitle> 
          Users Control
        </AppTitle>
          <BoxButtons>
            <MainButton 
              LinkTo={'/adicionar'} 
              ButtonText="Adicionar"
              icon={faUserPlus}
              />
            <MainButton 
              LinkTo={'/visualizar'} 
              ButtonText="Visualizar"
              icon={faUsersViewfinder}
              />
            <MainButton 
              LinkTo={'/editar'}
              ButtonText="Editar"
              icon={faUserPen}
              />
            <MainButton 
              LinkTo={'/remover'}
              ButtonText="Remover"
              icon={faUserMinus}
              />
          </BoxButtons>
      </Home>
    </>
  );
}

export default HomePage;