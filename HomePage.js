import React from 'react';
import LoginForm from './LoginForm';
import Shaadi from './Shaadi';

class HomePage extends React.Component{
    state = {
        isLoggedIn:false
    };
    handleLoginClick=(value)=> {
        
        this.setState({isLoggedIn: value});
      }

      renderPage(){
          
          //console.log(this.state.isLoggedIn);
        if(this.state.isLoggedIn){
            return (
                <Shaadi/>
            )
        }
        else{
            return (
                <LoginForm handleLoginClick={this.handleLoginClick}/>
            )
        }
      }
    

    render() {
        
        return(
            <div>
            
            {this.renderPage()}
            
            
            
                
            </div>
            
        );
    } 
}

export default HomePage;