import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CalendarScreen from "../components/calendar/CalendarScreen";
import LoginScreen from "../components/auth/loginScreen";

class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Switch> (>
                    <Route exact path='/login' component={LoginScreen} />
                    <Route exact path='/' component={CalendarScreen} />
                </Switch>
            </Router>
        );
    }
}

export default AppRouter;