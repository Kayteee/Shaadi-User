import React from 'react';
import DemoCarousel from './Carousel';

class DropDown extends React.Component {
    state={
        noOfSlides:[]
    }
    buildOptions=()=> {
        var arr = [];

        for (let i = 1; i <= 20; i++) {
            arr.push(<option key={i} value={i}>{i}</option>)
        }
        return arr; 
    }
    dropValue=(e)=>{
        console.log(e.target.value)
        e.preventDefault();
        this.setState({noOfSlides: [...this.state.noOfSlides, e.target.value]})
    }
   

      render() {
        return (
            <div>
            <select onChange={this.dropValue} className="select-board-size m-2">
             {this.buildOptions()}
            </select>
            <DemoCarousel value={this.state.noOfSlides}/>
            </div>
            
    
        );
    }
}

export default DropDown;