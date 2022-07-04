import React from "react";
class LoginForm extends React.Component{
    constructor(props) {
      super(props);
      this.state = {username: '', password: ''};
      this.handleUserChange = this.handleUserChange.bind(this);
      this.handlePassChange = this.handlePassChange.bind(this);
    }
    handleUserChange(event) {console.log('state:', this.state);    this.setState({username: event.target.value});  }
    handlePassChange(event) {console.log('state:', this.state);    this.setState({password: event.target.value});  }
  
    render(){
      return(
        <form className="loginForm">
          <label>
            User Name:
            <input type="text" name="username" value={this.state.username} onChange={this.handleUserChange}/>
          </label>
          <label>
            Password:
            <input type="password" name="password" value={this.state.password} onChange={this.handlePassChange}/>
          </label>
        </form>
      );
    }
  }
  export default LoginForm;