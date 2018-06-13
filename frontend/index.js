import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import configureStore from './core/store';
import Main from './container/Main';
import Game from './components/page/Game';
import './styles/index.less';

const store = configureStore();

class Init extends Component {    
    render() {        
        return (
            <Router>  
                <Main>
                    <Switch>                        
                        <Route exact path='/' component={Game} />   
                    </Switch>   
                </Main>                        
            </Router>         
        );
    }
}

ReactDOM.render((<Init/>),
    document.querySelector('#app')); 
