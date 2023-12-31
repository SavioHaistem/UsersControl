import { styled, createGlobalStyle } from "styled-components";

//Estilização do body de cada página
const ReadPageBody = createGlobalStyle`
  body {
    background-color: #917a95;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const HomePageBody = createGlobalStyle`
  body {
    background: linear-gradient(to top right, #68bdc2 -6%, #cf5880);
    height: 100vh;
    display: flex;
    align-items: space-around;
    justify-content: center;
    overflow: hidden;
  }
`;

const CreatePageBody = createGlobalStyle`
  body {
    height: 100vh;
    width: 100vw;
    background-color: #1f6c67;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  };
`;


//Estilização do componente padrão de cada pagina
const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: fit-content;
  overflow: hidden;
  height: 90vh;
`;


//Estilização de componentes genéricos específicos de cada página
const HomeBoxButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(9rem, 9rem));
  grid-auto-rows: 9rem;
  grid-gap: 1rem;
  align-items: center;
  justify-items: center;
  justify-content: center;
  padding: 1rem;
  overflow: auto;
  height: 20rem;
  width: 70vw;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export {
  ReadPageBody,
  Home,
  HomePageBody,
  HomeBoxButtons,
  CreatePageBody
}