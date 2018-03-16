import React, { Component } from 'react';

class House extends Component {
  constructor(props) {
    super(props);

    console.log(props.members);

    this.state = {
      members: props.members,
      userInput: ''
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({ members: newProps.members })
  }


  updateValue(userInput) {
    this.setState({ userInput })
  }

  clearAndSend(user, house) {
    this.props.addMember(user, house)
    this.setState({ userInput: '' })
  }

  render() {
    console.log(this.state);
    const members = this.state.members.map(member => (<h1 key={member}>{member}</h1>))
    return (
      <div>
        <input type="text" value={this.state.userInput} onChange={(e) => { this.updateValue(e.target.value) }} />
        <button onClick={() => this.clearAndSend(this.state.userInput, this.props.house)}>Magically add member</button>
        {this.props.house}
        {members}
      </div>
    );
  }
}

export default House;