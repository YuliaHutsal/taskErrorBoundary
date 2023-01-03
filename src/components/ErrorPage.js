import React from 'react';

export class ErrorPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {counter:0};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState(({counter}) => ({
        counter:counter + 1
    }));
  }
    render() {
        if(this.state.counter === 3){
            throw new Error('Something went wrong');
        }
    return (
      <div onClick={this.handleClick}>{this.state.counter}</div>
    )
  }
}
