import React, { Component } from 'react';
import Operations from './pages/operations';
import {
    BrowserRouter as Router,
    Switch,
    Route   
} from 'react-router-dom';
import OperationProduct from './components/Products/OperationProduct';

class App extends Component {
    render() {
        return (
            // <Operations />
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Operations />
                    </Route>
                    <Route path="/operations">
                        <Operations />
                    </Route>
                    <Route exact path="/operation/:order_id">
                        <OperationProduct />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default App;
