import {
  TableRow,
  Table,
  TableData,
  TableTitleData,
} from "../Styles/Tables";
import { userItem } from "../Types/usersItem";

function UsersList({ usersData }: { usersData: userItem[] }) {
  return (
    <Table>
      <TableRow>
        <TableTitleData>Id</TableTitleData>
        <TableTitleData>Name</TableTitleData>
        <TableTitleData>Email</TableTitleData>
      </TableRow>
      {usersData.map((item) => (
        <TableRow>
          <TableData>{item.id}</TableData>
          <TableData>{item.name}</TableData>
          <TableData>{item.email}</TableData>
        </TableRow>
      ))}
    </Table>
  );
}

export default UsersList;
