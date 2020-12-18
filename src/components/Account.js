import React, { useContext, useState } from "react"
import { Link } from "react-router-dom";
import { Button, Card, Form, Icon } from "semantic-ui-react"
import styled from "styled-components";
import { AccountConsumer, AccountContext } from "../providers/AccountProvider"

const Account = () => {
  const [showForm, setShowForm] = useState(false)
  const {username, dateJoined, membershipLevel, accountPic, updatePicture} = useContext(AccountContext);
  const [text, setText] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault();
    updatePicture(text)
    setShowForm(false)
  }
  console.log(accountPic)
  return (
    <div style={{...styles.flex}}>
    <Card>
      <Card.Content>
        <Card.Header>{username}</Card.Header>
        <Card.Meta>
            Date Joined: {dateJoined}
        </Card.Meta>
      </Card.Content>
      <Card.Content>
        <p>Membership level: {membershipLevel}</p>
      </Card.Content>
    </Card>
    <Card>
      <Card.Header style={{...styles.flexbutton }}>
          <Button onClick={() => setShowForm(!showForm)} basic color='green' >
            Click to change profile picture
          </Button>
      </Card.Header>
      <Card.Content>
        <img src={accountPic} height="auto" width= "100%"/>
      </Card.Content>
      {showForm &&
      <Card.Content extra>
        <Form onSubmit={handleSubmit}> 
          <Form.Input placeholder={accountPic}
          label="New Picture"
          type="text"
          name="picture"
          value={text}
          onChange={(e) => setText(e.target.value)}/>
          <Form.Button color="blue">Save</Form.Button>
        </Form>
      </Card.Content>
}
    </Card>
    </div>
  )
}

export default Account

const styles = {
  flex: { 
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  flexbutton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}
