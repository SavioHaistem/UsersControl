import useApi from "../Hooks/useApi";
import NewUser from "../Hooks/useUser";
import { CreatePageBody } from "../../Styles/PageStyles";
import CreateUserForm from "../CreateUserForm";
import { createContext } from "react";

export const createPageContext:any = createContext('');

function CreatePage() {

  const sendIt = () => {
    useApi("POST", "https://users-control-backend.onrender.com/users", NewUser);
  };

  return (
    <>
      <createPageContext.Provider value={sendIt}>
        <CreatePageBody/>
        <CreateUserForm/>
      </createPageContext.Provider>
    </>
  );
}

export default CreatePage;
