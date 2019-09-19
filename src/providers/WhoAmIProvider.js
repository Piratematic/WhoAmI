import React from "react";

const WhoAmIContext = React.createContext();

export const WhoAmIConsumer = WhoAmIContext.Consumer;

class WhoAmIProvider extends React.Component {
  state = {
    firstname: "Derek",
    lastname: "Zoolander", 
    email: "spoon_perfection@ballsmodels.com",
    updateWhoAmI: (whoami) => this.updateWhoAmI(whoami),
  };

  updateWhoAmI = (whoami) => {
    this.setState({ ...whoami });
  }

  render () {
    return(
      <WhoAmIContext.Provider value={this.state}>
        { this.props.children }
      </WhoAmIContext.Provider>
    )
  }
}

export default WhoAmIProvider;