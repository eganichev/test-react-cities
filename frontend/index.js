import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import Main from './container/Main';
import Game from './components/page/Game';
import './styles/index.less';



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
