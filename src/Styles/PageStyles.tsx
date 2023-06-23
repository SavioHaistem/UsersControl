import { styled, createGlobalStyle } from "styled-components";

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

const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: fit-content;
  overflow: hidden;
  height: 90vh;
`;

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

export {ReadPageBody, Home, HomePageBody, HomeBoxButtons}