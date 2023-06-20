import { List, ListItem } from "../Styles/ReadStyle";
import { userItem } from "../Types/usersItem";


function UsersList({usersData} : {usersData: userItem[]}) {
  return (
      <List> { usersData.map(item => 
        <ListItem>
          <p>{item.name}</p>
        </ListItem> )}
      </List>
  );
}

export default UsersList;