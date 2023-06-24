import useApi from "../Hooks/useApi";
import NewUser from "../Hooks/useUser";
import { CreatePageBody } from "../../Styles/PageStyles";
import CreateUserForm from "../CreateUserForm";
import { createContext } from "react";

export const createPageContext:any = createContext('');

function CreatePage() {

  const sendIt = () => {
    console.log('executei')
    useApi("POST", "https://users-control-backend.onrender.com/users", { name:'savio', email:'aalall', id: 1 });
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
