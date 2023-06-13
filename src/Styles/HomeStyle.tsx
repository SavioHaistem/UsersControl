import { createGlobalStyle, styled } from "styled-components";

const BodyStyle = createGlobalStyle`
  body {
    background: linear-gradient(to top right, #68bdc2 -6%, #cf5880);
    height: 100vh;
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
const BoxButtons = styled.div`
  display: grid;
  grid-template-columns: 9rem 9rem 9rem 9rem;
  grid-gap: 1rem;
  align-items: center;
  justify-items: center;
  height: 9rem;
  width: fit-content;
`

export { BoxButtons, BodyStyle };