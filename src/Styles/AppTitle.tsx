import { styled } from "styled-components";
import './getFont.css'

const AppTitle = styled.p`
  justify-self: flex-start;
  font-size: 70px;
  font-family: ${({theme})=>theme.fonts.beautiful};
  color: ${({theme})=>theme.fonts.textOut};
`

export default AppTitle