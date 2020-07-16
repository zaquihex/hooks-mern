import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';


export const AppRouter = () => {
    return (
        <Router>
            <div>

                <Switch>
                    <Route path="/home" component={HomeScreen} />
                    <Route path="/about" component={AboutScreen} />
                    <Route path="/login" component={LoginScreen} />
                </Switch>

            </div>
        </Router>
    )
}
