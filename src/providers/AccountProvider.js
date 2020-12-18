import React from 'react'

export const AccountContext = React.createContext();

export const AccountConsumer = AccountContext.Consumer;

class AccountProvider extends React.Component {
  state = {
    username: "Fooman77",
    dateJoined: "12/18/20",
    membershipLevel: "Silver",
    accountPic: "https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F025%2F177%2Fchrome_2018-01-12_16-47-56.jpg",
    updateAccount: (account) => this.updateAccount(account),
    updatePicture: (picture => this.updatePicture(picture)),
  };

  updateAccount = (account) => {
    this.setState({ ...account, });
  }

  updatePicture = (picture) => {
    this.setState({ accountPic: picture });
  }

  render () {
    return (
      <AccountContext.Provider value={this.state}>
        { this.props.children }
      </AccountContext.Provider>
    )
  }
}

export default AccountProvider