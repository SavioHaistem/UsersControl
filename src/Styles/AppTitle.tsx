import { styled } from "styled-components";
import './getFont.css'

const AppTitle = styled.p`
  font-size: 50px;
  font-family: ${({theme})=>theme.fonts.beautiful};
  color: ${({theme})=>theme.fonts.textOut};
`

export default AppTitle