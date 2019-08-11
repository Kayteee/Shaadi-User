import React from 'react';
import black from './image/black.jpg';
import Carousel from 'react-bootstrap/Carousel';
import './style.css';
import history from './history';

class DemoCarousel extends React.Component {

  onFinish=()=>{
   //const number=parseInt(this.props.value);
   //console.log(number);
   history.push(`/finished/${this.props.value}`)
   
    
   } 

  slideNum=()=>{
    console.log('slideNum function called')
    const number=parseInt(this.props.value[[this.props.value.length-1]]);
    let slideArr=[];

    for(let i=1;i<=number;i++){
      slideArr.push(i)
    }
    return slideArr.map(i => {
      return (
      <Carousel.Item key={i}>
         <img style={{height:'250px'}} src={black} alt={`Slide NO : ${i}`}/>
     <Carousel.Caption>
      <h3>{`Slide NO : ${i}`}</h3>
      <p>{`This is slide no ${i}`}</p>
    </Carousel.Caption>
    </Carousel.Item>
    )
    })
  }
  render() {
      return (
        <div>
          <div className = "abc">
            <Carousel >
            {this.slideNum()}
           </Carousel>
        </div> 
        <input onClick={this.onFinish} 
          type="button" value="Finish"/><br/><br/>
        </div>
   
      );
  }
};

export default DemoCarousel;