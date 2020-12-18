import React, { useContext } from "react"
import { AccountContext } from "../providers/AccountProvider"
import Account from "./Account"
import AccountForm from "./AccountForm"

const AccountProfile = () => {
  return (
  <>
    <Account />
    <AccountForm />
  </>
  )
}

export default AccountProfile