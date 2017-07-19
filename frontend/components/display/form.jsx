import React from 'react';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {input: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){

  }


  update() {
    return e => this.setState({input: e.target.value})
  }

  render(){
    return(
      <form className="form" onSubmit={this.handleSubmit}>
        <label><span className='form-label'>Change Username:</span>
          <input
            className="username"
            ref="username"
            value={this.state.input}
            placeholder="i.e. kijafa"
            onChange={this.update()}
            required/>
        </label>
        <button className="button">Search User</button>
      </form>
    );
  }
}
