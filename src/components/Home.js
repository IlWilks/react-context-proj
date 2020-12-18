import React, { useContext } from "react"
import { Container } from "semantic-ui-react"
import { AccountContext } from "../providers/AccountProvider"

export default () => {
  const {username, membershipLevel} = useContext(AccountContext)
  return (
    <Container>
      <h1>Welcome, {username}</h1>
      <h2>Your {membershipLevel} membership level qualifies you for the following benefits: </h2>
    </Container>
  )
}