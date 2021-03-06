import React, { useState } from "react";
import { Button, Modal, Form, Header } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { addUser } from "./UserSlice";

function AddUser() {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    userName: "",
    registrationNumber: "",
    lastName: "",
    createdDate: "",
    status: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const openModal = () => {
    setOpen(true);
  };

  const handleClick = () => {
    dispatch(
      addUser({
        id: Math.floor(Math.random() * 1000000000),
        createdDate: data.createdDate,
        status: data.status,
        firstName: data.firstName,
        lastName: data.lastName,
        userName: data.userName,
        registrationNumber: data.registrationNumber,
      })
    );
    setData({
      firstName: "",
      userName: "",
      registrationNumber: "",
      lastName: "",
      createdDate: "",
      status: "",
    })

    setOpen(false)
  };

  const {firstName, userName, registrationNumber, lastName, createdDate, status} = data;
  
  return (
    <div>
      <Modal
      onClose={() => setOpen(false)}
        open={open}
        as={Form}
        trigger={
          <Button
            floated="right"
            style={{ backgroundColor: "#FDB64D" }}
            onClick={openModal}
          >
            Ajouter utilisateur
          </Button>
        }
        size="small"
      >
        <Header content="Ajout d'utilisateurs" />
        <Modal.Content>
          <Form.Group unstackable widths={2}>
            <Form.Input
              label="first Name"
              placeholder="first Name"
              onChange={handleChange}
              value={firstName}
              name="firstName"
            />
            <Form.Input
              label="Nom d'utilisateur"
              placeholder="Nom d'utilisateur"
              onChange={handleChange}
              value={userName}
              name="userName"
            />
            <Form.Input
              label="Matricule"
              placeholder="Matricule"
              onChange={handleChange}
              value={registrationNumber}
              name="registrationNumber"
            />
          </Form.Group>
          <Form.Group widths={2}>
            <Form.Input
              label="Pr??nom"
              placeholder="Pr??nom"
              onChange={handleChange}
              value={lastName}
              name="lastName"
            />
            <Form.Input
              type="date"
              label="Date de cr??ation"
              placeholder="Date de cr??ation"
              onChange={handleChange}
              value={createdDate}
              name="createdDate"
            />
            <Form.Field style={{ marginTop: 22 }}>
              <select
                name="status"
                id="status"
                onChange={handleChange}
                value={status}
              >
                <option value="" defaultValue>
                  Choisissez l'etat
                </option>
                <option value="En validation">En validation</option>
                <option value="Valid??">Valid??</option>
                <option value="Rejet??">Rejet??</option>
              </select>
            </Form.Field>
          </Form.Group>
        </Modal.Content>
        <Modal.Actions>
          <Button
            type="submit"
            style={{ backgroundColor: "#FDB64D" }}
            onClick={handleClick}
            disabled={!status}
          >
            Enregistrer
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default AddUser;
