import React from 'react';

class LoginForm extends React.Component{

    state={
        username:'',
        password:''
    }

    ValueChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
  
    };

    
    onSubmit=(e)=>{
        e.preventDefault();
        //console.log(this.state.username);
         //console.log(this.state.password);
        if(this.state.username==="shaadi" && this.state.password==="123"){
            this.props.handleLoginClick(true);
        }else{
            alert('Please enter correct username and password')
            this.setState({username:'',password:''})
            this.props.handleLoginClick(false);
            //console.log('false here')
        }
        

    }

    render() {
        return(
        <div className="text-center">
        <form onSubmit={this.onSubmit}>
        <label>
        Username:<br/>
        <input type="text" name="username" value = {this.state.username} onChange={this.ValueChange}  /><br/><br/>
        Password:<br/>
        <input type="text" name="password" value = {this.state.password} onChange={this.ValueChange}  /><br /><br/>
       </label>
       <br/><br/>
        <input type="submit" value="Submit"/><br/><br/>
        </form>
        </div>  
            
        )
    }
}
export default LoginForm;