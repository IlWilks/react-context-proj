import React, { useContext } from "react"
import { Card } from "semantic-ui-react"
import styled from "styled-components";
import { AccountConsumer, AccountContext } from "../providers/AccountProvider"

const Account = () => {
  const {username, dateJoined, membershipLevel, accountPic} = useContext(AccountContext);

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
      <Card.Content>
        {accountPic}
      </Card.Content>
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
}
