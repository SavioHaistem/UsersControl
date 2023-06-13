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
  transition: 0.2s;
  color: ${({theme})=> theme.fonts.color};
  font-size: medium;
  font-family: ${({theme})=> theme.fonts.menus};
  font-weight: 400;

  &:hover {
    width: calc(100% + 3px);
    height: calc(100% + 3px);
    cursor: pointer;
  }
`

export { MainButtonStyle }