import { useEffect, useState } from "react";
import { ReadPageBody } from "../../Styles/PageStyles";
import UsersList from "../UsersList";
import useApi from "../Hooks/useApi";

function ReadPage() {
  const [users, setUsers]: any = useState();

  useEffect(() => {
    const fetchData = async () => {
      setUsers(
        await useApi("GET", "https://users-control-backend.onrender.com/users")
      );
    };

    fetchData();
  }, []);

  users ? console.table(users) : "await";

  return (
    <>
      <ReadPageBody />
      <UsersList
        usersData={users || [{ name: "savio", id: 1, email: "teste.dantas" }]}
      />
    </>
  );
}

export default ReadPage;
