import React, { useContext } from "react"
import { Container } from "semantic-ui-react"
import { AccountContext } from "../providers/AccountProvider"

export default () => {
  const {username, membershipLevel, accountPic} = useContext(AccountContext)

  const switchRender = (param) => {
    switch(param) {
    case "Bronze" : return (
      <p>A sincere thanks for your patronage</p>)
    case "Silver" : return (
      <>
        <p>A sincere thanks for your patronage</p>
        <p>A loving glance if you come to our office (address not provided)</p>
      </>
    )
    case "Gold" : return (
      <>
        <p>A sincere thanks for your patronage</p>
        <p>A loving glance if you come to our office (address not provided)</p>
        <p>Your picture will be logged in our "Gold Member" filing cabinet</p>
      </>
    )
    case "Platinum" : return (
      <>
        <p>A sincere thanks for your patronage</p>
        <p>A loving glance if you come to our office (address not provided)</p>
        <p>Your picture will be logged in our "Gold Member" filing Cabinet</p>
        <p>Our CEO will personally use your money to wipe the crumbs from his face at dinner tonight</p>
      </>
    )
  }
}

  return (
    <Container>
      <div style={{...styles.flex}}>
        <h1>Welcome, {username}</h1>
        <img src={accountPic} width="auto" height="100px"/>     
        </div>
      <h2>Your {membershipLevel} membership level qualifies you for the following benefits: </h2>
      {switchRender(membershipLevel)}
    </Container>
  )
}

const styles = {
  flex: { 
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
}