import { styled } from "styled-components";

const UserForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 50vw;
  background-color: ${({theme})=>theme.colors.backgroundPrimary};
  border-radius: 1rem;
`
const TextFormInput = styled.input`
  border: none;
  border-radius: 10px;
  padding: 0.5rem;
  margin: 3px 0px;
  width: 20rem;
  height: 2rem;
`

export { UserForm, TextFormInput }