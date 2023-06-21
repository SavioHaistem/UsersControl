import useApi from "../Hooks/useApi";


interface User {
  id: number,
  name: string,
  email: string,
}

function CreatePage() {

  const user:User = { 
    id: 12,
    name: 'HojeEdia',
    email: 'ihu.com'
  };

  const sendIt =()=> {
    useApi('POST','https://users-control-backend.onrender.com/users', user);
  };

  return ( 
    <>
      <button onClick={sendIt}>
        Enviar User
      </button>
    </>
   );
};

export default CreatePage;