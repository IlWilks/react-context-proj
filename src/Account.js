import React from "react"
import { Card } from "semantic-ui-react"

const Account = () => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>Username</Card.Header>
        <Card.Meta>
            Date Joined: date joined
        </Card.Meta>
      </Card.Content>
      <Card.Content>
        <p>Membership level: Membership Level</p>
      </Card.Content>
    </Card>
  )
}

export default Account