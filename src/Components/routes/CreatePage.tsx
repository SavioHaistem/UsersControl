import axios from "axios";

interface User {
  id: number,
  name: string,
  email: string,
}

function CreatePage() {

  const user:User = { id: 2, name: 'romeu', email: 'erromeu.co' }

  const sendIt =()=> {
    axios.post('http://localhost:5555/adicionar', user);
  }

  return ( 
    <>
      <button onClick={sendIt}>
        Enviar User
      </button>
    </>
   );
}

export default CreatePage;