import { styled } from "styled-components"

const MainButtonStyle = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: ${({theme})=> theme.colors.primary};
  border-radius: 1rem;
  border: none;
  height: 100%;
  width: 100%;
  transition: 0.4s;
  color: ${({theme})=> theme.fonts.textIn};
  font-size: medium;
  font-family: ${({theme})=> theme.fonts.menus};
  font-weight: 400;

  &:hover {
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    cursor: pointer;
  }
`

export { MainButtonStyle }