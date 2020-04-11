import React, { Component } from 'react';
import Home from '../../components/home';
import Details from '../../components/details';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/details/:id" exact component={Details} />
                </Switch>
            </BrowserRouter>
        );
    }
}


export default App;