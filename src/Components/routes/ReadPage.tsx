import { useEffect, useState } from "react";
import axios from "axios";

function ReadPage() {
  const [users, setUsers]: any = useState();

  useEffect(()=>{
    const fetchData = async()=> {
      const response = await axios.get('http://localhost:5555/visualizar')
      setUsers(JSON.parse(response.data));
    }
    fetchData()
  },[])

  console.log(users)

  return ( <p> Visualizar </p> );
}

export default ReadPage;