import AppTitle from "../Styles/AppTitle";
import { BodyStyle ,BoxButtons } from "../Styles/HomeStyle";
import MainButton from "./MainButtons";
import { faUserPlus, faUserPen, faUsersViewfinder, faUserMinus } from "@fortawesome/free-solid-svg-icons";


function HomePage() {

  const add =()=> {
    console.log('hello')
  }

  return ( 
    <>
        <AppTitle> 
          Users Control
        </AppTitle>
      <BodyStyle/>
          <BoxButtons>
            <MainButton 
              onClick={add} 
              ButtonText="Adicionar"
              icon={faUserPlus}
              />
            <MainButton 
              onClick={add} 
              ButtonText="Visualizar"
              icon={faUsersViewfinder}
              />
            <MainButton 
              onClick={add} 
              ButtonText="Editar"
              icon={faUserPen}
              />
            <MainButton 
              onClick={add} 
              ButtonText="Remover"
              icon={faUserMinus}
              />
          </BoxButtons>
    </>
  );
}

export default HomePage;