import useApi from "../Hooks/useApi";
import NewUser from "../Hooks/useUser";

function CreatePage() {

  const sendIt = () => {
    useApi("POST", "https://users-control-backend.onrender.com/users", NewUser);
  };

  return (
    <>
      <button onClick={sendIt}> Enviar User </button>
    </>
  );
}

export default CreatePage;
