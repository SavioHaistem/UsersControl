import useApi from "../Hooks/useApi";
import NewUser from "../Hooks/useUser";
import { CreatePageBody } from "../../Styles/PageStyles";
import RoundedButton from "../buttons/RoundedButton";

function CreatePage() {

  const sendIt = () => {
    useApi("POST", "https://users-control-backend.onrender.com/users", NewUser);
  };

  return (
    <>
      <CreatePageBody />
        <CreateUserForm>

        </CreateUserForm>
      <RoundedButton onClick={{ sendIt }} icon={''}> Enviar </RoundedButton>
    </>
  );
}

export default CreatePage;
