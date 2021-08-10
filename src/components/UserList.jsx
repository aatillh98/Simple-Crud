import React from "react";
import { useSelector } from "react-redux";
import { Table, Icon, Label, Button, Modal } from "semantic-ui-react";
import AddUser from "./AddUser";
import { useDispatch } from "react-redux";
import { deleteUser } from "./UserSlice";

function UserList() {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users);
  let statusValid = {
    backgroundColor: "#5BE881",
    color: "white",
    width: "100px",
  };
  let statusRejected = {
    backgroundColor: "#FF0000",
    color: "white",
    width: "100px",
  };
  let statusOnValidation = {
    backgroundColor: "#FDB64D",
    color: "white",
    width: "100px",
  };
  return (
    <>
      <Table stackable style={{ marginTop: 50 }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Date de création</Table.HeaderCell>
            <Table.HeaderCell>Etat</Table.HeaderCell>
            <Table.HeaderCell>Nom</Table.HeaderCell>
            <Table.HeaderCell>Prénom</Table.HeaderCell>
            <Table.HeaderCell>Nom d'utilisateur</Table.HeaderCell>
            <Table.HeaderCell>Matricule</Table.HeaderCell>
            <Table.HeaderCell textAlign="right">Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {users.map((user, i) => (
            <Table.Row key={i}>
              <Table.Cell>{user.id}</Table.Cell>
              <Table.Cell>{user.createdDate}</Table.Cell>
              <Table.Cell>
                {user.status == "En validation" && (
                  <Label style={statusOnValidation} horizontal>
                    {user.status}
                  </Label>
                )}
                {user.status == "Validé" && (
                  <Label style={statusValid} horizontal>
                    {user.status}
                  </Label>
                )}
                {user.status == "Rejeté" && (
                  <Label style={statusRejected} horizontal>
                    {user.status}
                  </Label>
                )}
              </Table.Cell>
              <Table.Cell>{user.firstName}</Table.Cell>
              <Table.Cell>{user.lastName}</Table.Cell>
              <Table.Cell>{user.userName}</Table.Cell>
              <Table.Cell>{user.registrationNumber}</Table.Cell>
              <Table.Cell textAlign="right">
                <Icon
                  name="trash alternate"
                  onClick={() => dispatch(deleteUser(user.id))}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <AddUser />
    </>
  );
}

export default UserList;
