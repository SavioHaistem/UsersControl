import { createGlobalStyle, styled } from "styled-components";

const BodyStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.backgroundPrimary};
    height: 100vh;
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
const Home = styled.div`
  background-color: #e0e0e0;
  height: 500px;
  width: 1000px;
`
const BoxButtons = styled.div`
  border: 1px solid red;
`

export { Home, BoxButtons, BodyStyle };