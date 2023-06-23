import { UserForm, TextFormInput } from "../Styles/Forms";
import RoundedButton from "./buttons/RoundedButton";

function CreateUserForm() {
  return (
  <>
    <UserForm>
      <TextFormInput type="text" placeholder="digite seu nome"/>
      <TextFormInput type="e-mail" placeholder="digite seu email"/>
      <RoundedButton buttonName="Cadastrar usuário"/>
    </UserForm>
  </>
  );
};

export default CreateUserForm;