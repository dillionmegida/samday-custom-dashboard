import React, { Component } from 'react';
import Operations from './pages/operations';
import Product from './components/Products/OperationProduct';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from 'react-router-dom';
import OperationProduct from './components/Products/OperationProduct';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

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
