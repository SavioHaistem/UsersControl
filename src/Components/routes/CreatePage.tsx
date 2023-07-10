import useApi from "../Hooks/useApi";
import { CreatePageBody } from "../../Styles/PageStyles";
import CreateUserForm from "../CreateUserForm";
import { createContext } from "react";
import useUser from "../Hooks/useUser";
export const createPageContext:any = createContext('');

function CreatePage() {

  const user = useUser({name: 'savio', email: 'laolao'});

  const sendIt = () => {
    console.log('executei')
    useApi("POST", "https://users-control-backend.onrender.com/users", user);
    window.alert("Usuário enviado com sucesso")
  };

  return (
    <>
    <CreatePageBody/>
      <createPageContext.Provider value={sendIt}>
        <CreateUserForm/>
      </createPageContext.Provider>
    </>
  );
}

export default CreatePage;
