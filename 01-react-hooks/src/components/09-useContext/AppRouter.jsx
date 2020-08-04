import React from 'react';
import {NavBar} from "./NavBar";
import {HomeScreen} from "./HomeScreen";
import {AboutScreen} from "./AboutScreen";
import {LoginScreen} from "./LoginScreen";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/home" component={HomeScreen} />
                    <Route exact path="/about" component={AboutScreen} />
                    <Route exact path="/login" component={LoginScreen} />
                    <Redirect path="/home" />
                </Switch>

            </div>
        </Router>
    )
}