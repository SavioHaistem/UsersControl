import { useEffect, useState } from "react";
import { ReadStyle } from "../../Styles/ReadStyle";
import UsersList from "../UsersList";
import useApi from "../Hooks/useApi";

function ReadPage() {
  
  //const [users, setUsers]: any = useState();

  /* useEffect(()=>{
    const fetchData =async()=> {
      setUsers( await useApi('GET', 'https://users-control-backend.onrender.com/users'))
    };

    fetchData();
  },[]) */

  //users ? console.table(users) : 'await'

  return ( 
    <>
      <ReadStyle/>
      <UsersList usersData={[{ id: 1, name: 'savio', email: 'unrra@savio'}]}/>
    </>
  );
}

export default ReadPage;