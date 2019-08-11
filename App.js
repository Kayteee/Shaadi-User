import React from 'react';

import {Router, Route} from 'react-router-dom';
import history from './history';
import ModalBox from './modalBox';
import HomePage from './HomePage';



class App extends React.Component {
    render(){
        return(
            <div>
                <Router history={history}>
                    <div>
                        <Route path='/' exact component={HomePage} />
                        <Route path='/finished/:noOfSlides' component={ModalBox} />
                    </div>
                </Router>
            </div>
        )
    }
}      

export default App;