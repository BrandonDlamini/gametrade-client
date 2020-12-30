import React from "react";
import {Route, Switch } from "react-router-dom";
import ViewGames from "./components/ViewGames";
import AddGame from "./components/AddGame"
import Home from "./containers/Home";
import NotFound from './containers/NotFound';

export default function Routes(){
    return (
        <Switch>
            <Route exact path ="/">
                <Home />
            </Route>
            <Route exact path ="/viewgames">
                <ViewGames/>
            </Route>
            <Route exact path = "/addgames">
                <AddGame/>
            </Route>
            <Route>
                <NotFound/>
            </Route>

        </Switch>
    );
}