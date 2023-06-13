import { BodyStyle ,BoxButtons } from "../Styles/HomeStyle";
import MainButton from "./MainButtons";


function HomePage() {

  const add =()=> {
    console.log('hello')
  }

  return ( 
    <>    
      <BodyStyle/>
          <BoxButtons>
            <MainButton 
              onClick={add} 
              ButtonText="Adicionar"/>
            <MainButton 
              onClick={add} 
              ButtonText="Visualizar"/>
            <MainButton 
              onClick={add} 
              ButtonText="Editar"/>
            <MainButton 
              onClick={add} 
              ButtonText="Remover"/>
          </BoxButtons>
    </>
  );
}

export default HomePage;